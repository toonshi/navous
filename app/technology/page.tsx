import Navbar from "../components/Navbar";
import SecurityStack from "../components/SecurityStack";
import DataPrivacy from "../components/DataPrivacy";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Integration & Security — Navous",
  description: "Enterprise-grade security, zero IT friction, and full compliance for hospital and campus deployments.",
};

export default function IntegrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.navous.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "IT & Security",
                "item": "https://www.navous.app/technology"
              }
            ]
          }),
        }}
      />
      <main className="flex-1 pt-20">
        {/* Page hero */}
        <div className="py-24 px-6 md:px-12 text-center border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
             <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-accent/20 bg-accent/10 text-accent uppercase">
               IT & Security
             </span>
             <h1 className="font-display text-5xl md:text-[5rem] font-bold tracking-tight text-white leading-[0.95] mb-8">
               Zero friction for IT. <br />
               <span className="text-white/60">Total control for you.</span>
             </h1>
             <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
               Navous is built to pass hospital procurement checklists on day one. Seamless deployment, no app downloads, and absolute data sovereignty.
             </p>
          </div>
        </div>

        <SecurityStack />
        <DataPrivacy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
