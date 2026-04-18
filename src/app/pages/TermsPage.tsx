import { motion } from "motion/react";
import { FileText, AlertCircle, Scale, ShieldCheck, Ban, RefreshCw, Globe, Mail, Handshake, CreditCard } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "These Terms and Conditions ('Terms') constitute a legally binding agreement between you and Opaline Healthcare System ('Opaline,' 'Company,' 'we,' 'us,' or 'our'). By accessing or using our website at www.opalinhealthcare.com or engaging our services, you agree to be bound by these Terms.",
      "If you are entering into these Terms on behalf of a healthcare practice, clinic, hospital, or other organization, you represent and warrant that you have the authority to bind that organization to these Terms, and 'you' refers to both you individually and that organization.",
      "If you do not agree to all of these Terms, you must not access our website or use our services. Your continued use of our website or services following any changes to these Terms constitutes your acceptance of such changes."
    ]
  },
  {
    id: "services-description",
    icon: Handshake,
    title: "Description of Services",
    content: [
      "Opaline Healthcare System provides professional medical billing, revenue cycle management (RCM), provider enrollment, and virtual assistant services to healthcare providers, practices, clinics, and related organizations ('Clients').",
      "**Revenue Cycle Management (RCM):** End-to-end management of the healthcare revenue cycle including patient billing, insurance claims submission, payment posting, denial management, coding support, and financial reporting.",
      "**VA Services:** Virtual assistant services in medical billing and RCM, including claims processing, insurance verification, AR follow-up, and practice management support.",
      "**Provider Enrollment:** Assistance with enrolling healthcare providers with commercial insurance companies, Medicare, Medicaid, and other payers, including credentialing and revalidation services.",
      "The specific services provided to each Client are defined in a separate Service Agreement or Statement of Work executed between Opaline Healthcare System and the Client. These Terms are incorporated by reference into all such agreements.",
      "We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice to affected Clients."
    ]
  },
  {
    id: "client-obligations",
    icon: ShieldCheck,
    title: "Client Obligations",
    content: [
      "By engaging Opaline Healthcare System's services, Clients agree to the following obligations:",
      "**Accurate Information:** Provide accurate, complete, and up-to-date information necessary for the provision of services, including patient demographics, insurance information, clinical documentation, and provider credentials.",
      "**Cooperation:** Cooperate fully with Opaline Healthcare System's reasonable requests for information, approvals, and access necessary to perform the services.",
      "**Timely Response:** Respond in a timely manner to requests for information, clarification, or authorization that may affect the performance of services or the processing of claims.",
      "**Compliance:** Maintain compliance with all applicable laws and regulations, including HIPAA, applicable state licensing requirements, and payer participation agreements.",
      "**Business Associate Agreement:** Execute a HIPAA-compliant Business Associate Agreement (BAA) with Opaline Healthcare System prior to the disclosure of any Protected Health Information (PHI).",
      "**Authorized Use:** Use our services only for lawful purposes and in accordance with these Terms and any applicable Service Agreement.",
      "**Notification of Changes:** Promptly notify Opaline Healthcare System of any changes to practice information, provider credentials, insurance contracts, or other information that may affect the delivery of services."
    ]
  },
  {
    id: "fees-payment",
    icon: CreditCard,
    title: "Fees and Payment",
    content: [
      "Fees for Opaline Healthcare System's services are as specified in the applicable Service Agreement or Statement of Work. We reserve the right to modify our fee structures with appropriate notice to Clients.",
      "**Invoicing:** Invoices are typically issued monthly based on services rendered during the billing period. Specific billing arrangements may vary as set forth in individual Service Agreements.",
      "**Payment Terms:** Payment is due within the timeframe specified in the applicable Service Agreement, typically net 30 days from the invoice date.",
      "**Late Payments:** Late payments may be subject to interest charges as specified in the Service Agreement. Opaline Healthcare System reserves the right to suspend services for accounts with significantly overdue balances.",
      "**Disputes:** Any billing disputes must be submitted in writing within 30 days of the invoice date. Disputed amounts should be clearly identified with supporting documentation.",
      "**Taxes:** Clients are responsible for all applicable taxes, duties, and similar charges related to the services, except for taxes based on Opaline Healthcare System's net income."
    ]
  },
  {
    id: "hipaa-compliance",
    icon: ShieldCheck,
    title: "HIPAA Compliance & Business Associates",
    content: [
      "Opaline Healthcare System operates as a Business Associate under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act.",
      "**Business Associate Agreements:** Prior to any exchange of Protected Health Information (PHI), Clients and Opaline Healthcare System must execute a written Business Associate Agreement (BAA) that complies with the requirements of 45 CFR §§ 164.308, 164.310, 164.312, and 164.314.",
      "**Use and Disclosure of PHI:** Opaline Healthcare System will only use and disclose PHI as permitted by the BAA, applicable laws, and in the manner necessary to perform the services.",
      "**Security Standards:** Opaline Healthcare System maintains administrative, physical, and technical safeguards in accordance with the HIPAA Security Rule (45 CFR Part 164, Subpart C).",
      "**Breach Notification:** In the event of a breach of unsecured PHI, Opaline Healthcare System will comply with breach notification obligations as required by HIPAA and the applicable BAA.",
      "Opaline Healthcare System's HIPAA compliance program is subject to periodic review and updating to reflect changes in applicable laws and best practices."
    ]
  },
  {
    id: "intellectual-property",
    icon: Scale,
    title: "Intellectual Property",
    content: [
      "All content on our website, including text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Opaline Healthcare System or its content suppliers and is protected by United States and international copyright laws.",
      "**Opaline Healthcare System's IP:** Our trademarks, service marks, trade names, logos, and other distinctive brand features are proprietary to Opaline Healthcare System. You may not use these without our prior written consent.",
      "**Client Data:** All data, records, and information provided by Clients remain the property of the Client. Opaline Healthcare System is granted a limited license to use such data solely for the purpose of providing the services.",
      "**Work Product:** Any reports, analyses, or other deliverables created by Opaline Healthcare System in the course of providing services are the property of Opaline Healthcare System unless otherwise specified in the applicable Service Agreement.",
      "**Feedback:** Any suggestions, ideas, or feedback you provide regarding our services may be used by Opaline Healthcare System without restriction or compensation."
    ]
  },
  {
    id: "limitations",
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OPALINE HEALTHCARE SYSTEM AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE OUR SERVICES.",
      "Opaline Healthcare System's total cumulative liability to any Client for any claims arising under or related to a Service Agreement shall not exceed the total fees paid by that Client to Opaline Healthcare System in the twelve (12) months preceding the event giving rise to the claim.",
      "Opaline Healthcare System does not guarantee specific financial outcomes, reimbursement amounts, claim approval rates, or enrollment timeframes. Results depend on many factors outside our control, including payer adjudication decisions and client-provided information.",
      "Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations may not apply to you."
    ]
  },
  {
    id: "prohibited",
    icon: Ban,
    title: "Prohibited Uses",
    content: [
      "You agree not to use our website or services for any of the following purposes:",
      "**Fraudulent Activity:** Submitting false or misleading claims, using our services to facilitate healthcare fraud, or misrepresenting clinical information.",
      "**Unauthorized Access:** Attempting to gain unauthorized access to our systems, networks, or data, or the systems, networks, or data of any third party.",
      "**Interference:** Interfering with or disrupting the operation of our website or services, or the servers or networks connected to them.",
      "**Harmful Conduct:** Uploading or transmitting malware, viruses, or other harmful code; engaging in activities that could damage, disable, or overburden our infrastructure.",
      "**Legal Violations:** Using our services in a manner that violates any applicable federal, state, or local law or regulation, including HIPAA, the False Claims Act, or anti-kickback statutes.",
      "**Reverse Engineering:** Attempting to reverse engineer, decompile, or disassemble any software or technology used to provide our services."
    ]
  },
  {
    id: "termination",
    icon: Ban,
    title: "Term and Termination",
    content: [
      "These Terms remain in effect for as long as you use our website or services. Individual Service Agreements may specify separate term and termination provisions.",
      "**Termination for Convenience:** Either party may terminate a Service Agreement for convenience by providing written notice as specified in the applicable agreement (typically 30-90 days).",
      "**Termination for Cause:** Either party may terminate a Service Agreement immediately for cause if the other party materially breaches the agreement and fails to cure such breach within a reasonable cure period.",
      "**Effect of Termination:** Upon termination, we will cease providing services and, subject to the terms of any BAA and applicable law, will securely return or destroy Client data as agreed. Payment obligations for services rendered prior to termination survive.",
      "**Survival:** Provisions relating to intellectual property, limitation of liability, indemnification, and dispute resolution survive termination."
    ]
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "Governing Law & Dispute Resolution",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Opaline Healthcare System is incorporated, without regard to its conflict of law principles.",
      "**Informal Resolution:** We encourage you to contact us first to resolve any dispute informally. Many issues can be resolved quickly through direct communication.",
      "**Arbitration:** Any dispute, claim, or controversy arising out of or relating to these Terms or the services provided, that cannot be resolved informally, shall be resolved by binding arbitration administered by a nationally recognized arbitration body.",
      "**Class Action Waiver:** You agree that any arbitration or legal proceeding shall be conducted on an individual basis only, and not as a class, collective, or representative action.",
      "**Exceptions:** Nothing in these Terms prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction."
    ]
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to Terms",
    content: [
      "Opaline Healthcare System reserves the right to modify these Terms at any time. When we make material changes, we will update the 'Last Updated' date at the top of this page and may notify you via email or through a notice on our website.",
      "Your continued use of our website or services after any changes become effective constitutes your acceptance of the revised Terms. If you do not agree with the new Terms, you should discontinue use of our website and services.",
      "It is your responsibility to review these Terms periodically for any changes."
    ]
  },
  {
    id: "miscellaneous",
    icon: Globe,
    title: "Miscellaneous",
    content: [
      "**Entire Agreement:** These Terms, together with any applicable Service Agreements and BAAs, constitute the entire agreement between you and Opaline Healthcare System with respect to your use of our services and supersede all prior agreements.",
      "**Severability:** If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.",
      "**Waiver:** Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.",
      "**Force Majeure:** Opaline Healthcare System shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, government actions, or telecommunications failures.",
      "**Assignment:** You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations freely.",
      "**Contact:** For questions about these Terms, please contact us at legal@opalinhealthcare.com or call +1 717 592-9852."
    ]
  }
];

