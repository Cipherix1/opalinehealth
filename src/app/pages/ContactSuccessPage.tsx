import { motion } from "motion/react";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ContactSuccessPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-36 bg-gradient-to-br from-[#eef6f8] to-white">
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl shadow-[#07306d]/5 border border-[#e5edf2] p-8 sm:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#2aa99b]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#2aa99b]" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#07306d] mb-4">
              Message sent successfully
            </h1>

            <p className="text-lg text-[#07306d]/70 leading-relaxed mb-8">
              Thank you for reaching out. We received your message and will get back to you as soon as possible.
            </p>

            <div className="bg-[#eef6f8] rounded-2xl p-5 mb-8 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2aa99b] mt-0.5 flex-shrink-0" />
                <p className="text-[#07306d]/75">
                  If you need immediate help, you can also email us directly at{" "}
                  <a href="mailto:opalinehealth@gmail.com" className="text-[#2aa99b] font-semibold hover:underline">
                    opalinehealth@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2aa99b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-all shadow-lg shadow-[#2aa99b]/20"
              >
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-[#07306d]/15 text-[#07306d] hover:bg-[#07306d]/5 transition-all"
              >
                Send another message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
