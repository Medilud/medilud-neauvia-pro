"use client";

import { useState } from "react";
import { ShoppingCart, Lock } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { AuthModal } from "@/components/auth/AuthModal";
import { Badge } from "@/components/ui/badge";

const lineColors: Record<string, string> = {
  intense: "bg-blue-50 text-blue-700 border-blue-200",
  stimulate: "bg-amber-50 text-amber-700 border-amber-200",
  hydro: "bg-teal-50 text-teal-700 border-teal-200",
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
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div className="group bg-white border border-neauvia-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
        {/* Imagen */}
        <div className="aspect-square bg-neauvia-offwhite flex items-center justify-center overflow-hidden p-6">
          <div className="w-full h-full flex items-center justify-center">
            {/* Placeholder visual mientras no hay imagen oficial */}
            <div className="flex flex-col items-center gap-2 text-neauvia-gray/40">
              <div className="w-20 h-24 border-2 border-dashed border-neauvia-border rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-neauvia-gray/60 text-center px-1">
                  Imagen<br />próximamente
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4 flex flex-col flex-1">
          <div className="mb-3">
            <Badge
              variant="outline"
              className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${lineColors[product.line]}`}
            >
              {product.line === "hydro" ? "Hydro Deluxe" : product.line}
            </Badge>
            <h3 className="font-bold text-neauvia-dark text-base leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-neauvia-gray mt-1.5 leading-relaxed">
              {product.desc}
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-neauvia-border">
            {user ? (
              <div className="flex items-center justify-between">
                <span className="text-xs text-neauvia-gray">Precio al registrarse</span>
                <button
                  onClick={handleAdd}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded transition-all duration-200 ${
                    added
                      ? "bg-green-500 text-white"
                      : "bg-neauvia-red text-white hover:brightness-90"
                  }`}
                >
                  <ShoppingCart className="w-3 h-3" />
                  {added ? "Agregado" : "Agregar"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-neauvia-gray border border-neauvia-border rounded py-2 hover:border-neauvia-red hover:text-neauvia-red transition-colors"
              >
                <Lock className="w-3 h-3" />
                Precio disponible al registrarse
              </button>
            )}
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
