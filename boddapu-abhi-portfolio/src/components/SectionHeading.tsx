import { motion, useReducedMotion } from 'motion/react';

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <div
        className={`mb-3 flex items-center gap-3 text-xs font-medium tracking-wider text-violet-600 dark:text-[#A78BFA] ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="font-mono tabular-nums text-sky-600 dark:text-[#38BDF8]">
          {index}
        </span>
        <span aria-hidden="true" className="text-slate-300 dark:text-[#272A35]">
          /
        </span>
        <span>{kicker}</span>
      </div>

      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
