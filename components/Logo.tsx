interface LogoProps {
  variant?: 'nav' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'nav', className }: LogoProps) {
  const gradId = `lg-${variant}`;
  const filterId = `gf-${variant}`;

  if (variant === 'footer') {
    return (
      <svg className={className ?? 'ft-svg'} viewBox="0 0 38 44" fill="none">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>
        <path d="M19 2L32 7L36 19L32 31L19 37L6 31L2 19L6 7Z" fill="none" stroke={`url(#${gradId})`} strokeWidth="1.5" />
        <line x1="19" y1="2" x2="19" y2="37" stroke={`url(#${gradId})`} strokeWidth=".9" opacity=".55" />
        <line x1="4" y1="19" x2="34" y2="19" stroke={`url(#${gradId})`} strokeWidth=".7" opacity=".35" />
        <circle cx="19" cy="19" r="2.5" fill="#00d4ff" />
        <path d="M19 37L19 42Q19 44 22 44L27 44" fill="none" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={className ?? 'brand-svg'} viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Octagonal leaf hull */}
      <path
        d="M19 2L32 7L36 19L32 31L19 37L6 31L2 19L6 7Z"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1.6"
        filter={`url(#${filterId})`}
        strokeDasharray="126"
        strokeDashoffset="126"
      >
        <animate attributeName="stroke-dashoffset" from="126" to="0" dur="1.4s" fill="freeze" begin="0.2s" />
      </path>
      {/* Vertical main vein */}
      <line x1="19" y1="2" x2="19" y2="37" stroke={`url(#${gradId})`} strokeWidth="1" opacity=".6" strokeDasharray="35" strokeDashoffset="35">
        <animate attributeName="stroke-dashoffset" from="35" to="0" dur=".7s" fill="freeze" begin="1.2s" />
      </line>
      {/* Horizontal circuit traces */}
      <line x1="8" y1="13" x2="30" y2="13" stroke={`url(#${gradId})`} strokeWidth=".75" opacity=".38" strokeDasharray="22" strokeDashoffset="22">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur=".5s" fill="freeze" begin="1.5s" />
      </line>
      <line x1="4" y1="19" x2="34" y2="19" stroke={`url(#${gradId})`} strokeWidth=".75" opacity=".38" strokeDasharray="30" strokeDashoffset="30">
        <animate attributeName="stroke-dashoffset" from="30" to="0" dur=".5s" fill="freeze" begin="1.6s" />
      </line>
      <line x1="8" y1="25" x2="30" y2="25" stroke={`url(#${gradId})`} strokeWidth=".75" opacity=".38" strokeDasharray="22" strokeDashoffset="22">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur=".5s" fill="freeze" begin="1.7s" />
      </line>
      {/* Solder joints */}
      <circle cx="19" cy="13" r="2.2" fill="#00ff88" filter={`url(#${filterId})`} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur=".3s" fill="freeze" begin="1.9s" />
      </circle>
      <circle cx="19" cy="19" r="2.8" fill="#00d4ff" filter={`url(#${filterId})`} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur=".3s" fill="freeze" begin="2s" />
      </circle>
      <circle cx="19" cy="25" r="2.2" fill="#00ff88" filter={`url(#${filterId})`} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur=".3s" fill="freeze" begin="2.1s" />
      </circle>
      <circle cx="8" cy="19" r="1.4" fill="#00d4ff" opacity="0">
        <animate attributeName="opacity" from="0" to=".65" dur=".3s" fill="freeze" begin="2.1s" />
      </circle>
      <circle cx="30" cy="19" r="1.4" fill="#00d4ff" opacity="0">
        <animate attributeName="opacity" from="0" to=".65" dur=".3s" fill="freeze" begin="2.1s" />
      </circle>
      {/* Q-tail stem */}
      <path
        d="M19 37L19 42Q19 44 22 44L27 44"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${filterId})`}
        strokeDasharray="22"
        strokeDashoffset="22"
      >
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur=".5s" fill="freeze" begin="1.75s" />
      </path>
      {/* Electron particle */}
      <circle r="2.2" fill="white" filter={`url(#${filterId})`} opacity=".92">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          begin="2.3s"
          calcMode="spline"
          keySplines=".4 0 .6 1;.4 0 .6 1"
          path="M19,2 L19,37 L19,2"
        />
      </circle>
    </svg>
  );
}
