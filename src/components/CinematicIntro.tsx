import { useEffect, useRef } from "react";
import { LifecycleState } from "../hooks/useCinematicLifecycle";
import { useSoundSystem } from "../hooks/useSoundSystem";

export default function CinematicIntro({
  state,
  onLandingComplete,
}: {
  state: LifecycleState;
  onLandingComplete: () => void;
}) {
  const { play } = useSoundSystem();
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const aircraftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state === "AIRPORT_SCENE") {
      play("CAPTAIN_CHIME");
    } else if (state === "FLIGHT") {
      play("ENGINE_HUM_START");

      const animate = (time: number) => {
        if (!startTimeRef.current) startTimeRef.current = time;
        const progress = Math.min((time - startTimeRef.current) / 4000, 1);
        
        // easeInOutCubic
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        if (aircraftRef.current) {
          const x = -80 + (window.innerWidth + 160) * ease;
          aircraftRef.current.style.transform = `translateX(${x}px)`;
        }

        if (progress < 1) {
          requestRef.current = requestAnimationFrame(animate);
        } else {
          play("ENGINE_HUM_STOP");
          play("LANDING_SOUND");
          onLandingComplete();
        }
      };

      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }
  }, [state, play, onLandingComplete]);

  if (state === "READY") return null;

  const isRevealing = state === "REVEAL" || state === "LANDING";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0F] text-amber-500 font-mono transition-opacity duration-800 ${
        isRevealing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute top-1/4 animate-pulse">
        {state === "AIRPORT_SCENE" || state === "FLIGHT"
          ? "Financial System Initializing..."
          : ""}
      </div>
      
      <div className="runway w-full opacity-60"></div>
      
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#0A0A0F]"
        style={{ pointerEvents: "none" }}
      ></div>

      <div
        ref={aircraftRef}
        className="absolute top-[40%] left-0 w-12 h-12 text-white/80"
        style={{ transform: "translateX(-80px)" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
    </div>
  );
}
