import { motion } from "motion/react";
import { Award, Users2, Clock3, HeartPulse } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Award,
    title: "Expert Medical Team",
    description: "Board-certified physicians with extensive experience"
  },
  {
    icon: HeartPulse,
    title: "Advanced Technology",
    description: "Latest medical equipment and treatment methods"
  },
  {
    icon: Clock3,
    title: "Flexible Hours",
    description: "Extended hours and same-day appointments available"
  },
  {
    icon: Users2,
    title: "Patient-Centered",
    description: "Personalized care plans tailored to your needs"
  }
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-br from-[#f6f9fb] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#07306d] mb-6">
              Why Choose Opalin Healthcare
            </h2>
            <p className="text-lg text-[#07306d]/70 mb-10 leading-relaxed">
              We're committed to providing exceptional healthcare services with compassion, expertise, and the latest medical innovations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-[#2aa99b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#2aa99b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#07306d] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#07306d]/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZG9jdG9yJTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzYwMjA4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical team with patient"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-[#e5edf2]"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2aa99b] mb-1">15+</div>
                <div className="text-sm text-[#07306d]/60">Years Serving</div>
                <div className="text-sm text-[#07306d]/60">Our Community</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
