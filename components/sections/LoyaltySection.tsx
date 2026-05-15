const tiers = [
  {
    name: "Silver",
    cashback: "3%",
    color: "border-slate-300",
    badge: "bg-slate-100 text-slate-700",
    description: "Acceso inmediato al registrarte.",
    perks: [
      "3% cashback en cada compra",
      "Acceso a precios exclusivos",
      "Envío DHL rastreado",
      "Soporte dedicado",
    ],
    current: false,
  },
  {
    name: "Gold",
    cashback: "4%",
    color: "border-amber-400",
    badge: "bg-amber-100 text-amber-700",
    description: "Al acumular 5,000 puntos de compra.",
    perks: [
      "4% cashback en cada compra",
      "Todo lo de Silver +",
      "Prioridad en eventos",
      "Muestras exclusivas",
    ],
    current: true,
    featured: true,
  },
  {
    name: "Platinum",
    cashback: "5%",
    color: "border-indigo-400",
    badge: "bg-indigo-100 text-indigo-700",
    description: "Al acumular 15,000 puntos de compra.",
    perks: [
      "5% cashback en cada compra",
      "Todo lo de Gold +",
      "Acceso anticipado a nuevos productos",
      "Asesor Neauvia personal",
    ],
    current: false,
  },
];

export function LoyaltySection() {
  return (
    <section id="lealtad" className="py-20 bg-neauvia-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-neauvia-red mb-2">
            Programa de Lealtad
          </p>
          <h2 className="text-3xl font-bold text-neauvia-dark mb-3">
            Recompensas por tu fidelidad
          </h2>
          <p className="text-neauvia-gray text-sm max-w-md mx-auto">
            Cada compra suma puntos. Sube de nivel y obtén mayor cashback en
            todos tus pedidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-xl border-2 ${tier.color} p-6 flex flex-col ${
                tier.featured ? "shadow-lg scale-[1.02]" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${tier.badge}`}
                >
                  {tier.name}
                </span>
                {tier.featured && (
                  <span className="text-xs font-semibold text-neauvia-red">
                    Popular
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-neauvia-dark">
                  {tier.cashback}
                </span>
                <span className="text-sm text-neauvia-gray ml-1">cashback</span>
              </div>

              <p className="text-xs text-neauvia-gray mb-5">{tier.description}</p>

              <ul className="space-y-2 flex-1">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-sm text-neauvia-dark"
                  >
                    <span className="text-neauvia-red mt-0.5 shrink-0">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
