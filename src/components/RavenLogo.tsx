import React from 'react';

interface RavenLogoProps {
  className?: string;
  size?: number | string;
}

export function RavenLogo({ className = "h-12 w-auto", size }: RavenLogoProps) {
  return (
    <svg 
      viewBox="0 0 800 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { height: size, width: 'auto' } : undefined}
      aria-label="Raven Adversary Emblem"
    >
      <defs>
        {/* Vibrant cyan to blue-violet gradient matching uploaded tran.png */}
        <linearGradient id="ravenEmblemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="25%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#38bdf8" />
          <stop offset="80%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <linearGradient id="ravenEmblemGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#00f2fe" />
          <stop offset="75%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* LEFT RAVEN (Facing Right towards center) */}
      <g filter="url(#lightGlow)">
        {/* Main Body Path */}
        <path 
          d="M 175 140 
             C 195 125, 230 115, 265 118
             C 290 120, 315 130, 335 150
             C 320 155, 300 156, 280 156
             C 305 168, 320 185, 325 205
             C 310 205, 298 200, 285 195
             C 298 220, 298 245, 285 270
             C 275 262, 268 255, 265 248
             C 270 280, 265 310, 235 340
             C 210 365, 195 395, 180 435
             C 170 420, 160 405, 145 395
             C 155 375, 170 355, 185 330
             C 165 340, 150 345, 135 345
             C 148 325, 165 305, 182 280
             C 165 285, 150 288, 138 285
             C 158 255, 182 220, 195 180
             C 170 210, 152 235, 135 250
             C 142 225, 158 195, 178 165
             C 165 178, 152 190, 145 195
             C 158 165, 180 135, 202 105
             C 170 112, 140 125, 115 145
             C 140 135, 165 132, 188 135 Z" 
          className="fill-white dark:fill-[var(--bg-primary)] stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Wing Feather Layer */}
        <path 
          d="M 230 205
             C 255 230, 268 270, 262 315
             C 255 350, 238 385, 210 420
             C 222 395, 226 365, 218 335
             C 208 305, 192 280, 170 265
             C 195 255, 212 235, 230 205 Z"
          className="fill-white dark:fill-[var(--bg-primary)] stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Eye dot */}
        <circle 
          cx="240" 
          cy="148" 
          r="7" 
          className="fill-[url(#ravenEmblemGrad)] dark:fill-[url(#ravenEmblemGradDark)]" 
        />

        {/* Legs & Perch Bar */}
        <path 
          d="M 188 425 L 205 465 L 275 465
             M 232 435 L 245 465"
          className="stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* RIGHT RAVEN (Mirrored, Facing Left towards center) */}
      <g transform="translate(800, 0) scale(-1, 1)" filter="url(#lightGlow)">
        {/* Main Body Path */}
        <path 
          d="M 175 140 
             C 195 125, 230 115, 265 118
             C 290 120, 315 130, 335 150
             C 320 155, 300 156, 280 156
             C 305 168, 320 185, 325 205
             C 310 205, 298 200, 285 195
             C 298 220, 298 245, 285 270
             C 275 262, 268 255, 265 248
             C 270 280, 265 310, 235 340
             C 210 365, 195 395, 180 435
             C 170 420, 160 405, 145 395
             C 155 375, 170 355, 185 330
             C 165 340, 150 345, 135 345
             C 148 325, 165 305, 182 280
             C 165 285, 150 288, 138 285
             C 158 255, 182 220, 195 180
             C 170 210, 152 235, 135 250
             C 142 225, 158 195, 178 165
             C 165 178, 152 190, 145 195
             C 158 165, 180 135, 202 105
             C 170 112, 140 125, 115 145
             C 140 135, 165 132, 188 135 Z" 
          className="fill-white dark:fill-[var(--bg-primary)] stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Wing Feather Layer */}
        <path 
          d="M 230 205
             C 255 230, 268 270, 262 315
             C 255 350, 238 385, 210 420
             C 222 395, 226 365, 218 335
             C 208 305, 192 280, 170 265
             C 195 255, 212 235, 230 205 Z"
          className="fill-white dark:fill-[var(--bg-primary)] stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Eye dot */}
        <circle 
          cx="240" 
          cy="148" 
          r="7" 
          className="fill-[url(#ravenEmblemGrad)] dark:fill-[url(#ravenEmblemGradDark)]" 
        />

        {/* Legs & Perch Bar */}
        <path 
          d="M 188 425 L 205 465 L 275 465
             M 232 435 L 245 465"
          className="stroke-[url(#ravenEmblemGrad)] dark:stroke-[url(#ravenEmblemGradDark)]"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
