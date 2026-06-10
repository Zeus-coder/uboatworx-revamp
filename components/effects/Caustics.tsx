export function Caustics() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="animate-caustic-1 absolute -left-1/4 -top-1/3 h-[140%] w-[70%] origin-center bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.10),_transparent_70%)] will-change-transform" />
      <div className="animate-caustic-2 absolute -right-1/3 top-0 h-[130%] w-[60%] origin-center bg-[radial-gradient(ellipse_at_center,_rgba(232,196,104,0.08),_transparent_70%)] will-change-transform" />
      <div className="animate-caustic-3 absolute left-1/4 top-1/4 h-[150%] w-[45%] origin-center bg-[radial-gradient(ellipse_at_center,_rgba(94,234,212,0.08),_transparent_70%)] will-change-transform" />
    </div>
  );
}
