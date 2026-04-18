import { useState } from "react";
import { Link } from "react-router";
import logo from "../../imports/logo-1.png";
import { HIPAAModal } from "./HIPAAModal";

export function Footer() {
  const [isHIPAAOpen, setIsHIPAAOpen] = useState(false);

  return (
    <>
      <HIPAAModal isOpen={isHIPAAOpen} onClose={() => setIsHIPAAOpen(false)} />

      <footer className="py-12 bg-white border-t border-gray-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Opaline Healthcare" className="h-14 sm:h-16 w-auto" />
              </div>
              <p className="text-sm text-[#07306d]/60">
                Providing exceptional healthcare revenue cycle management services with compliance, precision, and expertise.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#07306d] mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Home</Link></li>
                <li><Link to="/about" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">About Us</Link></li>
                <li><Link to="/services" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Services</Link></li>
                <li><Link to="/team" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Our Team</Link></li>
                <li><Link to="/contact" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#07306d] mb-4">Legal & Policies</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors">Terms & Conditions</Link></li>
                <li>
                  <a
                    href="mailto:privacy@opalinhealthcare.com"
                    className="inline-block py-1 text-[#07306d]/60 hover:text-[#2aa99b] transition-colors"
                  >
                    Privacy Officer
                  </a>
                </li>

                {/* HIPAA Compliant Badge — clickable */}
                <li>
                  <button
                    onClick={() => setIsHIPAAOpen(true)}
                    className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-[#2aa99b]/10 hover:bg-[#2aa99b]/20 border border-[#2aa99b]/30 hover:border-[#2aa99b]/60 rounded-lg transition-all group cursor-pointer"
                    title="Click to view HIPAA Compliance Certificate"
                  >
                    <svg className="w-5 h-5 text-[#2aa99b] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#2aa99b]">HIPAA Compliant</span>
                    <svg className="w-3.5 h-3.5 text-[#2aa99b]/60 group-hover:text-[#2aa99b] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#07306d] mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-[#07306d]/60">
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+1 717 592-9852</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span className="break-all">info@opalinhealthcare.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>123 Medical Center Drive, Suite 100</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <img src={logo} alt="Opaline Healthcare" className="h-10 w-auto" />
                <p className="text-sm text-[#07306d]/60 text-center sm:text-left">© 2026 Opaline Healthcare System. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#07306d]/60">
                <Link to="/privacy" className="hover:text-[#2aa99b] transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-[#2aa99b] transition-colors">Terms & Conditions</Link>
                <span>•</span>
                <span>Protected by copyright law</span>
                <span>•</span>
                <span>Trademark ™</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}