"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import type { ProductLine } from "@/lib/products";
import { FilterBar } from "./FilterBar";
import { ProductCard } from "./ProductCard";

type FilterValue = ProductLine | "all";

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.line === activeFilter);

  return (
    <section id="catalogo" className="py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Encabezado editorial */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-6 h-[1px] bg-neauvia-red" />
            <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
              Catálogo Completo
            </span>
          </div>
          <h2 className="text-4xl font-light text-neauvia-dark tracking-tight leading-tight">
            Línea Neauvia<br />
            <span className="font-semibold">México</span>
          </h2>
          <p className="text-[#9CA3AF] mt-4 text-sm leading-relaxed max-w-md font-light">
            Tecnología PEG-HA de última generación. Precios exclusivos disponibles
            para médicos registrados con cédula de especialidad.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-10">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#E5E7EB]">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#9CA3AF] bg-white">
            <p className="text-[13px] uppercase tracking-[0.12em]">
              Sin productos en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
