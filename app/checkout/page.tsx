"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthModal } from "@/components/auth/AuthModal";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

function generateFolio(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 90000) + 10000;
  return `NEA-${year}-${num}`;
}

/* Hook preparado para integración Mercado Pago (P2) */
function initMercadoPago(_folio: string, _amount: number): void {
  // TODO: integrar Mercado Pago SDK
  // mp.checkout({ preference: { id: preferenceId } });
}

export default function CheckoutPage() {
  const { items, totalItems, clear } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [authOpen, setAuthOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [folio, setFolio] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!user) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-neauvia-offwhite pt-16">
          <div className="text-center p-8 max-w-sm">
            <h2 className="text-xl font-bold text-neauvia-dark mb-2">
              Inicia sesión para continuar
            </h2>
            <p className="text-sm text-neauvia-gray mb-6">
              Necesitas una cuenta de médico para realizar pedidos.
            </p>
            <button onClick={() => setAuthOpen(true)} className="btn-neauvia w-full">
              Iniciar Sesión
            </button>
          </div>
        </main>
        <Footer />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    );
  }

  if (items.length === 0 && !folio) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-neauvia-offwhite pt-16">
          <div className="text-center p-8 max-w-sm">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-neauvia-gray/30" />
            <h2 className="text-xl font-bold text-neauvia-dark mb-2">
              Tu carrito está vacío
            </h2>
            <button onClick={() => router.push("/#catalogo")} className="btn-neauvia mt-4">
              Ver Catálogo
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  /* Pantalla de confirmación */
  if (folio) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center bg-neauvia-offwhite pt-16">
          <div className="text-center p-8 max-w-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-neauvia-dark mb-2">
              ¡Pedido Recibido!
            </h2>
            <p className="text-sm text-neauvia-gray mb-1">
              Tu número de folio es:
            </p>
            <div className="text-xl font-bold text-neauvia-red mb-4">{folio}</div>
            <p className="text-xs text-neauvia-gray leading-relaxed mb-6">
              Nuestro equipo se pondrá en contacto contigo para confirmar disponibilidad
              y precios. El envío se realiza vía DHL con guía de rastreo.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/cuenta")}
                className="btn-neauvia-outline flex-1 text-sm"
              >
                Mis Pedidos
              </button>
              <button
                onClick={() => router.push("/")}
                className="btn-neauvia flex-1 text-sm"
              >
                Inicio
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const newFolio = generateFolio();
    initMercadoPago(newFolio, 0);

    await new Promise((r) => setTimeout(r, 800)); // simula procesamiento

    clear();
    setFolio(newFolio);
    setIsProcessing(false);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-neauvia-offwhite pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-2xl font-bold text-neauvia-dark mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Resumen del pedido */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white border border-neauvia-border rounded-lg p-5">
                  <h2 className="font-bold text-neauvia-dark mb-4">
                    Resumen del Pedido
                  </h2>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center py-2 border-b border-neauvia-border last:border-0"
                      >
                        <div>
                          <div className="text-sm font-medium text-neauvia-dark">
                            {item.name}
                          </div>
                          <div className="text-xs text-neauvia-gray">
                            {item.quantity} {item.quantity === 1 ? "unidad" : "unidades"}
                          </div>
                        </div>
                        <div className="text-xs text-neauvia-gray">
                          Precio a confirmar
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-neauvia-border flex justify-between text-sm">
                    <span className="text-neauvia-gray">
                      Total ({totalItems} {totalItems === 1 ? "producto" : "productos"})
                    </span>
                    <span className="font-bold text-neauvia-dark">
                      A confirmar por el equipo Medilud
                    </span>
                  </div>
                </div>

                {/* Notas */}
                <div className="bg-white border border-neauvia-border rounded-lg p-5">
                  <h2 className="font-bold text-neauvia-dark mb-3">
                    Notas del Pedido (opcional)
                  </h2>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Instrucciones especiales, urgencia, preferencia de entrega..."
                    className="w-full text-sm border border-neauvia-border rounded px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-neauvia-red"
                  />
                </div>
              </div>

              {/* Panel derecho */}
              <div className="space-y-4">
                <div className="bg-white border border-neauvia-border rounded-lg p-5">
                  <h2 className="font-bold text-neauvia-dark mb-4">
                    Datos de Entrega
                  </h2>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-xs text-neauvia-gray">Médico</span>
                      <p className="font-medium text-neauvia-dark">{user.nombre}</p>
                    </div>
                    <div>
                      <span className="text-xs text-neauvia-gray">Clínica</span>
                      <p className="font-medium text-neauvia-dark">{user.clinica}</p>
                    </div>
                    <div>
                      <span className="text-xs text-neauvia-gray">Dirección</span>
                      <p className="font-medium text-neauvia-dark">{user.direccion}</p>
                    </div>
                    <div>
                      <span className="text-xs text-neauvia-gray">Teléfono</span>
                      <p className="font-medium text-neauvia-dark">{user.telefono}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neauvia-offwhite border border-neauvia-border rounded-lg p-4 text-xs text-neauvia-gray">
                  <p className="font-semibold text-neauvia-dark mb-1">¿Cómo funciona?</p>
                  <p className="leading-relaxed">
                    Al confirmar, nuestro equipo validará tu pedido y se pondrá en contacto
                    para formalizar la cotización y proceder con el pago vía Mercado Pago.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-neauvia w-full disabled:opacity-60"
                >
                  {isProcessing ? "Procesando..." : "Confirmar Pedido"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
