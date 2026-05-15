"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
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
      {/* Floating header — detached from viewport edge */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 lg:px-8">
        <header
          className="bg-white/96 backdrop-blur-sm border border-[#E5E7EB]"
          style={{ boxShadow: "0 1px 24px rgba(0,0,0,0.05), 0 0 0 0 transparent" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-[60px]">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <span className="text-neauvia-dark font-bold text-[17px] tracking-[0.06em] uppercase">
                  Neauvia
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neauvia-red border border-neauvia-red/40 px-2 py-[3px]">
                  Pro
                </span>
              </Link>

              {/* Navegación desktop */}
              <nav className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] font-medium tracking-[0.06em] uppercase text-[#6B7280] hover:text-neauvia-dark"
                    style={{ transition: "color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
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
                  className="relative p-1.5 text-[#6B7280] hover:text-neauvia-dark"
                  style={{ transition: "color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
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
                      className="flex items-center gap-2 text-[13px] font-medium text-neauvia-dark hover:text-neauvia-red uppercase tracking-[0.06em]"
                      style={{ transition: "color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      <User className="w-[15px] h-[15px]" />
                      {user.nombre.split(" ")[0]}
                    </a>
                    <button
                      onClick={logout}
                      className="text-[12px] text-[#9CA3AF] hover:text-neauvia-red uppercase tracking-[0.06em]"
                      style={{ transition: "color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
                    >
                      Salir
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="hidden md:inline-flex items-center bg-neauvia-red text-white text-[12px] font-semibold tracking-[0.1em] uppercase px-5 py-2"
                    style={{
                      transition: "background-color 400ms cubic-bezier(0.32, 0.72, 0, 1), transform 200ms cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.38 0.18 18.2)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; }}
                  >
                    Acceder
                  </button>
                )}

                {/* Mobile toggle — morph X */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden p-1 text-[#6B7280] relative w-6 h-6"
                  aria-label="Menú"
                >
                  <span
                    className="absolute left-0 top-[5px] w-full h-[1.5px] bg-current origin-center"
                    style={{
                      transition: "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transform: mobileOpen ? "translateY(5px) rotate(45deg)" : "none",
                    }}
                  />
                  <span
                    className="absolute left-0 top-[11px] w-full h-[1.5px] bg-current"
                    style={{
                      transition: "opacity 200ms, transform 350ms cubic-bezier(0.32, 0.72, 0, 1)",
                      opacity: mobileOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="absolute left-0 bottom-[5px] w-full h-[1.5px] bg-current origin-center"
                    style={{
                      transition: "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)",
                      transform: mobileOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile nav — staggered reveal */}
          <div
            className="md:hidden overflow-hidden"
            style={{
              maxHeight: mobileOpen ? "400px" : "0",
              transition: "max-height 500ms cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <div className="border-t border-[#E5E7EB] px-6 py-5 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[13px] font-medium uppercase tracking-[0.08em] text-neauvia-dark"
                  style={{
                    transition: `opacity 300ms ${i * 50}ms, transform 300ms ${i * 50}ms cubic-bezier(0.32, 0.72, 0, 1)`,
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "none" : "translateY(8px)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              {user ? (
                <>
                  <a
                    href="/cuenta"
                    className="block text-[13px] font-medium text-neauvia-dark uppercase tracking-[0.08em]"
                  >
                    Mi Cuenta
                  </a>
                  <button
                    onClick={logout}
                    className="block text-[12px] text-[#9CA3AF] uppercase tracking-[0.08em]"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMobileOpen(false); }}
                  className="btn-neauvia w-full"
                >
                  Acceder
                </button>
              )}
            </div>
          </div>
        </header>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
