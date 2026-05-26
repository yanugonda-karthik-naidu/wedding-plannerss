import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`font-serif text-[34px] sm:text-5xl md:text-[56px] leading-[1.05] mt-5 ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={`mt-5 text-[15px] md:text-base leading-relaxed ${
              light ? "text-white/75" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
