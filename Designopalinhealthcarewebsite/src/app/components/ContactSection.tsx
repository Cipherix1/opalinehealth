import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useInView } from "./hooks/useInView";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 717 592-9852",
    link: "tel:+17175929852"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@opalinhealthcare.com",
    link: "mailto:info@opalinhealthcare.com"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "123 Medical Center Drive, Suite 100",
    link: "#"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM",
    link: "#"
  }
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#07306d] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#07306d]/60 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to schedule an appointment or learn more about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-[#e5edf2] hover:border-[#2aa99b]/30 hover:shadow-lg transition-all text-center"
            >
              <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2aa99b] transition-colors">
                <info.icon className="w-6 h-6 text-[#2aa99b] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#07306d] mb-2">{info.title}</h3>
              <p className="text-sm text-[#07306d]/60">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-br from-[#07306d] to-[#0a4080] rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Healthcare Journey?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book your first consultation today and experience the Opalin difference in healthcare.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
          >
            Schedule Your Appointment
          </motion.button>
        </motion.div>

        <footer className="mt-20 pt-12 border-t border-[#e5edf2] text-center">
          <p className="text-[#07306d]/60">
            © 2026 Opalin Healthcare System. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
