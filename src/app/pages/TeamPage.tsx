import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import abdullahImage from "../../imports/202D916B-C4C6-4E14-8AAB-D4E92994C70B.JPEG";
import aneesaImage from "../../imports/6447995B-BBDC-470A-81AB-42B3AED2D2F7-2.PNG";
import asaadImage from "../../imports/a0025414-ace1-4f2b-a5f0-6404735b96cc-2.jpg";

const teamMembers = [
  {
    name: "Aneesa Noor",
    role: "President",
    specialty: "Healthcare Leadership",
    image: aneesaImage,
    bio: "Leading Opaline Healthcare System with vision and strategic direction, ensuring excellence in medical billing and revenue cycle management services.",
    email: "aneesa.noor@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Abdullah Ghumman",
    role: "Chief Executive Officer (CEO)/Founder",
    specialty: "Healthcare Management",
    image: abdullahImage,
    bio: "As CEO of Opaline Healthcare System, I lead our RCM strategy, focusing on accuracy, compliance, and driving consistent revenue growth for our healthcare partners.",
    email: "abdullah.ghumman@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Asaad Gul",
    role: "Managing Director",
    specialty: "Healthcare Operations",
    image: asaadImage,
    bio: "Directing healthcare operations and strategic initiatives to enhance service delivery, operational excellence, and organizational growth across Opaline Healthcare System.",
    email: "asaad.gul@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Alam Shahzad",
    role: "Chief Operating Officer (COO)",
    specialty: "Operations Management",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-10.46.32-PM-edited.jpeg",
    bio: "Leading operational strategies to drive efficiency in revenue cycle management, improving financial performance, reducing claim delays, and supporting sustainable practice growth.",
    email: "alam.shahzad@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Hamdan Ahmed",
    role: "IT Manager",
    specialty: "Healthcare IT Solutions",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-7.45.53-PM.jpeg",
    bio: "Integrating advanced IT solutions to ensure seamless billing operations, providing reliable support, and optimizing the client experience for smooth, timely revenue cycle management.",
    email: "hamdan.ahmed@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Syed Rashid",
    role: "Healthcare IT Support Specialist",
    specialty: "Medical Billing Systems",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-6.33.13-PM-682x1024.jpeg",
    bio: "Delivering consistent IT support to maintain accurate medical billing systems, ensuring reliable coding, efficient claims processing, and timely reimbursements.",
    email: "syed.rashid@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Awais Ahmad",
    role: "Operational Manager",
    specialty: "Revenue Cycle Management",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-4.32.01-PM.jpeg",
    bio: "Overseeing the daily operations of the revenue cycle management process, ensuring smooth claim submission, optimizing cash flow, and reducing delays for maximum efficiency.",
    email: "awais.ahmad@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Usman Sheikh",
    role: "Network Specialist",
    specialty: "Network Infrastructure",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-16-at-2.24.20-PM-edited-1.jpeg",
    bio: "Designing and managing secure, high-performance networks that enable seamless claim processing and efficient billing operations across the practice.",
    email: "usman.sheikh@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Rabia Ahmad",
    role: "Consultant",
    specialty: "RCM Strategy",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/7-scaled.jpg",
    bio: "Providing expert analysis and tailored strategies to optimize revenue cycle processes, reduce inefficiencies, and ensure accurate, timely reimbursements.",
    email: "rabia.ahmad@opalinhealthcare.com",
    linkedin: "#"
  },
  {
    name: "Rubab Kanwal",
    role: "Compliance Officer/HR",
    specialty: "Healthcare Compliance",
    image: "https://crescentahealthcare.com/wp-content/uploads/2026/01/8-scaled.jpg",
    bio: "Ensuring adherence to industry regulations and safeguarding the practice from billing risks, while maintaining a transparent, compliant environment for both staff and patients.",
    email: "rubab.kanwal@opalinhealthcare.com",
    linkedin: "#"
  }
];

export function TeamPage() {
  return (
    <div className="min-h-screen pt-32 sm:pt-36">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#eef6f8] to-[#f6f9fb] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#07306d] mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl text-[#07306d]/70 leading-relaxed">
              Dedicated professionals empowering Opaline Healthcare System to drive excellence in medical billing and revenue cycle management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-[#e5edf2] overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`relative overflow-hidden aspect-[4/5] ${(index === 0 || index === 2) ? 'bg-gradient-to-br from-[#eef6f8] to-[#d0e8f0]' : ''}`}>
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07306d]/60 to-transparent flex items-end p-6">
                      <div className="flex gap-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#2aa99b] transition-colors group/icon"
                        >
                          <Mail className="w-5 h-5 text-[#07306d] group-hover/icon:text-white" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#2aa99b] transition-colors group/icon"
                        >
                          <Linkedin className="w-5 h-5 text-[#07306d] group-hover/icon:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#07306d] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#2aa99b] font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#07306d]/60 mb-4">
                      {member.specialty}
                    </p>
                    <p className="text-sm text-[#07306d]/70 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#07306d] to-[#0a4080] rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              We're always looking for talented healthcare professionals who share our commitment to excellence and compassionate care.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2aa99b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#238a7e] transition-colors shadow-lg"
              >
                View Career Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}