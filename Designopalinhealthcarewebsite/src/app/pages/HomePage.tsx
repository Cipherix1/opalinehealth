import { motion } from "motion/react";
import { Link } from "react-router";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#07306d] to-[#0a4080]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Healthcare Journey?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Book your first consultation today and experience the Opalin difference in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
                >
                  Schedule Your Appointment
                </motion.button>
              </Link>
              <Link to="/team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white/30"
                >
                  Meet Our Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
