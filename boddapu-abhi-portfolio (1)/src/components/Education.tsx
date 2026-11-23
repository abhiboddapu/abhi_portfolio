import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data/education';
import { SectionHeading } from './SectionHeading';

export function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-[#08090D] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          kicker="Academic Background"
          title="Education"
          subtitle="Academic milestones and core subjects shaping my foundation in AI, Data Science, and software development."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {educationData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-200 hover:border-[#8B5CF6]/60 dark:border-[#272A35] dark:bg-[#171A23] dark:shadow-none sm:p-8"
            >
              <div>
                {/* Top Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-[#272A35] dark:bg-[#11131A]">
                      <GraduationCap
                        className="h-5 w-5 text-violet-600 dark:text-[#A78BFA]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-medium tabular-nums text-sky-600 dark:text-[#38BDF8]">
                        {item.period}
                      </p>
                      <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Degree & College */}
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {item.degree}
                </h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span
                        aria-hidden="true"
                        className="text-slate-300 dark:text-[#272A35]"
                      >
                        ·
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500 dark:text-[#A1A1AA]">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{item.location}</span>
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA]">
                  {item.summary}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-7 border-t border-slate-200 pt-5 dark:border-[#272A35]">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-[#A1A1AA]">
                  Key Achievements
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  {item.achievements.map((ach) => (
                    <div
                      key={ach.label}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[#272A35] dark:bg-[#11131A]"
                    >
                      <p className="text-xs text-slate-500 dark:text-[#A1A1AA]">
                        {ach.label}
                      </p>
                      <p className="mt-0.5 font-display text-lg font-semibold tabular-nums text-slate-900 dark:text-white">
                        {ach.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
