"use client";

import { useState, useEffect, useRef } from "react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/lib/auth-context";

export function HeroSection() {
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Hero enters on mount with a slight delay
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[92vh] flex items-center bg-[#111010] overflow-hidden"
      >
        {/* Acento rojo lateral estructural */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neauvia-red" />

        {/* Depth layer: large decorative wordmark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="text-[clamp(8rem,18vw,18rem)] font-bold uppercase leading-none tracking-tighter"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.035)",
              userSelect: "none",
            }}
          >
            NEAUVIA
          </span>
        </div>

        {/* Subtle radial depth — no glow, just field depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(196,18,48,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-32 w-full">
          <div className="max-w-3xl">
            {/* Label editorial — enters first */}
            <div
              className="flex items-center gap-4 mb-12"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(1rem)",
                transition: "opacity 0.8s cubic-bezier(0.32, 0.72, 0, 1), transform 0.8s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <div className="w-8 h-[1px] bg-neauvia-red" />
              <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
                Exclusivo para Médicos Especialistas
              </span>
            </div>

            {/* Headline editorial — peso mixto, staggered */}
            <h1
              className="text-white mb-8 leading-[1.05]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(1.5rem)",
                transition: "opacity 0.9s 100ms cubic-bezier(0.32, 0.72, 0, 1), transform 0.9s 100ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                El catálogo Neauvia
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neauvia-red">
                diseñado para
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                tu práctica.
              </span>
            </h1>

            <p
              className="text-white/50 text-base leading-relaxed mb-12 max-w-lg font-light"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(1rem)",
                transition: "opacity 0.8s 200ms cubic-bezier(0.32, 0.72, 0, 1), transform 0.8s 200ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              Accede a toda la línea de fillers Neauvia México, programa de lealtad
              por volumen, recursos educativos y soporte especializado.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(1rem)",
                transition: "opacity 0.8s 320ms cubic-bezier(0.32, 0.72, 0, 1), transform 0.8s 320ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              {user ? (
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center bg-neauvia-red text-white text-sm font-semibold px-8 py-3.5"
                  style={{ transition: "background-color 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.38 0.18 18.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = ""; }}
                >
                  Ver Catálogo
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="inline-flex items-center justify-center bg-neauvia-red text-white text-sm font-semibold px-8 py-3.5"
                    style={{ transition: "background-color 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.38 0.18 18.2)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; }}
                  >
                    Registrarme
                  </button>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center border border-white/25 text-white/80 text-sm font-medium px-8 py-3.5"
                    style={{ transition: "border-color 300ms cubic-bezier(0.32, 0.72, 0, 1), color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "";
                      (e.currentTarget as HTMLAnchorElement).style.color = "";
                    }}
                  >
                    Ver Catálogo
                  </a>
                </>
              )}
            </div>

            {/* Stats */}
            <div
              className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-4"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.8s 480ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              {[
                { value: "7", label: "Productos Neauvia" },
                { value: "3", label: "Niveles de Lealtad" },
                { value: "15%", label: "OFF Primera Compra" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-light text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/35 uppercase tracking-[0.15em] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} defaultTab="register" />
    </>
  );
}
