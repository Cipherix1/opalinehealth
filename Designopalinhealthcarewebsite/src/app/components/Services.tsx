import { motion } from "motion/react";
import { Link } from "react-router";
import { Stethoscope, Heart, Activity, Users, Clock, Shield, ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive preventive care and routine checkups for the whole family."
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced cardiac care and heart health monitoring services."
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description: "State-of-the-art diagnostic imaging and laboratory services."
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Dedicated care for patients of all ages, from infants to seniors."
  },
  {
    icon: Clock,
    title: "Urgent Care",
    description: "Quick, quality care for non-emergency medical situations."
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive health screenings and wellness programs."
  }
];

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#07306d] mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-[#07306d]/60 max-w-2xl mx-auto mb-6">
            From routine checkups to specialized treatments, we offer a full spectrum of medical services.
          </p>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[#2aa99b] font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl border border-[#e5edf2] hover:border-[#2aa99b]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#2aa99b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2aa99b] transition-colors">
                <service.icon className="w-7 h-7 text-[#2aa99b] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#07306d] mb-3">
                {service.title}
              </h3>
              <p className="text-[#07306d]/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
