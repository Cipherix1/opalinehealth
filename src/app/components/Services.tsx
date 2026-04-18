import { motion } from "motion/react";
import { Link } from "react-router";
import { Stethoscope, Heart, Activity, Users, Clock, Shield } from "lucide-react";

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
    description: "Personalized care for patients of all ages, from infants to seniors."
  },
  {
    icon: Clock,
    title: "Urgent Care",
    description: "Quick, quality care for non-life-threatening medical situations."
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive health screenings and wellness programs."
  }
];

export function Services() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#07306d] font-bold">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-[#07306d]/60 max-w-3xl mx-auto mb-6">
            From routine checkups to specialized treatments, we offer a full spectrum of medical services.
          </p>
          <Link to="/services" className="text-[#2aa99b] font-medium hover:underline inline-flex items-center gap-2">
            View All Services →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#2aa99b]/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#2aa99b]/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#2aa99b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#07306d] mb-3">{service.title}</h3>
              <p className="text-[#07306d]/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
