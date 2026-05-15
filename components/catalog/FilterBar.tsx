"use client";

import type { ProductLine } from "@/lib/products";
import { lineLabels } from "@/lib/products";

type FilterValue = ProductLine | "all";

interface FilterBarProps {
  active: FilterValue;
  onChange: (filter: FilterValue) => void;
}

const filters: FilterValue[] = ["all", "intense", "stimulate", "hydro"];

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-1.5 rounded text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
            active === f
              ? "bg-neauvia-red text-white shadow-sm"
              : "bg-white border border-neauvia-border text-neauvia-gray hover:border-neauvia-red hover:text-neauvia-red"
          }`}
        >
          {lineLabels[f]}
        </button>
      ))}
    </div>
  );
}
