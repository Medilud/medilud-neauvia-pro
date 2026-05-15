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
    <section id="catalogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neauvia-red mb-2">
            Catálogo Completo
          </p>
          <h2 className="text-3xl font-bold text-neauvia-dark mb-4">
            Línea Neauvia México
          </h2>
          <p className="text-neauvia-gray max-w-xl text-sm leading-relaxed">
            Tecnología PEG-HA de última generación. Todos los productos están disponibles
            exclusivamente para médicos registrados con cédula de especialidad.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-neauvia-gray">
            <p className="text-sm">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
