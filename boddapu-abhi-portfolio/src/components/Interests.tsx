import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Compass,
  Cpu,
  Lightbulb,
  Puzzle,
  Radar,
  Wand2,
} from 'lucide-react';
import { interestsData, type InterestItem } from '../data/interests';
import { SectionHeading } from './SectionHeading';

function InterestIcon({
  iconKey,
  active,
}: {
  iconKey: InterestItem['iconKey'];
  active: boolean;
}) {
  const colorClass = active
    ? 'text-sky-600 dark:text-[#38BDF8]'
    : 'text-violet-600 dark:text-[#A78BFA]';
  switch (iconKey) {
    case 'cpu':
      return <Cpu className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
    case 'wand':
      return <Wand2 className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
    case 'radar':
      return <Radar className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
    case 'lightbulb':
      return <Lightbulb className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
    case 'puzzle':
      return <Puzzle className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
    case 'compass':
      return <Compass className={`h-5 w-5 ${colorClass}`} aria-hidden="true" />;
  }
}

export function Interests() {
  const [selectedId, setSelectedId] = useState<string>(interestsData[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeInterest =
    interestsData.find((item) => item.id === selectedId) ?? interestsData[0];

  return (
    <section
      id="interests"
      className="border-y border-slate-200 bg-white py-20 transition-colors duration-200 dark:border-[#272A35] dark:bg-[#11131A] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          kicker="Curiosity & Exploration"
          title="What I'm Interested In"
          subtitle="Select any area below to explore what drives my learning and curiosity."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interestsData.map((item, idx) => {
            const isSelected = item.id === selectedId;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-pressed={isSelected}
                className={`group flex flex-col items-start rounded-2xl border p-6 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer ${
                  isSelected
                    ? 'border-[#8B5CF6] bg-violet-50/60 dark:bg-[#171A23]'
                    : 'border-slate-200 bg-slate-50/70 hover:border-[#8B5CF6]/50 hover:bg-slate-50 dark:border-[#272A35] dark:bg-[#08090D]/60 dark:hover:bg-[#171A23]/80'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white dark:border-[#272A35] dark:bg-[#11131A]">
                    <InterestIcon iconKey={item.iconKey} active={isSelected} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                    {item.domain}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA]">
                  {item.summary}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Focused Exploration Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeInterest.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-[#272A35] dark:bg-[#08090D] sm:flex-row sm:items-center sm:p-7"
          >
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-sky-600 dark:text-[#38BDF8]">
                Focused Perspective · {activeInterest.title}
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-800 dark:text-white/90 sm:text-base">
                {activeInterest.explorationFocus}
              </p>
            </div>
            <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-[#A1A1AA] whitespace-nowrap shrink-0">
              {activeInterest.domain}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
