import { useReducedMotion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import type { ThemeMode } from '../hooks/useTheme';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface FooterProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Footer({ theme, onToggleTheme }: FooterProps) {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors duration-200 dark:border-[#272A35] dark:bg-[#11131A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-slate-900 uppercase dark:text-white">
              {personalInfo.fullName}
            </p>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-[#A1A1AA]">
              {personalInfo.tagline}
            </p>
          </div>

          <nav aria-label="Footer Quick Links" className="flex flex-wrap gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-[#A1A1AA] dark:hover:text-white whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Boddapu Abhi GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#8B5CF6] hover:text-slate-900 dark:border-[#272A35] dark:bg-[#171A23] dark:text-[#A1A1AA] dark:hover:text-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Boddapu Abhi LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#38BDF8] hover:text-slate-900 dark:border-[#272A35] dark:bg-[#171A23] dark:text-[#A1A1AA] dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Boddapu Abhi"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#8B5CF6] hover:text-slate-900 dark:border-[#272A35] dark:bg-[#171A23] dark:text-[#A1A1AA] dark:hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 dark:border-[#272A35] sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500 dark:text-[#A1A1AA]">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-[#8B5CF6] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] dark:border-[#272A35] dark:bg-[#171A23] dark:text-white cursor-pointer whitespace-nowrap shrink-0"
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

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-900 transition-colors hover:border-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] dark:border-[#272A35] dark:bg-[#171A23] dark:text-white cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Back to Top</span>
              <ArrowUp
                className="h-3.5 w-3.5 text-sky-600 dark:text-[#38BDF8]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
