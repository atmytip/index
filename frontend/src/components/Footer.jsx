import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/t0emrgbk_brand_logo-B0Fv9ze4.svg";

const footerLinks = {
  product: [
    { label: "Features", href: "#features", active: true },
    { label: "Pricing", href: "#pricing", active: true },
    { label: "Employee Portal", href: "#employee-portal", active: true },
  ],
  company: [
    { label: "About Us", href: "#", active: false },
    { label: "Careers", href: "#", active: false },
    { label: "Contact", href: "#demo", active: true },
  ],
  resources: [
    { label: "Help Center", href: "#", active: false },
  ],
  legal: [
    { label: "Privacy Policy", href: "#", active: false },
    { label: "Terms of Service", href: "#", active: false },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", active: false },
  { icon: Twitter, href: "#", label: "Twitter", active: false },
  { icon: Linkedin, href: "#", label: "LinkedIn", active: false },
  { icon: Instagram, href: "#", label: "Instagram", active: false },
];

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith("#") && href !== "#") {
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
                <span>+919960005859</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  {link.active ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-600 text-sm cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )}
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
                  {link.active ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-600 text-sm cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )}
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
                  {link.active ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-600 text-sm cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )}
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
                  {link.active ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <span
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-600 text-sm cursor-not-allowed"
                    >
                      {link.label}
                    </span>
                  )}
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
              social.active ? (
                <a
                  key={social.label}
                  href={social.href}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ) : (
                <span
                  key={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center cursor-not-allowed"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-600" />
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
