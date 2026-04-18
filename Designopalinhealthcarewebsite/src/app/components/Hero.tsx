import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#eef6f8] to-[#f6f9fb] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2aa99b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#07306d]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-2 bg-[#2aa99b]/10 text-[#2aa99b] rounded-full text-sm font-medium"
          >
            Trusted Healthcare Partner
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#07306d] mb-6 leading-tight">
            Your Health,
            <br />
            Our Priority
          </h1>

          <p className="text-lg text-[#07306d]/70 mb-8 leading-relaxed max-w-lg">
            Experience compassionate, comprehensive healthcare with Opalin. We combine advanced medical technology with personalized care to ensure your wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2aa99b] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#238a7e] transition-all shadow-lg shadow-[#2aa99b]/20"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#07306d] text-[#07306d] px-8 py-4 rounded-lg font-semibold hover:bg-[#07306d] hover:text-white transition-all"
              >
                Learn More
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-[#07306d]">15+</div>
              <div className="text-sm text-[#07306d]/60 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#07306d]">50K+</div>
              <div className="text-sm text-[#07306d]/60 mt-1">Patients Treated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#07306d]">98%</div>
              <div className="text-sm text-[#07306d]/60 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576669801945-7a346954da5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwZG9jdG9yJTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzYwMjA4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Doctor consulting with patient"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07306d]/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
