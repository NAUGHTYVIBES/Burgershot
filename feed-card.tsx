"use client"

import { useState } from "react"
import { Shield, Clock, Users, ChevronUp } from "lucide-react"

interface FeedCardProps {
  userName?: string
  userHandle?: string
  brandName?: string
  content?: string
  hoursUnresolved?: number
  meTooCount?: number
  isVerified?: boolean
}

export function FeedCard({
  userName = "Sarah Mitchell",
  userHandle = "@sarahm_tech",
  brandName = "Global Tech Co.",
  content = "Purchased their premium subscription 3 weeks ago. App crashes constantly, and customer service has been completely unresponsive. I've sent 4 emails and received nothing but automated responses. This is unacceptable for a $299/year service.",
  hoursUnresolved = 48,
  meTooCount = 127,
  isVerified = true,
}: FeedCardProps) {
  const [localMeTooCount, setLocalMeTooCount] = useState(meTooCount)
  const [hasMeTooed, setHasMeTooed] = useState(false)

  const handleMeToo = () => {
    if (!hasMeTooed) {
      setLocalMeTooCount((prev) => prev + 1)
      setHasMeTooed(true)
    } else {
      setLocalMeTooCount((prev) => prev - 1)
      setHasMeTooed(false)
    }
  }

  // Vibrant amber yellow #FACC15
  const vibrantYellow = "#FACC15"
  const yellowGlow = "0 0 15px rgba(250, 204, 21, 1), 0 0 30px rgba(250, 204, 21, 0.7), 0 0 45px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.2)"

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Liquid Glass Card */}
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: `1.5px solid ${vibrantYellow}`,
          boxShadow: `
            0 0 40px rgba(250, 204, 21, 0.4),
            0 0 80px rgba(250, 204, 21, 0.2),
            0 0 120px rgba(250, 204, 21, 0.1),
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
          `,
        }}
      >
        {/* Subtle top reflection for glass effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 30%)",
          }}
        />

        <div className="relative p-6">
          {/* Brand Tag - Pill Badge */}
          <div className="flex justify-center mb-5">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase"
              style={{
                background: `linear-gradient(135deg, ${vibrantYellow} 0%, #EAB308 100%)`,
                border: `1px solid rgba(250, 204, 21, 0.8)`,
                color: "#000000",
                boxShadow: yellowGlow,
              }}
            >
              <span className="mr-1.5 text-[10px]">●</span>
              {brandName}
            </span>
          </div>

          {/* User Header */}
          <div className="flex items-center gap-4 mb-5">
            {/* Avatar with Verified Shield */}
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold"
                style={{
                  background: "linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  color: "#404040",
                }}
              >
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              {isVerified && (
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${vibrantYellow} 0%, #EAB308 100%)`,
                    boxShadow: yellowGlow,
                  }}
                >
                  <Shield className="w-3 h-3 text-black" fill="currentColor" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-800 text-sm">
                  {userName}
                </span>
                {isVerified && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${vibrantYellow} 0%, #EAB308 100%)`,
                      color: "#000000",
                      boxShadow: "0 0 12px rgba(250, 204, 21, 0.6)",
                    }}
                  >
                    VERIFIED OWNER
                  </span>
                )}
              </div>
              <span className="text-xs text-neutral-500">{userHandle}</span>
            </div>
          </div>

          {/* Content */}
          <p className="text-sm leading-relaxed text-neutral-600 mb-6 font-normal">
            {content}
          </p>

          {/* Resolution Clock Widget */}
          <div
            className="rounded-2xl p-4 mb-5"
            style={{
              background: "rgba(250, 204, 21, 0.12)",
              border: "1px solid rgba(250, 204, 21, 0.6)",
              boxShadow: `
                0 0 30px rgba(250, 204, 21, 0.15),
                inset 0 0 40px rgba(250, 204, 21, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${vibrantYellow} 0%, #EAB308 100%)`,
                    boxShadow: yellowGlow,
                  }}
                >
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-widest font-bold"
                    style={{
                      color: "#000000",
                    }}
                  >
                    Resolution Clock
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-3xl tracking-tight"
                  style={{
                    color: "#000000",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {hoursUnresolved}h
                </div>
                <p
                  className="text-[10px] uppercase tracking-wider font-bold"
                  style={{
                    color: "#000000",
                  }}
                >
                  Unresolved
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(0, 0, 0, 0.08)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((hoursUnresolved / 72) * 100, 100)}%`,
                    background: `linear-gradient(90deg, ${vibrantYellow} 0%, #EAB308 100%)`,
                    boxShadow: "0 0 20px rgba(250, 204, 21, 1), 0 0 40px rgba(250, 204, 21, 0.6)",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[9px] text-neutral-500 font-medium">0h</span>
                <span className="text-[9px] font-bold text-red-500">Critical: 72h</span>
              </div>
            </div>
          </div>

          {/* Me Too Button */}
          <button
            onClick={handleMeToo}
            className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{
              background: hasMeTooed
                ? `linear-gradient(135deg, ${vibrantYellow} 0%, #EAB308 100%)`
                : "rgba(250, 204, 21, 0.2)",
              border: `1.5px solid ${vibrantYellow}`,
              color: "#000000",
              boxShadow: hasMeTooed
                ? yellowGlow
                : "0 0 25px rgba(250, 204, 21, 0.2)",
            }}
          >
            <Users
              className={`w-4 h-4 transition-transform duration-300 ${hasMeTooed ? "scale-110" : "group-hover:scale-110"}`}
            />
            <span>Me Too</span>
            <span
              className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{
                background: hasMeTooed ? "rgba(0, 0, 0, 0.15)" : "rgba(250, 204, 21, 0.4)",
                color: "#000000",
              }}
            >
              <ChevronUp className="w-3 h-3 mr-0.5" />
              {localMeTooCount.toLocaleString()}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
