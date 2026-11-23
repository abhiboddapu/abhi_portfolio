import { useState } from 'react';
import { ExternalLink, Github, Layers, Maximize2 } from 'lucide-react';
import type { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/70 dark:border-[#272A35] dark:bg-[#171A23] dark:shadow-none">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-[#272A35] dark:bg-[#08090D]">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? project.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 text-center dark:from-[#11131A] dark:via-[#08090D] dark:to-[#171A23]">
            <Layers className="h-8 w-8 text-[#8B5CF6]" aria-hidden="true" />
            <p className="mt-3 font-display text-sm font-medium text-slate-600 dark:text-[#A1A1AA]">
              {project.name}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`Inspect details for ${project.name}`}
          className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/85 text-slate-900 backdrop-blur-sm transition-colors hover:border-[#8B5CF6] hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] dark:border-[#272A35] dark:bg-[#08090D]/80 dark:text-white dark:hover:text-[#A78BFA] cursor-pointer"
        >
          <Maximize2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-xs font-medium text-sky-600 dark:text-[#38BDF8]">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A1A1AA]">
            {project.description}
          </p>

          {project.techStack.length > 0 && (
            <p className="mt-4 text-xs text-slate-500 dark:text-[#A1A1AA]">
              {project.techStack.join(' · ')}
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 dark:border-[#272A35]">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-sm font-medium text-slate-900 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] dark:text-white dark:hover:text-[#A78BFA] rounded-sm cursor-pointer whitespace-nowrap shrink-0"
          >
            View Details
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-[#A1A1AA] dark:hover:text-white whitespace-nowrap shrink-0"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition-colors hover:text-slate-900 dark:text-[#38BDF8] dark:hover:text-white whitespace-nowrap shrink-0"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
