"use client";

import { useState } from "react";
import { Plus, Lock } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { AuthModal } from "@/components/auth/AuthModal";

const lineLabel: Record<string, string> = {
  intense: "Intense",
  stimulate: "Stimulate",
  hydro: "Hydro Deluxe",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!user) {
      setAuthOpen(true);
      return;
    }
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <>
      <article
        className="group bg-white border border-[#E5E7EB] hover:border-neauvia-red/30 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex flex-col"
        style={{ transition: "transform 400ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 400ms cubic-bezier(0.32, 0.72, 0, 1), border-color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
      >
        {/* Imagen — área limpia para fotografía de producto */}
        <div className="aspect-[4/3] bg-[#F8F8F6] flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-12 h-16 border border-[#D1D5DB]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF]">
              Imagen próximamente
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-4 flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neauvia-red mb-2">
              {lineLabel[product.line] ?? product.line}
            </div>
            <h3 className="font-semibold text-neauvia-dark text-[15px] leading-snug tracking-wide">
              {product.name}
            </h3>
            <p className="text-[12px] text-[#9CA3AF] mt-2 leading-relaxed font-light">
              {product.desc}
            </p>
          </div>

          {/* Acción */}
          <div className="pt-4 border-t border-[#E5E7EB]">
            {user ? (
              <button
                onClick={handleAdd}
                className={`w-full flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] py-2.5 active:scale-[0.98] ${
                  added
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-neauvia-red text-white"
                }`}
                style={{ transition: "background-color 300ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                onMouseEnter={(e) => { if (!added) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.38 0.18 18.2)"; }}
                onMouseLeave={(e) => { if (!added) (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; }}
              >
                <Plus className="w-3 h-3" />
                {added ? "Agregado" : "Agregar al Pedido"}
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] py-2.5 text-[#9CA3AF] border border-[#E5E7EB] hover:border-neauvia-red hover:text-neauvia-red active:scale-[0.98]"
                style={{ transition: "border-color 300ms cubic-bezier(0.32, 0.72, 0, 1), color 300ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1)" }}
              >
                <Lock className="w-3 h-3" />
                Precio disponible al registrarse
              </button>
            )}
          </div>
        </div>
      </article>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
