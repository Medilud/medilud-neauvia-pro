"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function ClinicalCasesSection() {
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateOnScroll className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-6 h-[1px] bg-neauvia-red" />
            <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
              Comunidad Médica
            </span>
          </div>
          <h2 className="text-4xl font-light text-neauvia-dark tracking-tight">
            Comparte un<br />
            <span className="font-semibold">Caso Clínico</span>
          </h2>
          <p className="text-[#9CA3AF] mt-4 text-sm leading-relaxed max-w-md font-light">
            Contribuye a la comunidad Neauvia México compartiendo tus casos.
            Los mejores serán destacados en nuestra plataforma educativa.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
        <div className="max-w-3xl">
          {submitted ? (
            <div className="border border-neauvia-border bg-white p-10">
              <div className="w-8 h-[1px] bg-neauvia-red mb-6" />
              <h3 className="font-semibold text-neauvia-dark text-lg mb-2">Caso enviado</h3>
              <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
                Nuestro equipo revisará tu caso y te notificará si es publicado en la plataforma educativa.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-neauvia-border p-8 space-y-5"
            >
              {!user && (
                <div className="border border-neauvia-border bg-neauvia-offwhite px-4 py-3 text-[12px] text-[#9CA3AF] uppercase tracking-[0.08em]">
                  Inicia sesión para enviar un caso clínico.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-neauvia-dark uppercase tracking-[0.2em]">
                    Área de Tratamiento *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={!user}
                    placeholder="Ej. Surcos nasogenianos"
                    className="w-full text-sm border border-neauvia-border px-3 py-2.5 bg-[#F8F8F6] focus:outline-none focus:border-neauvia-dark disabled:opacity-40 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-neauvia-dark uppercase tracking-[0.2em]">
                    Producto Utilizado *
                  </label>
                  <select
                    required
                    disabled={!user}
                    className="w-full text-sm border border-neauvia-border px-3 py-2.5 bg-[#F8F8F6] focus:outline-none focus:border-neauvia-dark disabled:opacity-40 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Seleccionar producto</option>
                    <option>Intense</option>
                    <option>Intense Rheology</option>
                    <option>Intense Flux</option>
                    <option>Stimulate</option>
                    <option>Stimulate Man</option>
                    <option>Hydro Deluxe</option>
                    <option>Hydro Deluxe Man</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-neauvia-dark uppercase tracking-[0.2em]">
                  Descripción del Caso *
                </label>
                <textarea
                  required
                  disabled={!user}
                  rows={4}
                  placeholder="Describe el caso clínico, técnica utilizada, dosis y resultados observados..."
                  className="w-full text-sm border border-neauvia-border px-3 py-2.5 bg-[#F8F8F6] resize-none focus:outline-none focus:border-neauvia-dark disabled:opacity-40 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-neauvia-dark uppercase tracking-[0.2em]">
                  Fotos (antes/después)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  disabled={!user}
                  className="w-full text-sm text-[#9CA3AF] file:mr-3 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-semibold file:uppercase file:tracking-[0.1em] file:bg-neauvia-red file:text-white hover:file:opacity-90 disabled:opacity-40"
                />
                <p className="text-[11px] text-[#9CA3AF] font-light">
                  Asegúrate de contar con consentimiento informado del paciente.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!user}
                  className="btn-neauvia disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Enviar Caso Clínico
                </button>
              </div>
            </form>
          )}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
