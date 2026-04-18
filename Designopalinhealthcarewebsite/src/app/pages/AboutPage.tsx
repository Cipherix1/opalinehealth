import { motion } from "motion/react";
import { Award, Target, Heart, Users2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We prioritize patient wellbeing with empathy and understanding in every interaction."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of medical care and professional service."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Leveraging cutting-edge technology and modern medical practices."
  },
  {
    icon: Users2,
    title: "Collaboration",
    description: "Working together with patients and families to achieve optimal health outcomes."
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eef6f8] to-[#f6f9fb] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#07306d] mb-6">
              About Opalin Healthcare
            </h1>
            <p className="text-xl text-[#07306d]/70 leading-relaxed">
              Dedicated to providing exceptional healthcare services with compassion, expertise, and innovation since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMG1vZGVybiUyMGhvc3BpdGFsfGVufDF8fHx8MTc3NjAyMDgxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern healthcare facility"
                  className="w-full h-[500px] object-cover"
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
                <h2 className="text-3xl font-bold text-[#07306d] mb-4">Our Mission</h2>
                <p className="text-lg text-[#07306d]/70 leading-relaxed">
                  To deliver comprehensive, patient-centered healthcare that improves lives and strengthens our community through accessible, high-quality medical services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#07306d] mb-4">Our Vision</h2>
                <p className="text-lg text-[#07306d]/70 leading-relaxed">
                  To be the leading healthcare provider recognized for clinical excellence, innovative care, and unwavering commitment to patient satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#07306d] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#07306d]/60 max-w-2xl mx-auto">
              The principles that guide everything we do at Opalin Healthcare System.
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
                className="text-center p-8 rounded-2xl bg-white border border-[#e5edf2] hover:shadow-lg transition-shadow"
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

      {/* Statistics */}
      <section className="py-20 bg-[#07306d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "50K+", label: "Patients Served" },
              { number: "200+", label: "Medical Professionals" },
              { number: "98%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#2aa99b] mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
