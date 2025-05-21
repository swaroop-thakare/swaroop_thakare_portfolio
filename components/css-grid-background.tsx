export default function CssGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Main grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />

      {/* Smaller grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "8px 8px",
          backgroundPosition: "center center",
        }}
      />

      {/* Animated overlay for pulsing effect */}
      <div className="absolute inset-0 grid-pulse-animation" />

      {/* Glowing dots */}
      <div className="absolute inset-0 grid-dots" />
    </div>
  )
}
