import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/t0emrgbk_brand_logo-B0Fv9ze4.svg";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Employee Portal", href: "#employee-portal" },
    { label: "Integrations", href: "#" },
    { label: "Updates", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#demo" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      data-testid="footer"
      className="bg-slate-900 text-slate-300 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Logo & Description */}
          <div className="col-span-2">
            <img
              src={LOGO_URL}
              alt="atmytyp"
              className="h-8 w-auto mb-4 brightness-0 invert"
              data-testid="footer-logo"
            />
            <p className="text-slate-400 mb-6 max-w-xs">
              The all-in-one ERP solution for modern businesses. Manage your
              entire organization from one powerful platform.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@atmytyp.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} atmytyp. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                data-testid={`footer-social-${social.label.toLowerCase()}`}
                className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
