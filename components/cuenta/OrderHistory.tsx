import { Package } from "lucide-react";

const placeholderOrders = [
  {
    folio: "NEA-2024-001",
    fecha: "15 Ene 2024",
    productos: ["Intense x2", "Hydro Deluxe x1"],
    estado: "Entregado",
  },
  {
    folio: "NEA-2024-002",
    fecha: "28 Feb 2024",
    productos: ["Stimulate Man x3"],
    estado: "En camino",
  },
];

export function OrderHistory() {
  if (placeholderOrders.length === 0) {
    return (
      <div className="text-center py-12 text-[#9CA3AF]">
        <Package className="w-10 h-10 mx-auto mb-3 opacity-30" />
        <p className="text-sm">Aún no tienes pedidos registrados.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {placeholderOrders.map((order) => (
        <div
          key={order.folio}
          className="border border-neauvia-border p-4 hover:border-neauvia-dark"
          style={{ transition: "border-color 300ms cubic-bezier(0.32, 0.72, 0, 1)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold text-neauvia-red uppercase tracking-[0.15em] mb-1">
                {order.folio}
              </div>
              <div className="text-sm font-medium text-neauvia-dark">
                {order.productos.join(" · ")}
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">{order.fecha}</div>
            </div>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-1 shrink-0 ${
                order.estado === "Entregado"
                  ? "bg-neauvia-offwhite text-neauvia-dark border border-neauvia-border"
                  : "bg-neauvia-dark text-white"
              }`}
            >
              {order.estado}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
