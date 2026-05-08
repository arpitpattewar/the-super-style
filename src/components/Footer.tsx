import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white" style={{ background: "var(--ink)" }}>
      <div className="container-tsc py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="TheSuperCover" className="h-8 w-auto invert brightness-0" />
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Color, style and comfort for orthopaedic essentials. Because a happy mind helps the body heal faster.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/thesupercover.com_" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/company/thesupercover-orthopaedic-essentials/" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Linkedin className="h-4 w-4" /></a>
            <a href="https://www.youtube.com/@Thesupercoverortho" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/arm-sling" className="hover:text-white">Arm Sling</Link></li>
            <li><Link to="/arm-cast" className="hover:text-white">Arm Cast Cover</Link></li>
            <li><Link to="/leg-cast" className="hover:text-white">Leg Cast Cover</Link></li>
            <li><Link to="/tshirts" className="hover:text-white">T-Shirts</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 6361424599</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7899977497</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> feedback.thesupercover@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-tsc py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} TheSuperCover. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/faq" className="hover:text-white">Shipping</Link>
            <Link to="/faq" className="hover:text-white">Returns</Link>
            <Link to="/faq" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
