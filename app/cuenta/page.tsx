"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoyaltyCard } from "@/components/cuenta/LoyaltyCard";
import { OrderHistory } from "@/components/cuenta/OrderHistory";
import { AuthModal } from "@/components/auth/AuthModal";
import { Package, User, Award, LogOut } from "lucide-react";

type Section = "pedidos" | "perfil" | "lealtad";

const sidebarItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "pedidos", label: "Mis Pedidos", icon: Package },
  { id: "perfil", label: "Mi Perfil", icon: User },
  { id: "lealtad", label: "Programa de Lealtad", icon: Award },
];

export default function CuentaPage() {
  const { user, logout } = useAuth();
  const [section, setSection] = useState<Section>("pedidos");
  const [authOpen, setAuthOpen] = useState(false);

  if (!user) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-neauvia-offwhite pt-16">
          <div className="text-center p-8 max-w-sm">
            <div className="w-16 h-16 border border-neauvia-border bg-neauvia-offwhite flex items-center justify-center mx-auto mb-6">
              <User className="w-7 h-7 text-neauvia-red" />
            </div>
            <h2 className="text-xl font-bold text-neauvia-dark mb-2">
              Acceso Requerido
            </h2>
            <p className="text-sm text-neauvia-gray mb-6">
              Inicia sesión para acceder a tu cuenta y gestionar tus pedidos.
            </p>
            <button
              onClick={() => setAuthOpen(true)}
              className="btn-neauvia w-full"
            >
              Iniciar Sesión
            </button>
          </div>
        </main>
        <Footer />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-neauvia-offwhite pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <h1 className="text-3xl font-light text-neauvia-dark mb-10 tracking-tight">Mi Cuenta</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full md:w-56 shrink-0">
              <nav className="bg-white border border-neauvia-border overflow-hidden">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-b border-neauvia-border last:border-0 ${
                      section === item.id
                        ? "bg-neauvia-red text-white"
                        : "text-neauvia-dark hover:bg-neauvia-offwhite"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-neauvia-gray hover:text-neauvia-red transition-colors"
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  Cerrar Sesión
                </button>
              </nav>
            </aside>

            {/* Contenido */}
            <div className="flex-1 bg-white border border-neauvia-border p-6">
              {section === "pedidos" && (
                <div>
                  <h2 className="text-lg font-bold text-neauvia-dark mb-5">
                    Mis Pedidos
                  </h2>
                  <OrderHistory />
                </div>
              )}

              {section === "perfil" && (
                <div>
                  <h2 className="text-lg font-bold text-neauvia-dark mb-5">
                    Mi Perfil
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    {[
                      { label: "Nombre", value: user.nombre },
                      { label: "Email", value: user.email },
                      { label: "Especialidad", value: user.especialidad },
                      { label: "Cédula", value: user.cedula },
                      { label: "Clínica", value: user.clinica },
                      { label: "Teléfono", value: user.telefono },
                      { label: "RFC", value: user.rfc || "No proporcionado" },
                      { label: "Dirección de entrega", value: user.direccion },
                    ].map((field) => (
                      <div key={field.label} className="border-b border-neauvia-border pb-3">
                        <div className="text-xs text-neauvia-gray uppercase tracking-wide mb-0.5">
                          {field.label}
                        </div>
                        <div className="text-neauvia-dark font-medium">{field.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section === "lealtad" && (
                <div>
                  <h2 className="text-lg font-bold text-neauvia-dark mb-5">
                    Programa de Lealtad
                  </h2>
                  <div className="max-w-sm mb-8">
                    <LoyaltyCard user={user} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { tier: "Silver", cashback: "3%", threshold: "Acceso inmediato" },
                      { tier: "Gold", cashback: "4%", threshold: "5,000 pts acumulados" },
                      { tier: "Platinum", cashback: "5%", threshold: "15,000 pts acumulados" },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className={`border p-4 text-sm ${
                          user.loyaltyLevel === t.tier
                            ? "border-neauvia-red bg-[#FDF5F7]"
                            : "border-neauvia-border"
                        }`}
                      >
                        <div className="font-bold text-neauvia-dark mb-1">{t.tier}</div>
                        <div className="text-2xl font-bold text-neauvia-red mb-1">
                          {t.cashback}
                        </div>
                        <div className="text-xs text-neauvia-gray">{t.threshold}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
