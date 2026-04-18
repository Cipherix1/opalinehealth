import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-[#07306d]/70 leading-relaxed">
              We're here to answer your questions and help you schedule an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#07306d] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#07306d] mb-1">Phone</h3>
                    <a href="tel:+17175929852" className="text-[#07306d]/70 hover:text-[#2aa99b]">
                      +1 717 592-9852
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#07306d] mb-1">Email</h3>
                    <a href="mailto:info@opalinhealthcare.com" className="text-[#07306d]/70 hover:text-[#2aa99b]">
                      info@opalinhealthcare.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#07306d] mb-1">Address</h3>
                    <p className="text-[#07306d]/70">
                      123 Medical Center Drive<br />
                      Suite 100<br />
                      Healthcare City, HC 12345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#07306d] mb-1">Hours</h3>
                    <p className="text-[#07306d]/70">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#07306d] mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#07306d] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#07306d] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#07306d] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#07306d] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all"
                    placeholder="+1 717 592-9852"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#07306d] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#07306d] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#e5edf2] focus:border-[#2aa99b] focus:ring-2 focus:ring-[#2aa99b]/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#2aa99b] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#238a7e] transition-all shadow-lg shadow-[#2aa99b]/20"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-[#e5edf2] flex items-center justify-center"
          >
            <div className="text-center text-[#07306d]/40">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p>Map integration placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
