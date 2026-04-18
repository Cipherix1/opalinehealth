import { motion } from "motion/react";
import { Link } from "react-router";
import logo from "../../imports/logo.png";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5edf2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Opalin Healthcare System" className="h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#07306d] font-medium hover:text-[#2aa99b] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#07306d] font-medium hover:text-[#2aa99b] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-[#07306d] font-medium hover:text-[#2aa99b] transition-colors">
            Services
          </Link>
          <Link to="/team" className="text-[#07306d] font-medium hover:text-[#2aa99b] transition-colors">
            Team
          </Link>
          <Link to="/contact" className="text-[#07306d] font-medium hover:text-[#2aa99b] transition-colors">
            Contact
          </Link>
        </nav>

        <button className="bg-[#2aa99b] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#238a7e] transition-colors">
          Book Appointment
        </button>
      </div>
    </motion.header>
  );
}
