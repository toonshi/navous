"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const facilityType = formData.get("facilityType") as string;
  const challenges = formData.get("challenges") as string;

  if (!fullName || !email) {
    return { success: false, message: "Missing required fields." };
  }

  // Configure Nodemailer with environment variables
  // Note: These must be set in your .env.local or deployment platform
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465", 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 1. Send Internal Notification to the Navous Team
    await transporter.sendMail({
      from: `"Navous Leads" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || "partnerships@navous.app",
      replyTo: email,
      subject: `New Lead: ${fullName} (${facilityType})`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Facility Type: ${facilityType}
        Challenges: ${challenges}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Facility Type:</strong> ${facilityType}</p>
          <p><strong>Challenges:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc;">
            ${challenges}
          </blockquote>
        </div>
      `,
    });

    // 2. Send User Confirmation (The Receipt)
    await transporter.sendMail({
      from: `"Navous Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmation: Navous Walkthrough Request",
      text: `Hi ${fullName},\n\nThank you for reaching out. We've received your request for a technical walkthrough for your ${facilityType} facility. Our partnership lead will review your notes and reach out within 24 hours to schedule a session.\n\nBest regards,\nThe Navous Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #2D3748;">Hi ${fullName},</h2>
          <p>Thank you for reaching out to Navous.</p>
          <p>We've received your request for a technical walkthrough for your <strong>${facilityType}</strong> facility. Our partnership lead is currently reviewing the challenges you shared.</p>
          
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

    return { success: true, message: "Thank you! We'll be in touch shortly." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Could not send email. Please check your SMTP settings." };
  }
}
