import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Bell,
  RefreshCw,
  Mail,
  Database,
  Globe,
  Trash2,
  AlertCircle,
  Building2,
  ClipboardList,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    icon: Shield,
    title: "Introduction & Scope",
    content: [
      "Opaline Healthcare System ('Opaline,' 'we,' 'us,' or 'our') is a professional medical billing and revenue cycle management company. We are deeply committed to protecting the privacy, confidentiality, and security of all information entrusted to us — whether by our clients, their patients, or visitors to our website.",
      "This Privacy Policy describes how Opaline Healthcare System collects, uses, discloses, retains, and protects personal information and Protected Health Information (PHI) in connection with our website located at www.opalinhealthcare.com and the professional services we provide.",
      "This Policy applies to all individuals whose information we collect or process, including healthcare providers and practices who engage our services ('Clients'), individuals whose health information we process on behalf of our Clients ('Patients'), and visitors to our website.",
      "We operate as a Business Associate under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act. All PHI we access, process, or maintain is handled in strict accordance with these laws and our executed Business Associate Agreements (BAAs).",
      "By using our website or engaging our services, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, please discontinue use of our website and services immediately."
    ]
  },
  {
    id: "information-collected",
    icon: Eye,
    title: "Information We Collect",
    content: [
      "We collect several categories of information depending on how you interact with our website and services. We collect only the minimum information necessary to fulfill the purposes described in this Policy.",
      "**1. Personal Identification Information:** When you contact us, request a consultation, complete a web form, or subscribe to our communications, we collect information such as your name, email address, mailing address, telephone number, job title, and the name of your healthcare organization.",
      "**2. Business & Practice Information:** To provide our medical billing and RCM services, we collect and process information about your practice including practice name, National Provider Identifier (NPI) number, Tax Identification Number (TIN/EIN), medical specialty, payer contracts and credentialing records, Electronic Health Record (EHR) or Practice Management System (PMS) access credentials (provided securely), and fee schedules.",
      "**3. Protected Health Information (PHI):** As a HIPAA Business Associate, we receive and process PHI from covered entity clients solely for the purpose of performing billing, coding, claims submission, payment posting, denial management, and related revenue cycle functions. PHI may include patient names, dates of service, diagnoses, procedure codes, insurance information, and other data elements defined under 45 CFR § 160.103.",
      "**4. Technical & Device Information:** When you visit our website, we automatically collect certain technical data including your IP address, browser type and version, device type and operating system, referring and exit pages, pages viewed and time spent, and geographic location at the city/region level.",
      "**5. Usage & Behavioral Data:** We may collect information about how you navigate and interact with our website — including links clicked, search terms used, and features accessed — to improve the user experience.",
      "**6. Communication Records:** We retain records of communications between you and Opaline Healthcare System, including emails, support tickets, and consultation notes, to maintain service continuity and quality."
    ]
  },
  {
    id: "use-of-information",
    icon: FileText,
    title: "How We Use Your Information",
    content: [
      "Opaline Healthcare System uses information collected for specific, legitimate purposes. We do not use personal information or PHI for any purpose that is incompatible with the purposes described below.",
      "**Service Delivery:** To provide and manage medical billing, coding, claims management, denial management, accounts receivable follow-up, provider enrollment, and virtual assistant services on behalf of our clients.",
      "**Business Operations:** To process service agreements, issue invoices, respond to inquiries and support requests, manage client relationships, and communicate important service-related information.",
      "**HIPAA Compliance & Legal Obligations:** To comply with HIPAA, HITECH, and all applicable federal, state, and local laws and regulations, including responding to lawful government requests, subpoenas, and court orders.",
      "**Quality Assurance & Auditing:** To monitor and improve the quality and accuracy of our billing services, conduct internal audits, and identify opportunities to enhance revenue cycle performance for our clients.",
      "**Website Analytics & Improvement:** To understand how visitors use our website, diagnose technical issues, improve site functionality and content, and tailor the user experience.",
      "**Marketing Communications:** With your explicit consent or as permitted by applicable law, to send newsletters, service updates, industry insights, and information about our services. You may unsubscribe at any time.",
      "**Security & Fraud Prevention:** To monitor for unauthorized access, detect and prevent security incidents, protect against fraudulent activity, and ensure the integrity of systems that process PHI and personal data.",
      "**We do not sell, rent, lease, or trade your personal information or PHI to any third party for their own marketing or commercial purposes — ever.**"
    ]
  },
  {
    id: "hipaa-compliance",
    icon: Lock,
    title: "HIPAA Compliance & Protected Health Information",
    content: [
      "Protecting Protected Health Information (PHI) is at the core of everything we do at Opaline Healthcare System. As a HIPAA Business Associate, we maintain a comprehensive compliance program designed to meet or exceed the requirements of HIPAA's Privacy Rule (45 CFR Part 164, Subpart E), Security Rule (45 CFR Part 164, Subpart C), and Breach Notification Rule (45 CFR Part 164, Subpart D).",
      "**Business Associate Agreements (BAAs):** Prior to receiving, accessing, or processing any PHI, Opaline Healthcare System executes a written, HIPAA-compliant Business Associate Agreement with each covered entity client. These BAAs define permissible uses and disclosures of PHI, our obligations as a Business Associate, and the remedies available in the event of a breach.",
      "**Minimum Necessary Standard:** We strictly adhere to the HIPAA minimum necessary standard — accessing, using, and disclosing only the minimum amount of PHI necessary to accomplish each specific permitted purpose.",
      "**Designated Privacy Officer:** Opaline Healthcare System maintains a designated HIPAA Privacy Officer responsible for developing and implementing our privacy policies and procedures, conducting staff training, and receiving and investigating privacy complaints.",
      "**Administrative Safeguards:** We maintain formal, documented policies and procedures governing PHI access, use, and disclosure. All workforce members with access to PHI complete mandatory HIPAA training upon hire and annually thereafter. Access to PHI is limited to workforce members who require it to perform their job functions.",
      "**Physical Safeguards:** We implement physical security controls at all facilities where PHI is accessed or stored, including workstation use and security policies, device and media controls, and facility access management.",
      "**Technical Safeguards:** We use industry-standard technical controls to protect electronic PHI (ePHI), including AES-256 encryption for data at rest and in transit, role-based access controls, unique user identification, automatic log-off, audit logging and monitoring, and multi-factor authentication.",
      "**Breach Notification:** In the event of a breach of unsecured PHI, we will notify the affected covered entity client without unreasonable delay and within 60 days of discovery, as required by HIPAA. We will provide all information required by 45 CFR § 164.410, including the nature of the breach, the PHI involved, steps individuals should take, and our remediation measures.",
      "**Subcontractors:** We enter into BAAs with all subcontractors and agents who may access PHI on our behalf, ensuring the same level of privacy and security protection throughout our service delivery chain."
    ]
  },
  {
    id: "disclosure",
    icon: UserCheck,
    title: "Disclosure of Your Information",
    content: [
      "Opaline Healthcare System does not sell or disclose personal information or PHI except in the limited circumstances described below. All disclosures are made in compliance with applicable law and, where applicable, the terms of our Business Associate Agreements.",
      "**Service Providers & Subcontractors:** We may share information with carefully vetted third-party vendors who assist us in providing our services — such as cloud hosting providers, billing software platforms, and secure email services. These providers are contractually required to maintain the confidentiality and security of your information and are prohibited from using it for any other purpose.",
      "**Covered Entity Clients:** We return, report, and disclose PHI to covered entity clients as required to fulfill our service obligations and as permitted by our BAAs. We do not share one client's PHI with any other client.",
      "**Legal Requirements & Government Authorities:** We may disclose information when required by applicable law, including in response to a valid subpoena, court order, warrant, regulatory investigation, or other legal process. Where permitted, we will notify affected parties before complying with such requests.",
      "**Protection of Rights & Safety:** We may disclose information when necessary to prevent or investigate suspected fraud, enforce our Terms and Conditions, or protect the rights, property, or safety of Opaline Healthcare System, our clients, or the public.",
      "**Business Transfers:** In the event that Opaline Healthcare System is acquired by, merges with, or transfers substantially all of its assets to another entity, your information may be included as part of that transaction. We will ensure any successor entity provides equivalent privacy protections and is bound by the same BAAs.",
      "**With Your Explicit Consent:** We may share your information with third parties when you have provided clear, informed, and voluntary consent to do so."
    ]
  },
  {
    id: "data-security",
    icon: Database,
    title: "Data Security Measures",
    content: [
      "Opaline Healthcare System implements a multi-layered security program to protect personal information and PHI from unauthorized access, disclosure, alteration, or destruction. Our security program is based on industry standards including the NIST Cybersecurity Framework and HIPAA Security Rule requirements.",
      "**Encryption:** All data transmitted over public networks is protected using TLS 1.2 or higher encryption. Data at rest — including stored ePHI — is encrypted using AES-256 encryption. Portable devices and removable media that may store PHI are encrypted.",
      "**Access Controls:** Access to personal information and PHI is strictly limited to authorized personnel based on role-based access controls and the principle of least privilege. All user accounts are protected by strong password policies and multi-factor authentication (MFA).",
      "**Audit Logging & Monitoring:** We maintain comprehensive audit logs of all access to systems containing PHI. Logs are reviewed regularly for unauthorized or unusual access patterns. Security information and event management (SIEM) tools provide real-time alerting.",
      "**Vulnerability Management:** We conduct regular security risk assessments in accordance with 45 CFR § 164.308(a)(1), perform periodic vulnerability scans and penetration testing, and promptly remediate identified vulnerabilities.",
      "**Incident Response:** We maintain a documented incident response plan that defines procedures for detecting, containing, and recovering from security incidents. Our breach notification procedures ensure timely communication to affected parties as required by law.",
      "**Employee Training:** All workforce members with access to personal information or PHI complete mandatory privacy and security training. We conduct background checks on employees with access to sensitive data and enforce a formal sanctions policy for policy violations.",
      "**Vendor Management:** We maintain a formal vendor risk management program to assess and monitor the security posture of third-party service providers who access or process information on our behalf.",
      "While we implement rigorous security measures, no electronic storage or transmission method is 100% secure. In the event of a security incident affecting your information, we will notify you as required by applicable law."
    ]
  },
  {
    id: "data-retention",
    icon: Trash2,
    title: "Data Retention & Disposal",
    content: [
      "Opaline Healthcare System retains personal information and PHI only for as long as necessary to fulfill the purposes for which it was collected, to comply with our legal and contractual obligations, and to resolve disputes and enforce our agreements.",
      "**PHI Retention:** PHI processed on behalf of covered entity clients is retained in accordance with the terms of our Business Associate Agreements and applicable federal and state medical records retention laws. Under HIPAA, we are required to retain documentation of our privacy policies and PHI-related activities for a minimum of six (6) years from the date of creation or the date when the document was last in effect, whichever is later.",
      "**Client Business Records:** Business records, contracts, and correspondence related to client engagements are retained for the period specified in the applicable service agreement, and thereafter for the period required by applicable law, typically seven (7) years.",
      "**Website Usage Data:** Technical and analytics data collected through our website is retained for up to twenty-four (24) months and then aggregated or anonymized.",
      "**Marketing Communications:** If you opt in to our marketing communications, we retain your contact information until you unsubscribe or request deletion, subject to any legal retention requirements.",
      "**Secure Disposal:** When information is no longer required to be retained, we securely destroy it using industry-accepted methods — including cryptographic erasure for electronic data and cross-cut shredding for physical records — to ensure it cannot be reconstructed or recovered."
    ]
  },
  {
    id: "your-rights",
    icon: ClipboardList,
    title: "Your Privacy Rights",
    content: [
      "Depending on your location and the nature of our relationship with you, you may have certain rights regarding your personal information. We are committed to honoring these rights and will respond to verified requests promptly and in accordance with applicable law.",
      "**Right to Access:** You may request access to the personal information we hold about you, including a description of the categories of information collected, the purposes for which it is used, and, where applicable, a copy of the information itself.",
      "**Right to Correction:** You may request that we correct or update personal information that is inaccurate, incomplete, or outdated.",
      "**Right to Deletion:** Subject to our legal and contractual obligations, you may request deletion of your personal information. We will comply unless we are required by law to retain the information or have a legitimate overriding interest in doing so.",
      "**Right to Restrict Processing:** You may request that we restrict the processing of your personal information in certain circumstances, such as when you contest its accuracy or object to our use of it.",
      "**Right to Data Portability:** Where technically feasible, you may request that we provide your personal information in a structured, commonly used, machine-readable format.",
      "**Right to Opt-Out of Marketing:** You may opt out of receiving marketing communications from us at any time by clicking 'Unsubscribe' in any marketing email or by contacting us directly. We will process your request within 10 business days.",
      "**PHI Access Rights Under HIPAA:** Individuals seeking access to, amendment of, or an accounting of disclosures of their PHI should contact their healthcare provider (the covered entity) directly. As a Business Associate, Opaline Healthcare System processes PHI on behalf of covered entities and will redirect such requests accordingly or assist the covered entity in fulfilling them.",
      "**California Residents (CCPA/CPRA):** California residents may have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including the right to know about data collection and sharing, the right to delete personal information, and the right to non-discrimination for exercising privacy rights.",
      "To exercise any of the rights described above, please submit a written request to our Privacy Officer at privacy@opalinhealthcare.com. We may need to verify your identity before processing your request."
    ]
  },
  {
    id: "cookies",
    icon: Globe,
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar technologies to deliver a functional, personalized, and analytically informed browsing experience. A cookie is a small text file placed on your device when you visit a website. Cookies do not contain PHI and are not used to identify patients.",
      "**Strictly Necessary Cookies:** These cookies are essential for the website to function properly and cannot be disabled. They enable core functionality such as security, page navigation, and access to secure areas of the site.",
      "**Performance & Analytics Cookies:** We use analytics tools (such as Google Analytics) to collect anonymous information about how visitors interact with our website — including pages visited, session duration, and traffic sources. This data helps us improve our website and understand user behavior. The information collected is aggregated and does not identify individuals.",
      "**Functional & Preference Cookies:** These cookies allow the website to remember choices you have made (such as your preferred language or region) and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we use.",
      "**Marketing & Targeting Cookies:** We may use cookies to deliver relevant advertising and track the effectiveness of our marketing campaigns. These cookies track your online activity across websites and help us serve ads more relevant to your interests.",
      "**Managing Cookies:** You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you before a cookie is set. Please note that disabling certain cookies may affect the functionality of our website. For more information on managing cookies, visit www.aboutcookies.org.",
      "**Do Not Track:** Our website does not currently respond to browser 'Do Not Track' signals, as there is no industry-standard approach to such signals at this time."
    ]
  },
  {
    id: "third-party",
    icon: Building2,
    title: "Third-Party Links & Services",
    content: [
      "Our website may contain links to third-party websites, resources, or services that are not operated by Opaline Healthcare System. These links are provided for your convenience and informational purposes only.",
      "We have no control over the content, privacy practices, or security of third-party websites. This Privacy Policy does not apply to third-party websites, and we are not responsible for the privacy practices or content of any website or service not operated by Opaline Healthcare System.",
      "We encourage you to review the privacy policies of any third-party website you visit before submitting any personal information. Opaline Healthcare System is not liable for any damages or losses resulting from your use of or reliance on third-party websites or services.",
      "We may integrate third-party tools and platforms (such as scheduling software, CRM systems, or payment processors) into our service delivery. These integrations are governed by the applicable vendor agreements and BAAs, and these third parties are obligated to maintain appropriate privacy and security protections."
    ]
  },
  {
    id: "children",
    icon: AlertCircle,
    title: "Children's Privacy",
    content: [
      "Our website and services are not directed to children under the age of 13. Opaline Healthcare System does not knowingly collect personal information directly from children under 13 through our website.",
      "If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately at privacy@opalinhealthcare.com. We will promptly investigate and, if confirmed, delete the information from our systems.",
      "PHI relating to minors that we process on behalf of covered entity clients is governed by our Business Associate Agreements and applicable law, including HIPAA and any applicable state minor patient privacy laws."
    ]
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "Updates to This Privacy Policy",
    content: [
      "Opaline Healthcare System reviews and updates this Privacy Policy periodically to reflect changes in our practices, technologies, applicable legal requirements, and the feedback of our clients and stakeholders.",
      "When we make material changes to this Privacy Policy, we will update the 'Last Updated' date at the top of this page and, where required by law or where the changes significantly affect your rights, we will provide additional notice — such as a prominent notice on our website, an email notification, or both.",
      "We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information. **Your continued use of our website or services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.** If you do not agree with any changes, please discontinue use of our services and contact us to discuss your options.",
      "Previous versions of this Privacy Policy are available upon request by contacting privacy@opalinhealthcare.com."
    ]
  }
];

