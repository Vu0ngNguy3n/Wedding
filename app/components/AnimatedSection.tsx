// components/AnimatedSection.tsx
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import animations from "@/styles/animations.module.css";

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?:
    | "fade-in-up"
    | "slide-in-left"
    | "slide-in-right"
    | "fade-in-zoom"
    | "rotate-in"
    | "fade-in"
    | "slide-in-down"
    | "blur-in"
    // Thêm các hiệu ứng mới vào đây
    | "pop-up"
    | "expand-in"
    | "twist-in"
    | "stagger-fade-in-up"
    | "parallax-shift"
    | "swipe-up"; // Thêm các hiệu ứng mới
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

function AnimatedSection({
  children,
  animationType = "fade-in-up",
  threshold = 0.5, // Mức độ phần trăm của phần tử hiển thị trong viewport để kích hoạt hiệu ứng
  triggerOnce = true, // Chỉ kích hoạt hiệu ứng một lần khi phần tử vào viewport
  className,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: threshold,
  });

  const animationClass =
    animations[animationType as keyof typeof animations] ||
    animations["fade-in-up"];

  return (
    <div
      ref={ref}
      className={`${className} ${
        animations.animateOnScroll
      } ${animationClass} ${inView ? animations.isVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
