"use client";

import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AuthModal } from "@/components/auth/AuthModal";

const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Lealtad", href: "#lealtad" },
  { label: "Eventos", href: "#eventos" },
  { label: "Educación", href: "#educacion" },
];

export function Header() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo — tipografía refinada */}
            <a href="/" className="flex items-center gap-3 shrink-0">
              <span className="text-neauvia-dark font-bold text-[17px] tracking-[0.06em] uppercase">
                Neauvia
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neauvia-red border border-neauvia-red/40 px-2 py-[3px]">
                Pro
              </span>
            </a>

            {/* Navegación desktop */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium tracking-[0.06em] uppercase text-[#6B7280] hover:text-neauvia-dark transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-5">
              {/* Carrito */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-1.5 text-[#6B7280] hover:text-neauvia-dark transition-colors"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-neauvia-red text-white text-[9px] font-bold w-[15px] h-[15px] flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {/* Auth */}
              {user ? (
                <div className="hidden md:flex items-center gap-5">
                  <a
                    href="/cuenta"
                    className="flex items-center gap-2 text-[13px] font-medium text-neauvia-dark hover:text-neauvia-red transition-colors uppercase tracking-[0.06em]"
                  >
                    <User className="w-[15px] h-[15px]" />
                    {user.nombre.split(" ")[0]}
                  </a>
                  <button
                    onClick={logout}
                    className="text-[12px] text-[#9CA3AF] hover:text-neauvia-red transition-colors uppercase tracking-[0.06em]"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="hidden md:inline-flex items-center bg-neauvia-red text-white text-[12px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 hover:bg-[#a50f27] transition-colors duration-200"
                >
                  Acceder
                </button>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1 text-[#6B7280]"
                aria-label="Menú"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden border-t border-[#E5E7EB] py-5 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[13px] font-medium uppercase tracking-[0.08em] text-neauvia-dark"
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <>
                  <a href="/cuenta" className="block text-[13px] font-medium text-neauvia-dark uppercase tracking-[0.08em]">
                    Mi Cuenta
                  </a>
                  <button onClick={logout} className="block text-[12px] text-[#9CA3AF] uppercase tracking-[0.08em]">
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMobileOpen(false); }}
                  className="bg-neauvia-red text-white text-[12px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 w-full hover:bg-[#a50f27] transition-colors"
                >
                  Acceder
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