export function PrivacyPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-32 sm:pt-36 min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#07306d] via-[#0a4080] to-[#07306d] py-16 sm:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2aa99b]/10 rounded-full -translate-x-20 translate-y-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 bg-[#2aa99b]/20 border border-[#2aa99b]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#2aa99b]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Opaline Healthcare System is committed to protecting your privacy and the security of your personal information and Protected Health Information (PHI).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <span className="text-white/50 text-sm">Last Updated: April 13, 2026</span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#2aa99b] text-sm">
                <Lock className="w-3.5 h-3.5" />
                HIPAA Compliant
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important notice bar */}
      <div className="bg-[#f0f9f8] border-b border-[#2aa99b]/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-[#07306d]/70">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#2aa99b]" /> HIPAA & HITECH Compliant</span>
          <span className="hidden sm:inline text-[#07306d]/30">|</span>
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-[#2aa99b]" /> AES-256 Encryption</span>
          <span className="hidden sm:inline text-[#07306d]/30">|</span>
          <span className="flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-[#2aa99b]" /> BAA Executed with All Clients</span>
          <span className="hidden sm:inline text-[#07306d]/30">|</span>
          <span className="flex items-center gap-1.5"><Bell className="w-3.5 h-3.5 text-[#2aa99b]" /> Breach Notification Ready</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Table of Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32 bg-[#f6f9fb] rounded-2xl p-6 border border-[#e5edf2]">
              <h3 className="font-semibold text-[#07306d] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2aa99b]" />
                Table of Contents
              </h3>
              <ul className="space-y-1">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm text-[#07306d]/60 hover:text-[#2aa99b] transition-colors text-left w-full py-1.5 flex items-start gap-2 group"
                    >
                      <span className="text-[#2aa99b]/40 group-hover:text-[#2aa99b] transition-colors text-xs mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[#e5edf2] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#2aa99b] font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  <span>HIPAA Compliant</span>
                </div>
                <p className="text-xs text-[#07306d]/50 leading-relaxed">
                  Questions? Contact our Privacy Officer at<br />
                  <a href="mailto:privacy@opalinhealthcare.com" className="text-[#2aa99b] hover:underline">privacy@opalinhealthcare.com</a>
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="scroll-mt-36"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#2aa99b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-[#2aa99b]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#2aa99b]/60 font-medium uppercase tracking-wider">
                        Section {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#07306d] leading-tight">{section.title}</h2>
                    </div>
                  </div>
                  <div className="space-y-3 pl-0 sm:pl-13">
                    {section.content.map((para, pIdx) => {
                      const parts = para.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p key={pIdx} className="text-[#07306d]/70 leading-relaxed">
                          {parts.map((part, i) =>
                            i % 2 === 1 ? (
                              <strong key={i} className="text-[#07306d] font-semibold">{part}</strong>
                            ) : (
                              <span key={i}>{part}</span>
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                  {index < sections.length - 1 && (
                    <hr className="mt-10 border-[#e5edf2]" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#07306d] to-[#0a4080] rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2aa99b]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact Our Privacy Officer</h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    If you have questions about this Privacy Policy, wish to exercise your privacy rights, or need to report a privacy concern, please contact our designated Privacy Officer:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 space-y-1.5">
                      <p className="font-semibold text-white">Opaline Healthcare System</p>
                      <p className="text-white/70 text-sm">Privacy Officer — Compliance Division</p>
                      <a href="mailto:privacy@opalinhealthcare.com" className="text-[#2aa99b] text-sm hover:underline block">
                        privacy@opalinhealthcare.com
                      </a>
                      <a href="tel:+17175929852" className="text-white/80 text-sm hover:text-[#2aa99b] transition-colors block">
                        +1 717 592-9852
                      </a>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 space-y-1.5">
                      <p className="font-semibold text-white">Response Commitment</p>
                      <p className="text-white/70 text-sm">We respond to all privacy inquiries within <strong className="text-white">5 business days</strong>.</p>
                      <p className="text-white/70 text-sm">Breach notifications: within <strong className="text-white">60 days</strong> as required by HIPAA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
