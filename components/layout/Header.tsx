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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neauvia-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1">
                <span className="text-neauvia-red font-bold text-xl tracking-tight">
                  NEAUVIA
                </span>
                <span className="bg-neauvia-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest">
                  PRO
                </span>
              </div>
            </a>

            {/* Navegación desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neauvia-gray hover:text-neauvia-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-3">
              {/* Carrito */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-neauvia-gray hover:text-neauvia-dark transition-colors"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-neauvia-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {/* Auth */}
              {user ? (
                <div className="hidden md:flex items-center gap-3">
                  <a
                    href="/cuenta"
                    className="flex items-center gap-1.5 text-sm font-medium text-neauvia-dark hover:text-neauvia-red transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="max-w-[120px] truncate">{user.nombre.split(" ")[0]}</span>
                  </a>
                  <button
                    onClick={logout}
                    className="text-xs text-neauvia-gray hover:text-neauvia-red transition-colors"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="hidden md:block btn-neauvia text-sm"
                >
                  Acceder
                </button>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-neauvia-gray"
                aria-label="Menú"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden border-t border-neauvia-border py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-neauvia-dark py-1"
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <>
                  <a href="/cuenta" className="block text-sm font-medium text-neauvia-dark py-1">
                    Mi Cuenta
                  </a>
                  <button onClick={logout} className="block text-sm text-neauvia-gray py-1">
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMobileOpen(false); }}
                  className="btn-neauvia text-sm w-full"
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
