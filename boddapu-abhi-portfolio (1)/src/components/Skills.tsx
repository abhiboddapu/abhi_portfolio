import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrainCircuit, Paintbrush, Wrench } from 'lucide-react';
import {
  skillCategoriesData,
  type SkillCategoryCard,
  type SkillChipItem,
} from '../data/skills';
import { SectionHeading } from './SectionHeading';
import { SkillBrandIcon } from './SkillBrandIcon';

function CategoryHeaderIcon({
  headerIcon,
}: {
  headerIcon: SkillCategoryCard['headerIcon'];
}) {
  switch (headerIcon) {
    case 'brush':
      return (
        <Paintbrush
          className="h-6 w-6 text-amber-500 dark:text-[#FACC15]"
          aria-hidden="true"
        />
      );
    case 'brain':
      return (
        <BrainCircuit
          className="h-6 w-6 text-violet-600 dark:text-[#A78BFA]"
          aria-hidden="true"
        />
      );
    case 'wrench':
      return (
        <Wrench
          className="h-6 w-6 text-sky-600 dark:text-[#38BDF8]"
          aria-hidden="true"
        />
      );
  }
}

export function Skills() {
  const defaultSkill = skillCategoriesData[0].items[0];
  const [selectedSkill, setSelectedSkill] = useState<{
    categoryTitle: string;
    item: SkillChipItem;
  }>({
    categoryTitle: `${skillCategoriesData[0].headingPrimary} ${skillCategoriesData[0].headingSecondary}`,
    item: defaultSkill,
  });

  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="border-y border-slate-200 bg-white py-20 transition-colors duration-200 dark:border-[#272A35] dark:bg-[#11131A] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          kicker="Technical & Creative Stack"
          title="My Skills & Tools"
          subtitle="Programming languages, AI foundations, creative production skills, and everyday tools I work with."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillCategoriesData.map((category, idx) => {
            const categoryTitle = `${category.headingPrimary} ${category.headingSecondary}`;
            return (
              <motion.article
                key={category.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-200 hover:border-[#8B5CF6]/50 dark:border-[#23283B] dark:bg-[#0E111B] dark:shadow-none sm:p-8"
              >
                <div>
                  {/* Exact Screenshot Header Style: Rounded Square Icon + Two-Tone Bold Heading */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-[#1E2436] dark:bg-[#151A28]">
                      <CategoryHeaderIcon headerIcon={category.headerIcon} />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      <span className="text-slate-900 dark:text-white">
                        {category.headingPrimary}{' '}
                      </span>
                      <span className="text-slate-500 dark:text-[#94A3B8]">
                        {category.headingSecondary}
                      </span>
                    </h3>
                  </div>

                  {/* Interactive Skill Items Grid matching exact screenshot geometry */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {category.items.map((item) => {
                      const isSelected =
                        selectedSkill.item.id === item.id &&
                        selectedSkill.categoryTitle === categoryTitle;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setSelectedSkill({ categoryTitle, item })
                          }
                          aria-pressed={isSelected}
                          className={`inline-flex min-h-10 items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer whitespace-nowrap shrink-0 ${
                            isSelected
                              ? 'border-[#8B5CF6] bg-violet-50 text-slate-900 dark:border-[#8B5CF6] dark:bg-[#191E2E] dark:text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100 dark:border-[#2B3145] dark:bg-[#121623] dark:text-slate-100 dark:hover:border-[#4B5578] dark:hover:bg-[#181D2D]'
                          }`}
                        >
                          <SkillBrandIcon icon={item.icon} />
                          <span>{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500 dark:border-[#1E2436] dark:text-[#A1A1AA]">
                  {category.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Interactive Skill Detail Bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedSkill.categoryTitle}-${selectedSkill.item.id}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[#23283B] dark:bg-[#0E111B] dark:shadow-none sm:flex-row sm:items-center sm:px-7"
          >
            <div className="flex items-center gap-3">
              <SkillBrandIcon icon={selectedSkill.item.icon} />
              <div>
                <p className="text-xs font-medium text-sky-600 dark:text-[#38BDF8]">
                  {selectedSkill.categoryTitle} · {selectedSkill.item.name}
                </p>
                <p className="mt-0.5 text-sm text-slate-700 dark:text-white/90">
                  {selectedSkill.item.detail}
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA] whitespace-nowrap shrink-0">
              Click any skill to inspect
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
