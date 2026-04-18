import { motion } from "motion/react";
import {
  DollarSign,
  Building2,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Shield,
  TrendingUp,
  Scissors,
  FileText,
  Users,
  Briefcase,
  AlertCircle,
  ClipboardCheck,
  Wallet,
  FileCheck,
  FolderOpen,
  UserCheck,
  Hospital,
  BarChart3,
  Code
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "End-to-end revenue cycle solutions designed to optimize cash flow, reduce denials, and improve financial performance."
  },
  {
    icon: Building2,
    title: "Hospital Billing Services",
    description: "Comprehensive hospital billing services that ensure accurate claims processing and timely reimbursement."
  },
  {
    icon: Stethoscope,
    title: "Physician Billing Services",
    description: "Specialized billing support tailored to physician practices to maximize collections and minimize administrative burden."
  },
  {
    icon: FlaskConical,
    title: "Laboratory Billing Services",
    description: "Accurate and compliant billing solutions for laboratories to streamline claims and improve revenue recovery."
  },
  {
    icon: ScanLine,
    title: "Imaging Center Billing",
    description: "Dedicated billing services for imaging centers, ensuring precise coding and faster reimbursement cycles."
  },
  {
    icon: Shield,
    title: "Coverage Discovery",
    description: "Advanced insurance coverage identification to reduce self-pay accounts and uncover additional reimbursement opportunities."
  },
  {
    icon: TrendingUp,
    title: "A/R Recovery Services",
    description: "Strategic accounts receivable recovery services focused on accelerating payments and reducing outstanding balances."
  },
  {
    icon: Scissors,
    title: "Ambulatory Surgery Billing",
    description: "Efficient billing solutions for ambulatory surgery centers that support compliance and consistent revenue flow."
  },
  {
    icon: FileText,
    title: "Medical Billing Services",
    description: "Complete medical billing services delivering accuracy, transparency, and optimized revenue outcomes."
  },
  {
    icon: UserCheck,
    title: "Medical Credentialing",
    description: "Streamlined provider credentialing services to ensure timely enrollment and uninterrupted reimbursement."
  },
  {
    icon: Users,
    title: "Staffing and Workforce Services",
    description: "Flexible healthcare staffing solutions designed to strengthen operations and support workforce efficiency."
  },
  {
    icon: Briefcase,
    title: "Medical Billing Consulting Services",
    description: "Expert consulting services to identify revenue gaps, improve processes, and enhance overall billing performance."
  },
  {
    icon: AlertCircle,
    title: "Denial Management Services",
    description: "Proactive denial management solutions to identify root causes, appeal claims efficiently, and prevent revenue loss."
  },
  {
    icon: ClipboardCheck,
    title: "Claims Follow-Up & A/R Follow-Up",
    description: "Consistent claims and accounts receivable follow-up to accelerate payments and reduce outstanding balances."
  },
  {
    icon: Wallet,
    title: "Payment Posting",
    description: "Accurate and timely payment posting services to maintain clean accounts and ensure precise financial reporting."
  },
  {
    icon: FileCheck,
    title: "Prior Authorization",
    description: "End-to-end prior authorization services that reduce delays, improve approval rates, and support compliant care delivery."
  },
  {
    icon: FolderOpen,
    title: "Referral Management",
    description: "Streamlined referral management solutions to ensure proper documentation, authorization, and continuity of patient care."
  },
  {
    icon: UserCheck,
    title: "Provider Enrollment (Credentialing)",
    description: "Efficient provider enrollment and credentialing services to secure timely payer approvals and uninterrupted reimbursements."
  },
  {
    icon: Hospital,
    title: "Hospitalist Billing Services",
    description: "Specialized hospitalist billing services designed to maximize reimbursement and ensure regulatory compliance."
  },
  {
    icon: BarChart3,
    title: "MIPS Registry Services",
    description: "Comprehensive MIPS registry services to support accurate reporting, quality performance tracking, and incentive optimization."
  },
  {
    icon: Code,
    title: "Medical Coding",
    description: "Certified medical coding services ensuring accurate code assignment, compliance, and optimized reimbursement."
  }
];

export function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-[#07306d]/70 leading-relaxed">
              Comprehensive healthcare revenue cycle management solutions designed to optimize your financial performance and streamline operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-2xl border border-[#e5edf2] hover:border-[#2aa99b]/30 hover:shadow-xl transition-all duration-300 bg-white"
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
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Book your free consultation today and discover how our expert services can transform your healthcare billing operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
