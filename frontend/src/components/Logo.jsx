// INFRA STORES wordmark + structural "girder/block" mark.
export const Logo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  const mainBlock = isLight ? '#FFFFFF' : '#0A0A0A';
  const infraText = isLight ? 'text-white' : 'text-[#0A0A0A]';

  return (
    <span data-testid="brand-logo" className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-9 md:h-9 shrink-0" aria-hidden="true">
        <rect x="4" y="5" width="11" height="30" fill={mainBlock} />
        <rect x="20" y="5" width="16" height="12" fill="#FF4500" />
        <rect x="20" y="23" width="16" height="12" fill="#FF4500" />
      </svg>
      <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight leading-none">
        <span className={infraText}>INFRA</span>
        <span className="text-[#FF4500]"> STORES</span>
      </span>
    </span>
  );
};

export default Logo;
