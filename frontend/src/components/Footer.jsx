import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/t0emrgbk_brand_logo-B0Fv9ze4.svg";

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
  { icon: Facebook, href: "#", label: "Facebook", active: false, color: "bg-blue-600 hover:bg-blue-700" },
  { icon: Twitter, href: "#", label: "Twitter", active: false, color: "bg-black hover:bg-gray-800" },
  { icon: Linkedin, href: "#", label: "LinkedIn", active: false, color: "bg-blue-700 hover:bg-blue-800" },
  { icon: Instagram, href: "#", label: "Instagram", active: false, color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500" },
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
              alt="atmytip"
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
                <span>sales@atmytip.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+919960005859" className="hover:text-orange-500 transition-colors">+919960005859</a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/919960005859" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">+919960005859</a>
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
            © {new Date().getFullYear()} atmytip. All rights reserved.
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
