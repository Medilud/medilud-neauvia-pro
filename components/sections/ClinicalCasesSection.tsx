"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

export function ClinicalCasesSection() {
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neauvia-red mb-2">
            Comunidad Médica
          </p>
          <h2 className="text-3xl font-bold text-neauvia-dark mb-3">
            Comparte un Caso Clínico
          </h2>
          <p className="text-sm text-neauvia-gray max-w-md mx-auto">
            Contribuye a la comunidad Neauvia México compartiendo tus casos.
            Los mejores serán destacados en nuestra plataforma educativa.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-bold text-green-800 mb-1">¡Caso enviado!</h3>
            <p className="text-sm text-green-700">
              Nuestro equipo revisará tu caso y te notificará si es publicado.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-neauvia-offwhite border border-neauvia-border rounded-xl p-6 space-y-4"
          >
            {!user && (
              <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
                Debes iniciar sesión para enviar un caso clínico.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neauvia-dark uppercase tracking-wide">
                  Área de Tratamiento *
                </label>
                <input
                  type="text"
                  required
                  disabled={!user}
                  placeholder="Ej. Surcos nasogenianos"
                  className="w-full text-sm border border-neauvia-border rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-neauvia-red disabled:opacity-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neauvia-dark uppercase tracking-wide">
                  Producto Utilizado *
                </label>
                <select
                  required
                  disabled={!user}
                  className="w-full text-sm border border-neauvia-border rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-neauvia-red disabled:opacity-50"
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

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neauvia-dark uppercase tracking-wide">
                Descripción del Caso *
              </label>
              <textarea
                required
                disabled={!user}
                rows={4}
                placeholder="Describe el caso clínico, técnica utilizada, dosis y resultados observados..."
                className="w-full text-sm border border-neauvia-border rounded px-3 py-2 bg-white resize-none focus:outline-none focus:ring-1 focus:ring-neauvia-red disabled:opacity-50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neauvia-dark uppercase tracking-wide">
                Fotos (antes/después)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                disabled={!user}
                className="w-full text-sm text-neauvia-gray file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-neauvia-red file:text-white hover:file:brightness-90 disabled:opacity-50"
              />
              <p className="text-xs text-neauvia-gray">
                Asegúrate de contar con consentimiento informado del paciente.
              </p>
            </div>

            <button
              type="submit"
              disabled={!user}
              className="btn-neauvia disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar Caso Clínico
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
