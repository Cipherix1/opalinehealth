import { motion } from "motion/react";
import logo from "../../imports/logo-1.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onLoadingComplete, 3000);
      }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-[#07306d] via-[#0a4080] to-[#2aa99b]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
          className="mb-8"
        >
          <img src={logo} alt="Opaline Healthcare" className="h-32 w-auto mx-auto drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Welcome To
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.9
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
        >
          Opaline HealthCare Systems
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.3
          }}
          className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.8
          }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
