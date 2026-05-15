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
      <article className="group bg-white border border-[#E5E7EB] hover:border-neauvia-red/30 transition-colors duration-300 flex flex-col">
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
                className={`w-full flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] py-2.5 transition-all duration-200 ${
                  added
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-neauvia-red text-white hover:bg-[#a50f27]"
                }`}
              >
                <Plus className="w-3 h-3" />
                {added ? "Agregado" : "Agregar al Pedido"}
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] py-2.5 text-[#9CA3AF] border border-[#E5E7EB] hover:border-neauvia-red hover:text-neauvia-red transition-colors duration-200"
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
