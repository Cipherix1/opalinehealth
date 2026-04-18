import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function ServiceHours() {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [showSlash, setShowSlash] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Animate hours from 0 to 24
    let currentHour = 0;
    const hourInterval = setInterval(() => {
      currentHour += 1;
      setHours(currentHour);

      if (currentHour >= 24) {
        clearInterval(hourInterval);
        setShowSlash(true);

        // Start animating days after hours complete
        setTimeout(() => {
          let currentDay = 0;
          const dayInterval = setInterval(() => {
            currentDay += 1;
            setDays(currentDay);

            if (currentDay >= 7) {
              clearInterval(dayInterval);
            }
          }, 100);
        }, 200);
      }
    }, 40);

    return () => clearInterval(hourInterval);
  }, [isInView]);

  return (
    <section ref={ref} className="py-12 sm:py-20 bg-gradient-to-br from-[#f6f9fb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07306d] mb-8">
            Service Hours
          </h2>

          <div className="mb-6">
            <p className="text-xl sm:text-2xl font-bold text-[#07306d] mb-4">
              MONDAY - SUNDAY
            </p>

            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4">
              <motion.span
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#f4b400]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                {hours}
              </motion.span>

              {showSlash && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#f4b400]"
                >
                  /
                </motion.span>
              )}

              {showSlash && (
                <motion.span
                  className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#f4b400]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {days}
                </motion.span>
              )}
            </div>

            <p className="text-base sm:text-lg text-[#07306d]/70 mb-2">
              Available for our clients
            </p>

            <p className="text-xl sm:text-2xl font-semibold text-[#2aa99b] italic px-4">
              "No Hours, Just Commitment."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
