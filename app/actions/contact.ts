"use server";

import { Resend } from "resend";

// Escape user-supplied values before interpolating into HTML email bodies.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sender must be an address on a domain you've verified in Resend
// (e.g. navous.app). Falls back to Resend's shared testing sender, which can
// only deliver to your own account email until the domain is verified.
const FROM = process.env.CONTACT_FROM_EMAIL || "Navous Leads <onboarding@resend.dev>";
const NOTIFY_TO = process.env.NOTIFICATION_EMAIL || "partnerships@navous.app";

export async function submitContactForm(
  prevState: { success: boolean; message: string } | null,
  formData: FormData,
) {
  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const facilityType = (formData.get("facilityType") as string) || "Not specified";
  const challenges = ((formData.get("challenges") as string) || "").trim();

  if (!fullName || !email) {
    return { success: false, message: "Please provide your name and email." };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return { success: false, message: "Email is not configured yet. Please try again later." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Escaped copies for safe HTML interpolation.
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeFacility = escapeHtml(facilityType);
  const safeChallenges = escapeHtml(challenges) || "(none provided)";

  try {
    // 1. Internal notification to the Navous team (reply goes to the lead).
    const notify = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New Lead: ${fullName} (${facilityType})`,
      text: `Name: ${fullName}\nEmail: ${email}\nFacility Type: ${facilityType}\nChallenges: ${challenges}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Facility Type:</strong> ${safeFacility}</p>
          <p><strong>Challenges:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc;">
            ${safeChallenges}
          </blockquote>
        </div>
      `,
    });

    if (notify.error) {
      console.error("Failed to send lead notification:", notify.error);
      return { success: false, message: "Could not send your request. Please try again." };
    }

    // 2. Confirmation receipt to the user. Requires a verified sending domain.
    const confirm = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Confirmation: Navous Walkthrough Request",
      text: `Hi ${fullName},\n\nThank you for reaching out. We've received your request for a technical walkthrough for your ${facilityType} facility. Our partnership lead will review your notes and reach out within 24 hours to schedule a session.\n\nBest regards,\nThe Navous Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #2D3748;">Hi ${safeName},</h2>
          <p>Thank you for reaching out to Navous.</p>
          <p>We've received your request for a technical walkthrough for your <strong>${safeFacility}</strong> facility. Our partnership lead is currently reviewing the challenges you shared.</p>

          <div style="background: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; font-size: 14px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">What's Next?</h3>
            <ul style="padding-left: 20px; color: #4A5568;">
              <li style="margin-bottom: 8px;">Our team will review your requirements to ensure the walkthrough is tailored to your facility.</li>
              <li style="margin-bottom: 8px;">You will receive a follow-up email within 24 hours to pick a time slot.</li>
              <li>If you have immediate questions, you can check our <a href="https://navous.app/technology" style="color: #319795;">technology stack</a>.</li>
            </ul>
          </div>

          <p style="color: #718096; font-size: 14px; margin-top: 30px;">
            Best regards,<br />
            <strong>The Navous Team</strong>
          </p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #A0AEC0; text-align: center;">
            This is an automated confirmation. No need to reply to this address.
          </p>
        </div>
      `,
    });

    if (confirm.error) {
      // The team was already notified; don't fail the user over the receipt.
      console.error("Lead saved, but confirmation email failed:", confirm.error);
    }

    return { success: true, message: "Thank you! We'll be in touch shortly." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Could not send your request. Please try again." };
  }
}
