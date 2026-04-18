import { useState, useEffect } from "react";
import { useInView } from "./hooks/useInView";

interface AnimatedNumberProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({ value, duration = 2000, className = "" }: AnimatedNumberProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const valueStr = String(value);

    // Check if value contains special characters like $ or %
    const numericPart = valueStr.match(/[\d.]+/)?.[0] || "0";
    const prefix = valueStr.match(/^[^\d.]*/)?.[0] || "";
    const suffix = valueStr.match(/[^\d.]*$/)?.[0] || "";

    const targetNumber = parseFloat(numericPart);
    const isDecimal = numericPart.includes(".");

    if (isNaN(targetNumber)) {
      setDisplayValue(valueStr);
      return;
    }

    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, targetNumber);

      const formattedNumber = isDecimal
        ? current.toFixed(1)
        : Math.floor(current).toString();

      setDisplayValue(prefix + formattedNumber + suffix);

      if (step >= steps) {
        setDisplayValue(valueStr);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
