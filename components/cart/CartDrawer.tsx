"use client";

import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, remove, setQuantity, totalItems } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0" side="right">
        <SheetHeader className="px-6 py-4 border-b border-neauvia-border">
          <SheetTitle className="flex items-center gap-2 text-neauvia-dark font-bold">
            <ShoppingBag className="w-5 h-5 text-neauvia-red" />
            Carrito
            {totalItems > 0 && (
              <span className="ml-auto bg-neauvia-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-neauvia-gray p-8">
            <ShoppingBag className="w-12 h-12 opacity-20" />
            <p className="text-sm text-center">Tu carrito está vacío</p>
            <button onClick={onClose} className="btn-neauvia-outline text-sm">
              Ver Catálogo
            </button>
          </div>
        ) : (
          <>
            {/* Lista de items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 py-4 border-b border-neauvia-border last:border-0"
                >
                  {/* Placeholder imagen */}
                  <div className="w-16 h-16 bg-neauvia-offwhite border border-neauvia-border shrink-0 flex items-center justify-center">
                    <span className="text-[9px] text-neauvia-gray/60 text-center px-1 leading-tight">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-neauvia-dark leading-snug">
                      {item.name}
                    </div>
                    <div className="text-xs text-neauvia-gray mt-0.5 capitalize">
                      {item.line}
                    </div>
                    <div className="text-xs text-neauvia-gray mt-1">
                      Precio por confirmar
                    </div>

                    {/* Controles cantidad */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 border border-neauvia-border flex items-center justify-center hover:border-neauvia-red hover:text-neauvia-red transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-semibold text-neauvia-dark w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 border border-neauvia-border flex items-center justify-center hover:border-neauvia-red hover:text-neauvia-red transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => remove(item.id)}
                        className="ml-auto text-neauvia-gray/50 hover:text-neauvia-red transition-colors"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-neauvia-border space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-neauvia-gray">
                  {totalItems} {totalItems === 1 ? "producto" : "productos"}
                </span>
                <span className="font-semibold text-neauvia-dark">
                  Precio a confirmar
                </span>
              </div>
              <button onClick={handleCheckout} className="btn-neauvia w-full text-sm">
                Proceder al Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-xs text-neauvia-gray hover:text-neauvia-dark transition-colors py-1"
              >
                Continuar comprando
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
