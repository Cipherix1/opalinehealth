import { motion } from "motion/react";
import { Link } from "react-router";
import { AnimatedNumber } from "./AnimatedNumber";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#2aa99b]/10 rounded-full">
              <span className="text-[#2aa99b] text-sm font-medium">Premium Executive Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#07306d] leading-tight font-bold">
              Elite Healthcare<br />Tailored for Executives
            </h1>

            <p className="text-base sm:text-lg text-[#07306d]/70 mb-10 leading-relaxed">
              Discover an unparalleled healthcare journey where sophistication meets advanced medical care, designed exclusively for discerning executive clients seeking premium wellness solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-start">
              <Link to="/services" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#2aa99b] text-white rounded-lg hover:bg-[#238a7e] transition-all shadow-lg font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  Discover More
                </motion.button>
              </Link>

              <Link to="/contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#07306d] rounded-lg border-2 border-[#07306d] hover:bg-[#07306d] hover:text-white transition-all font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#07306d] mb-1">
                  <AnimatedNumber value="15+" duration={1500} />
                </div>
                <div className="text-[#07306d]/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#07306d] mb-1">
                  <AnimatedNumber value="50K+" duration={2000} />
                </div>
                <div className="text-[#07306d]/60 text-sm">Claims Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#07306d] mb-1">
                  <AnimatedNumber value="98%" duration={1500} />
                </div>
                <div className="text-[#07306d]/60 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGRvY3RvciUyMHBhdGllbnQlMjBjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjAyNDAxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare professional consulting with patient"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
