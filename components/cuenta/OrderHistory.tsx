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
      <div className="text-center py-12 text-neauvia-gray">
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
          className="border border-neauvia-border rounded-lg p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-neauvia-red mb-0.5">
                {order.folio}
              </div>
              <div className="text-sm font-medium text-neauvia-dark">
                {order.productos.join(" · ")}
              </div>
              <div className="text-xs text-neauvia-gray mt-1">{order.fecha}</div>
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded shrink-0 ${
                order.estado === "Entregado"
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
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
