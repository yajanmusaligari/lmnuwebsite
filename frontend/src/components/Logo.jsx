// LMN — Leading Materials Network.
// Updated logo with larger, more prominent design
export const Logo = ({ className = '', showIcon = true }) => (
  <span data-testid="brand-logo" className={`flex items-center gap-2 ${className}`}>
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lmn%20logo-tlo8hso504hAfssLhkIZ8bNeFlFmjd.png"
      alt="LMN — Leading Materials Network"
      className="h-12 md:h-14 w-auto select-none"
      draggable="false"
    />
  </span>
);

export default Logo;
