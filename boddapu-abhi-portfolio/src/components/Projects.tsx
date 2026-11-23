import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Maximize2,
  X,
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import {
  projectsData,
  projectsSectionConfig,
  type ProjectItem,
} from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [previewImgError, setPreviewImgError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const featuredProject = projectsData.length === 1 ? projectsData[0] : null;

  return (
    <section
      id="projects"
      className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-[#08090D] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          kicker="Selected Work"
          title={projectsSectionConfig.title}
          subtitle={projectsSectionConfig.subtitle}
        />

        {featuredProject ? (
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-200 hover:border-[#8B5CF6]/60 dark:border-[#272A35] dark:bg-[#171A23] dark:shadow-none"
          >
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              {/* Featured Project Visual */}
              <div className="relative min-h-[280px] bg-sky-50 dark:bg-[#0D1322] lg:col-span-6 lg:min-h-[380px]">
                {featuredProject.image && !previewImgError ? (
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.imageAlt ?? featuredProject.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setPreviewImgError(true)}
                    className="h-full w-full object-cover object-[72%_45%]"
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-[#08090D] via-[#11131A] to-[#171A23] p-8">
                    <Layers className="h-10 w-10 text-[#38BDF8]" aria-hidden="true" />
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  aria-label={`Inspect details for ${featuredProject.name}`}
                  className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/70 bg-slate-900/70 text-white backdrop-blur-sm transition-colors hover:border-[#8B5CF6] hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
                >
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Featured Project Content */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-[#38BDF8]">
                    {featuredProject.category}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {featuredProject.name}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-base">
                    {featuredProject.description}
                  </p>

                  {featuredProject.techStack.length > 0 && (
                    <div className="mt-6 border-t border-slate-200 pt-5 dark:border-[#272A35]">
                      <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                        Technologies &amp; Focus
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-slate-900 dark:text-white">
                        {featuredProject.techStack.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 dark:border-[#272A35]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#8B5CF6] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7C3AED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Project Details</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-[#8B5CF6]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:border-[#272A35] dark:bg-[#11131A] dark:text-white whitespace-nowrap shrink-0"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-sky-600 transition-colors hover:border-[#38BDF8] dark:border-[#272A35] dark:bg-[#11131A] dark:text-[#38BDF8] whitespace-nowrap shrink-0"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ) : projectsData.length > 1 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#272A35] dark:bg-[#171A23] dark:shadow-none"
          >
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <div className="relative min-h-[240px] bg-[#08090D] lg:col-span-6 lg:min-h-[340px]">
                {!previewImgError ? (
                  <img
                    src={projectsSectionConfig.previewImage}
                    alt={projectsSectionConfig.previewAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setPreviewImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[240px] flex-col items-center justify-center bg-gradient-to-br from-[#08090D] via-[#11131A] to-[#171A23] p-8">
                    <Layers className="h-10 w-10 text-[#38BDF8]" aria-hidden="true" />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-6">
                <p className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-[#38BDF8]">
                  In Development
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {projectsSectionConfig.emptyMessage}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-base">
                  {projectsSectionConfig.emptySubtext}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 dark:border-[#272A35]">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#8B5CF6] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7C3AED] whitespace-nowrap shrink-0"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>Follow on GitHub</span>
                  </a>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-[#8B5CF6]/70 dark:border-[#272A35] dark:bg-[#11131A] dark:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Discuss an Idea</span>
                    <ArrowRight className="h-4 w-4 text-sky-600 dark:text-[#38BDF8]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Lightbox Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-md dark:bg-[#08090D]/85"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-[#272A35] dark:bg-[#171A23] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-sky-600 dark:text-[#38BDF8]">
                    {selectedProject.category}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-1 font-display text-2xl font-semibold text-slate-900 dark:text-white"
                  >
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:border-[#272A35] dark:bg-[#11131A] dark:text-[#A1A1AA] dark:hover:text-white cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA] sm:text-base">
                {selectedProject.details}
              </p>

              {selectedProject.techStack.length > 0 && (
                <div className="mt-6 border-t border-slate-200 pt-4 dark:border-[#272A35]">
                  <p className="text-xs font-medium text-slate-500 dark:text-[#A1A1AA]">
                    Technology Stack
                  </p>
                  <p className="mt-1 text-sm text-slate-900 dark:text-white">
                    {selectedProject.techStack.join(' · ')}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5 dark:border-[#272A35]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 hover:border-[#8B5CF6] dark:border-[#272A35] dark:bg-[#11131A] dark:text-white"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>View GitHub Profile</span>
                  </a>
                )}

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white hover:bg-[#7C3AED]"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
