import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/t0emrgbk_brand_logo-B0Fv9ze4.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Employee Portal", href: "#employee-portal" },
  { label: "Book Demo", href: "#demo" },
];

export default function Navigation({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
            data-testid="nav-logo"
          >
            <img
              src={LOGO_URL}
              alt="atmytyp"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-full px-5 py-2.5 font-medium transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              data-testid="nav-login-btn"
              className="text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-full px-6 font-medium"
              onClick={() => window.open('https://www.atmytip.biz', '_blank')}
            >
              Login
            </Button>
            <Button
              onClick={() => scrollToSection("#demo")}
              data-testid="nav-demo-btn"
              className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25 rounded-full px-6 font-semibold transition-all duration-300"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-white border-t border-slate-100 shadow-lg animate-fade-in-up"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="block w-full text-left text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg px-4 py-3 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Button
                variant="outline"
                data-testid="mobile-login-btn"
                className="w-full justify-center rounded-full border-slate-200"
                onClick={() => window.open('https://www.atmytip.biz', '_blank')}
              >
                Login
              </Button>
              <Button
                onClick={() => scrollToSection("#demo")}
                data-testid="mobile-demo-btn"
                className="w-full justify-center bg-orange-500 text-white hover:bg-orange-600 rounded-full font-semibold"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
