import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetHideTimer = () => {
      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Show cursor
      setIsVisible(true);

      // Set new timeout to hide cursor after 3 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      resetHideTimer();
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
        resetHideTimer();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
        resetHideTimer();
      }
    };

    const handleTouchEnd = () => {
      resetHideTimer();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseover", handleMouseOver);

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10002]">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="absolute top-0 left-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.3 : 1,
              opacity: 1,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              x: { type: "tween", duration: 0.05, ease: "linear" },
              y: { type: "tween", duration: 0.05, ease: "linear" },
              scale: { type: "spring", stiffness: 400, damping: 28, mass: 0.5 },
              opacity: { duration: 0.3 },
            }}
          >
            <svg
              width={isHovering ? 40 : 32}
              height={isHovering ? 40 : 32}
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none"
              style={{
                filter: isHovering ? "drop-shadow(0 0 8px rgba(42, 169, 155, 0.6))" : "drop-shadow(0 0 4px rgba(42, 169, 155, 0.4))",
              }}
            >
              {/* Stethoscope earpieces */}
              <path
                d="M3 3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3V9C5 11.7614 7.23858 14 10 14C12.7614 14 15 11.7614 15 9V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V9C17 12.866 13.866 16 10 16C6.13401 16 3 12.866 3 9V3Z"
                fill={isHovering ? "#07306d" : "#2aa99b"}
              />
              {/* Tube */}
              <path
                d="M10 14V18C10 19.6569 11.3431 21 13 21H15"
                stroke={isHovering ? "#07306d" : "#2aa99b"}
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Chest piece circle */}
              <circle
                cx="18"
                cy="19"
                r="3"
                fill="none"
                stroke={isHovering ? "#07306d" : "#2aa99b"}
                strokeWidth="2"
              />
              {/* Inner circle of chest piece */}
              <circle
                cx="18"
                cy="19"
                r="1.5"
                fill={isHovering ? "#07306d" : "#2aa99b"}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}