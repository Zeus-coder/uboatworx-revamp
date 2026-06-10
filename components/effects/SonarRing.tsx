import { cn } from "@/lib/utils";

type SonarRingProps = {
  className?: string;
};

export function SonarRing({ className }: SonarRingProps) {
  return (
    <div
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <radialGradient id="sonar-sweep" cx="100%" cy="0%" r="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </radialGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="rgba(94,234,212,0.14)"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="none"
          stroke="rgba(94,234,212,0.12)"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="rgba(94,234,212,0.1)"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="26"
          fill="none"
          stroke="rgba(94,234,212,0.1)"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="2"
          x2="100"
          y2="198"
          stroke="rgba(94,234,212,0.06)"
          strokeWidth="0.5"
        />
        <line
          x1="2"
          y1="100"
          x2="198"
          y2="100"
          stroke="rgba(94,234,212,0.06)"
          strokeWidth="0.5"
        />
        <g className="origin-center animate-sonar-spin">
          <path
            d="M100 100 L100 2 A98 98 0 0 1 169.296 30.704 Z"
            fill="url(#sonar-sweep)"
          />
        </g>
        <circle
          cx="100"
          cy="100"
          r="3"
          fill="#22d3ee"
          className="origin-center animate-pulse-glow"
        />
      </svg>
    </div>
  );
}
