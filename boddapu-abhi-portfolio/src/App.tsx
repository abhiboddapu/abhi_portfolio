import { useMemo } from 'react';
import { MotionConfig } from 'motion/react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Interests } from './components/Interests';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const sectionIds = useMemo(
    () => [
      'home',
      'about',
      'education',
      'skills',
      'projects',
      'interests',
      'contact',
    ],
    []
  );
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#08090D] dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#8B5CF6] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main id="main-content">
          <Hero theme={theme} onToggleTheme={toggleTheme} />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Interests />
          <Contact />
        </main>

        <Footer theme={theme} onToggleTheme={toggleTheme} />
      </div>
    </MotionConfig>
  );
}
