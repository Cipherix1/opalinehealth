import { motion } from "motion/react";
import { Link } from "react-router";
import { Hero } from "../components/Hero";
import { ServiceHours } from "../components/ServiceHours";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { DollarSign, Users, Headphones, FileCheck, TrendingUp, Award, Target, UserCheck } from "lucide-react";

const mainServices = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management (RCM)",
    description: "Our Revenue Cycle Management (RCM) services provide end-to-end support to ensure the financial health of your practice. We handle everything from patient billing and claims submission to coding, payment posting, and denial resolution. By improving the efficiency of each step in the revenue cycle, we ensure faster, more accurate reimbursements and reduced administrative costs. Our team is committed to compliance, leveraging the latest technology and industry expertise to streamline your RCM process and enhance profitability.",
    image: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmV2ZW51ZSUyMGN5Y2xlJTIwbWFuYWdlbWVudCUyMGhlYWx0aGNhcmUlMjBvZmZpY2V8ZW58MXx8fHwxNzc2MDI5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Headphones,
    title: "VA Services",
    description: "We offer expert Virtual Assistant services in medical billing and Revenue Cycle Management (RCM), streamlining claims processing, insurance verification, payment posting, denial management, and patient billing. Our team is skilled in coding (ICD-10, CPT, HCPCS), AR follow-up, and financial reporting, ensuring compliance and improving cash flow. With proficiency in industry-leading EHR and billing software, we deliver tailored, scalable solutions to meet the unique needs of healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwaGVhbHRoY2FyZSUyMG1lZGljYWwlMjBiaWxsaW5nfGVufDF8fHx8MTc3NjAyOTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: UserCheck,
    title: "Providers Enrollment",
    description: "We provide seamless provider enrollment services, ensuring that healthcare professionals are efficiently enrolled with insurance companies and government payers. Our team handles the entire enrollment process, from gathering necessary documentation to submitting applications and ensuring timely approvals. We also assist with revalidation and updates to maintain active participation in insurance networks, helping providers avoid delays and maximize reimbursement. With a focus on accuracy and compliance, we simplify provider enrollment to support smooth and efficient operations for healthcare practices.",
    image: "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwcHJvdmlkZXIlMjBlbnJvbGxtZW50JTIwaGVhbHRoY2FyZSUyMGNyZWRlbnRpYWxpbmd8ZW58MXx8fHwxNzc2MDI5NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const kpiItems = [
  { icon: Users, title: "Customer Satisfaction" },
  { icon: Award, title: "Product/Service Quality" },
  { icon: TrendingUp, title: "Operational Efficiency" },
  { icon: DollarSign, title: "Growth & Revenue" },
  { icon: Target, title: "Innovation & Improvement" },
  { icon: UserCheck, title: "Employee Performance & Engagement" },
  { icon: FileCheck, title: "Market Reach & Impact" }
];

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Secondary Hero - Maximize Reimbursement */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#07306d] to-[#0a4080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Maximize Reimbursement, Minimize Denials
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Discover the unparalleled luxury and advanced medical services designed for discerning executive clients.
            </p>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
              >
                Discover More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section - 3 Cards */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#07306d] font-bold">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-[#07306d]/60 max-w-3xl mx-auto">
              Comprehensive healthcare revenue cycle management solutions designed to optimize your practice's financial performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-[#e5edf2] hover:border-[#2aa99b]/30 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07306d]/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#2aa99b]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#2aa99b]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#07306d] mb-4">{service.title}</h3>
                  <p className="text-[#07306d]/70 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Performance Indicators Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07306d] mb-8">
              Our Key Performance Indicators
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiItems.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-[#e5edf2] hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <kpi.icon className="w-6 h-6 text-[#2aa99b]" />
                </div>
                <p className="text-[#07306d] font-medium">{kpi.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <ServiceHours />

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 bg-[#07306d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Ready to optimize your healthcare practice's revenue cycle? Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
                >
                  Contact Us
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
