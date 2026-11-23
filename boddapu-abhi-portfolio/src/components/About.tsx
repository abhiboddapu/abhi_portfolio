import { motion, useReducedMotion } from 'motion/react';
import { personalInfo } from '../data/personalInfo';
import { SectionHeading } from './SectionHeading';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-y border-slate-200 bg-white py-20 transition-colors duration-200 dark:border-[#272A35] dark:bg-[#11131A] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          kicker="Profile & Perspective"
          title={personalInfo.about.title}
          subtitle={personalInfo.about.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: About Narrative */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-lg lg:col-span-6"
          >
            {personalInfo.about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'font-medium text-slate-900 dark:text-white/95'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}

            <p className="border-t border-slate-200 pt-5 text-sm font-medium text-slate-700 dark:border-[#272A35] dark:text-slate-300">
              {personalInfo.about.summaryStatement}
            </p>
          </motion.div>

          {/* Right: Focus Highlights Grid */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6"
          >
            {personalInfo.about.highlights.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-[#8B5CF6]/50 dark:border-[#272A35] dark:bg-[#171A23]"
              >
                <div>
                  <span className="font-mono text-xs tabular-nums text-sky-600 dark:text-[#38BDF8]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA]">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
