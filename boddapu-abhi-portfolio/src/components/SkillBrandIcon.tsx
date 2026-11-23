import {
  BrainCircuit,
  Camera,
  Code2,
  GitBranch,
  MessageSquareText,
  PenSquare,
  Sparkles,
  Triangle,
} from 'lucide-react';
import type { SkillBadgeIcon } from '../data/skills';

export function SkillBrandIcon({ icon }: { icon: SkillBadgeIcon }) {
  switch (icon) {
    case 'photoshop':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#001E36] text-[8px] font-bold text-[#31A8FF] ring-1 ring-[#31A8FF]/50">
          Ps
        </span>
      );

    case 'premiere':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#2D004B] text-[8px] font-bold text-[#C084FC] ring-1 ring-[#A855F7]/50">
          Pr
        </span>
      );

    case 'content':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#7C3AED] text-white">
          <PenSquare className="h-2.5 w-2.5" aria-hidden="true" />
        </span>
      );

    case 'camera':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#EA580C] text-white">
          <Camera className="h-2.5 w-2.5" aria-hidden="true" />
        </span>
      );

    case 'ai':
      return (
        <BrainCircuit className="h-4 w-4 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
          <path
            fill="#3776AB"
            d="M11.9 2c-3.2 0-3 1.4-3 1.4v1.5h3.1v.5H7.6S5.5 5.1 5.5 8.5s1.8 3.3 1.8 3.3h1.1v-1.6s-.1-1.8 1.8-1.8h3.1s1.7 0 1.7-1.7V3.8S15.2 2 11.9 2Zm-1.7 1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Z"
          />
          <path
            fill="#FFD43B"
            d="M12.1 22c3.2 0 3-1.4 3-1.4v-1.5H12v-.5h4.4s2.1.3 2.1-3.1-1.8-3.3-1.8-3.3h-1.1v1.6s.1 1.8-1.8 1.8h-3.1s-1.7 0-1.7 1.7v2.9s-.2 1.8 3.1 1.8Zm1.7-1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"
          />
        </svg>
      );

    case 'java':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#EA580C] text-[8px] font-bold text-white">
          JV
        </span>
      );

    case 'genai':
      return (
        <Sparkles className="h-4 w-4 shrink-0 text-[#38BDF8]" aria-hidden="true" />
      );

    case 'communication':
      return (
        <MessageSquareText
          className="h-4 w-4 shrink-0 text-[#A78BFA]"
          aria-hidden="true"
        />
      );

    case 'vscode':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#0284C7] text-white">
          <Code2 className="h-2.5 w-2.5" aria-hidden="true" />
        </span>
      );

    case 'git':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-[#F97316] text-white">
          <GitBranch className="h-2.5 w-2.5" aria-hidden="true" />
        </span>
      );

    case 'vercel':
      return (
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          <Triangle className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
        </span>
      );
  }
}
