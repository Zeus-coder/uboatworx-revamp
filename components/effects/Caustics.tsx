export function Caustics() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="animate-caustic-1 absolute -left-1/4 -top-1/3 h-[140%] w-[70%] origin-center bg-gradient-to-br from-transparent via-cyan-glow/[0.07] to-transparent blur-2xl will-change-transform" />
      <div className="animate-caustic-2 absolute -right-1/3 top-0 h-[130%] w-[60%] origin-center bg-gradient-to-bl from-transparent via-gold-400/[0.05] to-transparent blur-2xl will-change-transform" />
      <div className="animate-caustic-3 absolute left-1/4 top-1/4 h-[150%] w-[45%] origin-center bg-gradient-to-b from-transparent via-cyan-soft/[0.05] to-transparent blur-2xl will-change-transform" />
    </div>
  );
}
