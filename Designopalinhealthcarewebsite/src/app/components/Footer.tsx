import { Link } from "react-router";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../imports/logo.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5edf2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Opalin Healthcare System" className="h-12 w-auto mb-4" />
            <p className="text-[#07306d]/60 mb-4">
              Providing exceptional healthcare services with compassion and expertise.
            </p>
            <div className="flex items-center gap-2 text-[#2aa99b]">
              <Heart className="w-5 h-5" fill="currentColor" />
              <span className="text-sm font-medium">Excellence in Care</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#07306d] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#07306d] mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-[#07306d]/60">Primary Care</li>
              <li className="text-[#07306d]/60">Cardiology</li>
              <li className="text-[#07306d]/60">Diagnostics</li>
              <li className="text-[#07306d]/60">Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#07306d] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#07306d]/60">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+1 717 592-9852</span>
              </li>
              <li className="flex items-start gap-2 text-[#07306d]/60">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@opalinhealthcare.com</span>
              </li>
              <li className="flex items-start gap-2 text-[#07306d]/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Medical Center Drive, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e5edf2] text-center text-[#07306d]/60">
          <p>© 2026 Opalin Healthcare System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
