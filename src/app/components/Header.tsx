import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../imports/logo-1.png";

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[9997] bg-white/95 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 h-28 sm:h-32 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <img src={logo} alt="Opaline Healthcare" className="h-24 sm:h-28 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-[#2aa99b] font-medium"
                    : "text-[#07306d]/60 hover:text-[#07306d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-[#2aa99b] text-white rounded-lg hover:bg-[#238a7e] transition-all hover:shadow-lg">
                Book Appointment
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#07306d] hover:text-[#2aa99b] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-28 sm:top-32 right-0 bottom-0 w-full sm:w-80 bg-white z-[9996] shadow-2xl md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`py-3 px-4 rounded-lg transition-colors text-lg ${
                    location.pathname === link.path
                      ? "bg-[#2aa99b]/10 text-[#2aa99b] font-medium"
                      : "text-[#07306d]/70 hover:bg-[#07306d]/5 hover:text-[#07306d]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={closeMobileMenu} className="pt-4">
                <button className="w-full px-6 py-3 bg-[#2aa99b] text-white rounded-lg hover:bg-[#238a7e] transition-all shadow-lg font-medium">
                  Book Appointment
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
