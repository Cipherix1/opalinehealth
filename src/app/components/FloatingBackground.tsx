import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import medicalClipboard from "../../imports/9491756.jpg";
import syringe from "../../imports/b093260d-478f-424d-80e2-5ffea0cea3e9.jpg";
import pharmacy from "../../imports/9d346b46-160b-4814-9ef9-7766292d9c3e.jpg";

export function FloatingBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    {
      src: medicalClipboard,
      initialX: "10%",
      initialY: "15%",
      scale: 0.3,
      scrollSpeed: 0.3,
      rotation: -15,
      blur: true,
    },
    {
      src: syringe,
      initialX: "75%",
      initialY: "25%",
      scale: 0.25,
      scrollSpeed: 0.5,
      rotation: 10,
      blur: true,
    },
    {
      src: pharmacy,
      initialX: "85%",
      initialY: "60%",
      scale: 0.28,
      scrollSpeed: 0.4,
      rotation: -8,
      blur: true,
    },
    {
      src: medicalClipboard,
      initialX: "5%",
      initialY: "70%",
      scale: 0.2,
      scrollSpeed: 0.6,
      rotation: 20,
      blur: true,
    },
    {
      src: syringe,
      initialX: "20%",
      initialY: "45%",
      scale: 0.18,
      scrollSpeed: 0.35,
      rotation: -12,
      blur: true,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element, index) => {
        const scrollY = useTransform(
          scrollYProgress,
          [0, 1],
          [0, index % 2 === 0 ? 300 : -300]
        );

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: element.initialX,
              top: element.initialY,
              scale: element.scale,
              y: scrollY,
              x: mousePosition.x * (20 + index * 10),
              rotateY: mousePosition.x * (15 + index * 5),
              rotateX: -mousePosition.y * (10 + index * 3),
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [element.rotation, element.rotation + 5, element.rotation],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={element.src}
              alt=""
              className={`w-full h-auto ${
                element.blur ? "opacity-20 blur-[1px]" : "opacity-25"
              } select-none`}
              style={{
                filter: "drop-shadow(0 10px 30px rgba(7, 48, 109, 0.15))",
                mixBlendMode: "multiply",
              }}
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
