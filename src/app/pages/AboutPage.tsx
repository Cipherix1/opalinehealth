import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, Target, Heart, Users2, DollarSign, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedNumber } from "../components/AnimatedNumber";
import opalineImage from "../../imports/IMG_6836.JPG";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We prioritize client-centered care with empathy and understanding in every interaction."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of medical billing and professional service."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Handling the complexities of financial management with accuracy and expertise."
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description: "Clear, honest billing processes that build trust and ensure compliance."
  }
];

const stats = [
  { number: "$1000K+", label: "Revenue Optimized", icon: DollarSign },
  { number: "98%", label: "Client Satisfaction", icon: Users },
  { number: "25%", label: "Avg. Reimbursement Increase", icon: TrendingUp },
  { number: "50+", label: "Professional Certifications", icon: Award }
];

const achievements = [
  {
    title: "Maximizing Financial Efficiency",
    description: "Over $1 million in annual revenue optimized for healthcare providers through streamlined revenue cycle management, reduced billing errors, and accelerated claims processing."
  },
  {
    title: "Client-Centered Billing",
    description: "Over 98% client satisfaction rate across hundreds of client practices through transparent billing processes and efficient operations."
  },
  {
    title: "Certified Excellence",
    description: "50+ certifications in medical billing and coding, delivering an average 25% reimbursement increase for our clients with accurate, compliant claims."
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-36">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eef6f8] to-[#f6f9fb] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#07306d] mb-6">
              Where Expertise and Compassion Converge to Empower Healthcare Excellence
            </h1>
            <p className="text-lg sm:text-xl text-[#07306d]/70 leading-relaxed">
              Redefining the way healthcare providers manage their revenue cycles and medical billing since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <ImageWithFallback
                  src={opalineImage}
                  alt="Opaline Medical Billing"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#07306d] mb-4">Who We Are</h2>
                <p className="text-lg text-[#07306d]/70 leading-relaxed mb-4">
                  At <strong>Opaline Healthcare System</strong>, we are redefining the way healthcare providers manage their revenue cycles and medical billing. With decades of industry expertise, we specialize in delivering comprehensive, efficient, and cutting-edge Revenue Cycle Management (RCM) solutions.
                </p>
                <p className="text-lg text-[#07306d]/70 leading-relaxed">
                  We enable medical practices and healthcare providers to streamline operations, optimize reimbursements, and enhance patient satisfaction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#07306d] mb-4">Our Mission</h2>
                <p className="text-lg text-[#07306d]/70 leading-relaxed">
                  To empower healthcare providers with seamless, accurate, and compliant billing systems that maximize revenue and minimize administrative burdens, allowing providers to focus on what truly matters — providing exceptional care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07306d] mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-[#07306d]/70 leading-relaxed">
              Whether you are a solo practitioner or a large healthcare facility, Opaline Healthcare System brings you a tailored, data-driven approach designed to reduce claim denials, accelerate payment processing, and improve financial outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-[#e5edf2] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#07306d] mb-4">
                  {achievement.title}
                </h3>
                <p className="text-[#07306d]/70 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07306d] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#07306d]/60 max-w-2xl mx-auto">
              The principles that guide everything we do at Opaline Healthcare System.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#f6f9fb] to-white border border-[#e5edf2] hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#2aa99b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#2aa99b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#07306d] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#07306d]/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - Transforming Healthcare Operations */}
      <section className="py-12 sm:py-20 bg-[#07306d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Transforming Healthcare Operations with Precision and Expertise
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
              Our proven track record of success and commitment to excellence drives measurable results for healthcare providers nationwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-16 h-16 bg-[#2aa99b]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#2aa99b]" />
                </div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-[#2aa99b] mb-2"
                >
                  <AnimatedNumber value={stat.number} duration={2000} />
                </motion.div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07306d] mb-6">
              Join the Healthcare Providers Who Trust Opaline
            </h2>
            <p className="text-base sm:text-lg text-[#07306d]/70 mb-8 leading-relaxed">
              Our team of certified professionals, combined with the latest technology, works tirelessly to provide you with peace of mind and financial stability. Together, we can transform your financial operations and unlock the full potential of your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#2aa99b] text-white rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
                >
                  Book Free Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#07306d] rounded-lg border-2 border-[#07306d] font-semibold hover:bg-[#07306d] hover:text-white transition-all"
                >
                  Discover More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
