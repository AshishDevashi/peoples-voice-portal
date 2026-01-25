import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/our-story" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "PDF Library", path: "/pdf-library" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary">
              Vast Media <span className="text-primary">TV News</span>
            </h3>
            <p className="mt-2 text-sm font-medium text-primary">
              "A Media Fighting for People's Right to Justice"
            </p>
            <p className="mt-4 text-sm leading-relaxed text-footer-foreground/80">
              Vast Media TV News is a socially committed media organization that works as 
              a bridge between citizens and administration. We are dedicated to bringing 
              truth to light and fighting for the rights of the common people.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-footer-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-footer-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>[Your Address Here]</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-foreground/80">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>[Your Phone Number]</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-foreground/80">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>[Your Email Address]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-footer-foreground/10 pt-6 text-center text-sm text-footer-foreground/60">
          <p>
            © {new Date().getFullYear()} Vast Media TV News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
