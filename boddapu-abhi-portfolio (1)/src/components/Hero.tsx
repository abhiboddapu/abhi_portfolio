import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import type { ThemeMode } from '../hooks/useTheme';

interface HeroProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Hero({ theme, onToggleTheme }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.hero.rotatingRoles.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-50 pt-28 pb-20 transition-colors duration-200 dark:bg-[#08090D]"
    >
      {/* Subtle architectural ambient gradient shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[130px] dark:bg-[#8B5CF6]/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-[#38BDF8]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
            <span className="text-sky-600 dark:text-[#38BDF8]">
              {personalInfo.hero.kicker}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-[#272A35]">
              /
            </span>
            <span className="text-slate-600 dark:text-[#A1A1AA]">
              {personalInfo.departmentShort}
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.06]">
            {personalInfo.hero.heading}
          </h1>

          <div className="mt-5 flex flex-col gap-2">
            <p className="font-display text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#0284C7] dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#38BDF8] sm:text-3xl">
              {personalInfo.hero.animatedHeadline}
            </p>

            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={personalInfo.hero.rotatingRoles[roleIndex]}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base font-medium text-slate-600 dark:text-[#A1A1AA] sm:text-lg"
                >
                  {personalInfo.hero.rotatingRoles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-lg">
            {personalInfo.hero.description}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#8B5CF6] px-6 py-3 text-sm font-medium text-white transition-all duration-150 hover:bg-[#7C3AED] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore My Portfolio</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-150 hover:border-[#8B5CF6]/70 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:border-[#272A35] dark:bg-[#11131A] dark:text-white dark:hover:bg-[#171A23] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight
                className="h-4 w-4 text-sky-600 dark:text-[#38BDF8]"
                aria-hidden="true"
              />
            </button>
          </div>
        </motion.div>

        {/* Social Links & Theme Mode Switch */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-[#272A35]"
        >
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:text-[#A1A1AA] dark:hover:text-white rounded-md px-1 whitespace-nowrap shrink-0"
            >
              <Github
                className="h-4 w-4 text-violet-600 dark:text-[#A78BFA]"
                aria-hidden="true"
              />
              <span>GitHub</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-[#272A35]">
              ·
            </span>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:text-[#A1A1AA] dark:hover:text-white rounded-md px-1 whitespace-nowrap shrink-0"
            >
              <Linkedin
                className="h-4 w-4 text-sky-600 dark:text-[#38BDF8]"
                aria-hidden="true"
              />
              <span>LinkedIn</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-[#272A35]">
              ·
            </span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:text-[#A1A1AA] dark:hover:text-white rounded-md px-1 whitespace-nowrap shrink-0"
            >
              <Mail
                className="h-4 w-4 text-violet-600 dark:text-[#A78BFA]"
                aria-hidden="true"
              />
              <span>Email</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-[#8B5CF6]/60 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:border-[#272A35] dark:bg-[#11131A] dark:text-[#A1A1AA] dark:hover:text-white cursor-pointer whitespace-nowrap shrink-0"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-violet-600" aria-hidden="true" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
