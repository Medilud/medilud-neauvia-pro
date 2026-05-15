"use client";

import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/lib/auth-context";

export function HeroSection() {
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center bg-neauvia-dark overflow-hidden">
        {/* Fondo con degradado sutil */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, #C41230 0%, transparent 60%)",
          }}
        />

        {/* Patrón de líneas sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-neauvia-red/20 border border-neauvia-red/40 rounded px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 bg-neauvia-red rounded-full" />
              <span className="text-neauvia-red text-xs font-semibold uppercase tracking-widest">
                Exclusivo para Médicos Especialistas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              El catálogo Neauvia
              <br />
              <span className="text-neauvia-red">diseñado para</span>
              <br />
              tu práctica médica.
            </h1>

            <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
              Accede a toda la línea de fillers Neauvia México, programa de lealtad exclusivo,
              recursos educativos y soporte especializado. Solo para médicos con cédula de
              especialidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <a href="#catalogo" className="btn-neauvia text-center">
                  Ver Catálogo
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="btn-neauvia"
                  >
                    Registrarme Ahora
                  </button>
                  <a
                    href="#catalogo"
                    className="btn-neauvia-outline border-white/40 text-white hover:bg-white hover:text-neauvia-dark text-center"
                  >
                    Ver Catálogo
                  </a>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { value: "7+", label: "Productos Neauvia" },
                { value: "3", label: "Niveles de Lealtad" },
                { value: "15%", label: "OFF Primera Compra" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
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