export function TermsPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-32 sm:pt-36 min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#07306d] to-[#0a4080] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 bg-[#2aa99b]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-[#2aa99b]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
              Please read these Terms and Conditions carefully before using Opaline Healthcare System's website and services.
            </p>
            <p className="text-white/50 text-sm mt-4">Last Updated: April 13, 2026</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Table of Contents */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32 bg-[#f6f9fb] rounded-2xl p-6 border border-[#e5edf2]">
              <h3 className="font-semibold text-[#07306d] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2aa99b]" />
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm text-[#07306d]/60 hover:text-[#2aa99b] transition-colors text-left w-full py-1"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[#e5edf2]">
                <p className="text-xs text-[#07306d]/50">
                  By using our services, you agree to these terms.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Important Notice:</strong> These Terms and Conditions govern your use of Opaline Healthcare System's website and services. Please read them carefully. By using our services, you agree to be bound by these terms.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="scroll-mt-36"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#2aa99b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-[#2aa99b]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#07306d]">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
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
              className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#07306d] to-[#0a4080] rounded-2xl text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2aa99b]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Questions About Our Terms?</h3>
                  <p className="text-white/70 mb-4">
                    If you have questions about these Terms and Conditions or require clarification, please contact our legal team:
                  </p>
                  <ul className="space-y-1 text-sm text-white/80">
                    <li><strong className="text-white">Opaline Healthcare System</strong></li>
                    <li>Legal Department</li>
                    <li>Email: legal@opalinhealthcare.com</li>
                    <li>Phone: +1 717 592-9852</li>
                    <li>Address: 123 Medical Center Drive, Suite 100</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
