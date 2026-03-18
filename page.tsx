import { FeedCard } from "@/components/feed-card"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Pure white background */}
      <div className="fixed inset-0" style={{ background: "#ffffff" }} />

      {/* Vibrant FACC15 yellow blobs for liquid glass effect */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary large blob - top right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: "10%",
            right: "5%",
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.7) 0%, rgba(250, 204, 21, 0.35) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary blob - bottom left */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            bottom: "5%",
            left: "0%",
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.6) 0%, rgba(250, 204, 21, 0.3) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Small accent blob - center behind card */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.55) 0%, rgba(250, 204, 21, 0.25) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Extra glow accent - top left */}
        <div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            top: "0%",
            left: "10%",
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, #FACC15 0%, #EAB308 100%)",
                boxShadow: "0 0 15px rgba(250, 204, 21, 1), 0 0 30px rgba(250, 204, 21, 0.7), 0 0 45px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.2)",
              }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #FACC15 0%, #EAB308 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.6))",
              }}
            >
              Live Feed
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #404040 50%, #1a1a1a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Brand Accountability
          </h1>
          <p className="text-sm text-neutral-500 mt-2 max-w-xs mx-auto">
            Real experiences. Real accountability.
          </p>
        </div>

        {/* Feed Card */}
        <FeedCard />

        {/* Footer hint */}
        <div className="mt-10 flex items-center gap-2 text-neutral-500 text-xs">
          <span
            className="inline-block w-4 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.8), transparent)",
            }}
          />
          <span>Swipe for more</span>
          <span
            className="inline-block w-4 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.8), transparent)",
            }}
          />
        </div>
      </div>
    </main>
  )
}
