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
    <div className="flex flex-wrap gap-0 border-b border-[#E5E7EB]">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`text-[12px] font-semibold uppercase tracking-[0.12em] px-5 py-3 transition-all duration-200 border-b-2 -mb-[2px] ${
            active === f
              ? "border-neauvia-red text-neauvia-dark"
              : "border-transparent text-[#9CA3AF] hover:text-neauvia-dark"
          }`}
        >
          {lineLabels[f]}
        </button>
      ))}
    </div>
  );
}
