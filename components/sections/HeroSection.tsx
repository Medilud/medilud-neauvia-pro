"use client";

import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/lib/auth-context";

export function HeroSection() {
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-[#111010] overflow-hidden">
        {/* Acento rojo lateral — elemento editorial, no tech */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neauvia-red" />

        <div className="relative max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-28 w-full">
          <div className="max-w-3xl">
            {/* Label editorial */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-[1px] bg-neauvia-red" />
              <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
                Exclusivo para Médicos Especialistas
              </span>
            </div>

            {/* Headline editorial — peso mixto */}
            <h1 className="text-white mb-8 leading-[1.05]">
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

            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-lg font-light">
              Accede a toda la línea de fillers Neauvia México, programa de lealtad
              por volumen, recursos educativos y soporte especializado.
            </p>

            {/* CTAs — estilo refinado */}
            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center bg-neauvia-red text-white text-sm font-semibold px-8 py-3.5 hover:bg-[#a50f27] transition-colors duration-300"
                >
                  Ver Catálogo
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="inline-flex items-center justify-center bg-neauvia-red text-white text-sm font-semibold px-8 py-3.5 hover:bg-[#a50f27] transition-colors duration-300"
                  >
                    Registrarme
                  </button>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center border border-white/25 text-white/80 text-sm font-medium px-8 py-3.5 hover:border-white/50 hover:text-white transition-colors duration-300"
                  >
                    Ver Catálogo
                  </a>
                </>
              )}
            </div>

            {/* Stats — tipografía editorial, sin cards */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-4">
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
