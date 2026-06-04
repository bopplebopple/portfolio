// Pure-CSS ambient background layers (no JS, render on the server).
export default function Backdrop() {
  return (
    <>
      <div className="orb orb-a" aria-hidden />
      <div className="orb orb-b" aria-hidden />
      <div className="orb orb-c" aria-hidden />
      <div className="grid-fade" aria-hidden />
      <div className="grain" aria-hidden />
    </>
  );
}
