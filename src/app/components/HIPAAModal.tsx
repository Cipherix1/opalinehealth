import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, CheckCircle, Shield } from "lucide-react";
import logo from "../../imports/logo-1.png";

interface HIPAAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HIPAAModal({ isOpen, onClose }: HIPAAModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleDownload = () => {
    // Create a printable version of the certificate
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>HIPAA Compliance Certificate - Opaline Healthcare System</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Georgia', serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 40px; }
            .cert { max-width: 860px; width: 100%; border: 12px double #07306d; padding: 60px; text-align: center; position: relative; background: #fff; }
            .cert::before { content: ''; position: absolute; inset: 8px; border: 2px solid #2aa99b; pointer-events: none; }
            .badge { width: 90px; height: 90px; background: linear-gradient(135deg, #07306d, #2aa99b); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
            .badge svg { width: 44px; height: 44px; fill: none; stroke: white; stroke-width: 2; }
            h1 { color: #07306d; font-size: 42px; margin-bottom: 8px; letter-spacing: 2px; }
            .sub { color: #2aa99b; font-size: 16px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 40px; }
            .divider { width: 120px; height: 3px; background: linear-gradient(to right, #07306d, #2aa99b); margin: 0 auto 30px; }
            p { color: #555; font-size: 16px; margin-bottom: 12px; line-height: 1.7; }
            .company { color: #07306d; font-size: 26px; font-weight: bold; margin: 24px 0; }
            .compliance-list { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin: 30px 0; }
            .compliance-item { background: #f0f9f8; border: 1px solid #2aa99b; padding: 10px 20px; border-radius: 8px; color: #07306d; font-size: 14px; }
            .cert-number { color: #999; font-size: 12px; margin-top: 30px; letter-spacing: 1px; }
            .signatures { display: flex; justify-content: space-around; margin-top: 50px; padding-top: 30px; border-top: 1px solid #ddd; }
            .sig { text-align: center; }
            .sig-line { width: 160px; height: 1px; background: #07306d; margin: 0 auto 8px; }
            .sig-name { color: #07306d; font-size: 14px; font-weight: bold; }
            .sig-title { color: #999; font-size: 12px; }
            .year { color: #07306d; font-size: 18px; margin: 20px 0; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <div class="cert">
            <div class="badge">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <p class="sub">Certificate of Compliance</p>
            <h1>HIPAA COMPLIANT</h1>
            <div class="divider"></div>
            <p>This certifies that</p>
            <p class="company">Opaline Healthcare System</p>
            <p>has implemented and maintains comprehensive safeguards in full compliance with the</p>
            <p><strong>Health Insurance Portability and Accountability Act of 1996 (HIPAA)</strong></p>
            <p>and the <strong>Health Information Technology for Economic and Clinical Health (HITECH) Act</strong></p>
            <div class="compliance-list">
              <div class="compliance-item">Privacy Rule Compliant</div>
              <div class="compliance-item">Security Rule Compliant</div>
              <div class="compliance-item">Breach Notification Ready</div>
              <div class="compliance-item">BAA Enabled</div>
            </div>
            <p>Our organization has completed HIPAA training, implemented required administrative, physical, and technical safeguards, and established policies and procedures to protect the privacy and security of Protected Health Information (PHI).</p>
            <p class="year">Year of Compliance: 2024–2026</p>
            <div class="signatures">
              <div class="sig">
                <div class="sig-line"></div>
                <p class="sig-name">Aneesa Noor</p>
                <p class="sig-title">President, Opaline Healthcare System</p>
              </div>
              <div class="sig">
                <div class="sig-line"></div>
                <p class="sig-name">HIPAA Privacy Officer</p>
                <p class="sig-title">Compliance & Privacy Division</p>
              </div>
            </div>
            <p class="cert-number">Certificate No: OHS-HIPAA-2024-0001 | Issued: January 1, 2024 | Valid Through: December 31, 2026</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const complianceItems = [
    { label: "Privacy Rule", description: "Full compliance with HIPAA Privacy Rule requirements for PHI protection" },
    { label: "Security Rule", description: "Administrative, physical & technical safeguards for electronic PHI" },
    { label: "Breach Notification", description: "Documented breach notification policies and response procedures" },
    { label: "Business Associate", description: "BAA agreements executed with all covered entity clients" },
    { label: "Staff Training", description: "Regular HIPAA training and awareness programs for all staff" },
    { label: "Risk Assessments", description: "Ongoing security risk assessments and vulnerability management" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Certificate Header */}
              <div className="relative bg-gradient-to-br from-[#07306d] via-[#0a4080] to-[#07306d] rounded-t-3xl px-8 py-10 text-center overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2aa99b]/10 rounded-full -translate-x-12 translate-y-12" />

                {/* Shield Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-gradient-to-br from-[#2aa99b] to-[#1d8a7c] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2aa99b]/40"
                >
                  <Shield className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <p className="text-[#2aa99b] text-xs tracking-[0.3em] uppercase font-semibold mb-1">Certificate of Compliance</p>
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mb-1">HIPAA COMPLIANT</h2>
                  <p className="text-white/60 text-sm">Health Insurance Portability and Accountability Act</p>
                </motion.div>
              </div>

              {/* Certificate Body */}
              <div className="px-6 sm:px-10 py-8">
                {/* Double border certificate frame */}
                <div className="border-2 border-[#07306d]/20 rounded-2xl p-6 mb-6 relative">
                  <div className="absolute inset-1.5 border border-[#2aa99b]/20 rounded-xl pointer-events-none" />

                  <div className="text-center mb-6">
                    <p className="text-[#07306d]/60 text-sm mb-2">This certifies that</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <img src={logo} alt="Opaline Healthcare" className="h-12 w-auto" />
                    </div>
                    <h3 className="text-[#07306d] text-xl font-bold">Opaline Healthcare System</h3>
                    <p className="text-[#07306d]/60 text-sm mt-1">Medical Billing & Revenue Cycle Management</p>
                  </div>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#07306d] to-[#2aa99b] mx-auto mb-6" />

                  <p className="text-[#07306d]/70 text-sm text-center leading-relaxed mb-6">
                    has implemented and maintains comprehensive safeguards in full compliance with the
                    <strong className="text-[#07306d]"> Health Insurance Portability and Accountability Act of 1996 (HIPAA)</strong> and the
                    <strong className="text-[#07306d]"> Health Information Technology for Economic and Clinical Health (HITECH) Act</strong>.
                  </p>

                  {/* Compliance Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                    {complianceItems.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.07 }}
                        className="bg-[#f0f9f8] border border-[#2aa99b]/30 rounded-xl p-3 text-center"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2aa99b] mx-auto mb-1" />
                        <p className="text-[#07306d] text-xs font-semibold">{item.label}</p>
                        <p className="text-[#07306d]/50 text-[10px] mt-0.5 leading-tight">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Certificate Details */}
                  <div className="bg-[#f6f9fb] rounded-xl p-4 text-center space-y-1">
                    <p className="text-[#07306d]/50 text-xs">Compliance Period</p>
                    <p className="text-[#07306d] text-sm font-semibold">January 1, 2024 – December 31, 2026</p>
                    <div className="pt-2 mt-2 border-t border-[#e5edf2]">
                      <p className="text-[#07306d]/40 text-[11px]">Certificate No: OHS-HIPAA-2024-0001</p>
                    </div>
                  </div>
                </div>

                {/* Signature Row */}
                <div className="flex items-center justify-around mb-6 px-4">
                  <div className="text-center">
                    <div className="w-28 h-px bg-[#07306d]/30 mx-auto mb-2" />
                    <p className="text-[#07306d] text-xs font-semibold">Aneesa Noor</p>
                    <p className="text-[#07306d]/50 text-[11px]">President</p>
                  </div>
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div className="text-center">
                    <div className="w-28 h-px bg-[#07306d]/30 mx-auto mb-2" />
                    <p className="text-[#07306d] text-xs font-semibold">Privacy Officer</p>
                    <p className="text-[#07306d]/50 text-[11px]">Compliance Division</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#07306d] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#0a4080] transition-colors shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download / Print Certificate
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 sm:flex-none sm:px-8 py-3.5 rounded-xl border-2 border-[#07306d]/20 text-[#07306d] font-semibold hover:bg-[#f6f9fb] transition-colors cursor-pointer"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
