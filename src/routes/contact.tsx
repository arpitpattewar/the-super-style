import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TheSuperCover" },
      { name: "description", content: "Get in touch with TheSuperCover. Phone, email, Instagram and WhatsApp — we're here to help." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-warm-gradient opacity-60" />
        <div className="container-tsc relative py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3">We'd love to hear from you.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Questions, feedback or bulk orders — reach us anytime.</p>
        </div>
      </section>

      <section className="container-tsc py-14 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[
            { Icon: Phone, label: "Phone", value: "+91 6361424599", href: "tel:+916361424599" },
            { Icon: Phone, label: "Phone", value: "+91 7899977497", href: "tel:+917899977497" },
            { Icon: Mail, label: "Email", value: "feedback.thesupercover@gmail.com", href: "mailto:feedback.thesupercover@gmail.com" },
            { Icon: Instagram, label: "Instagram", value: "@thesupercover.com_", href: "https://www.instagram.com/thesupercover.com_" },
            { Icon: Linkedin, label: "LinkedIn", value: "TheSuperCover", href: "https://www.linkedin.com/company/thesupercover-orthopaedic-essentials/" },
            { Icon: Youtube, label: "YouTube", value: "@Thesupercoverortho", href: "https://www.youtube.com/@Thesupercoverortho" },
          ].map(({ Icon, label, value, href }) => (
            <a key={label + value} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-soft hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-coral-gradient text-white"><Icon className="h-4 w-4" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
                <div className="font-display font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); (e.currentTarget as HTMLFormElement).reset(); }}
          className="rounded-3xl bg-card p-8 shadow-soft space-y-4"
        >
          <h3 className="font-display text-2xl font-bold">Send us a note</h3>
          <input required name="name" placeholder="Your name" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
          <input required type="email" name="email" placeholder="Email" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
          <textarea required name="msg" rows={5} placeholder="Tell us how we can help" className="w-full p-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none" />
          <button className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium">Send message</button>
          {sent && <p className="text-sm" style={{ color: "var(--coral)" }}>Thanks! We'll get back to you within 24 hours.</p>}
        </form>
      </section>
    </div>
  );
}
