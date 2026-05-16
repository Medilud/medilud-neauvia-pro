import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const tiers = [
  {
    name: "Silver",
    cashback: "3%",
    description: "Acceso inmediato al registrarte.",
    perks: [
      "3% cashback en cada compra",
      "Precios exclusivos B2B",
      "Envío DHL con rastreo",
      "Soporte dedicado Medilud",
    ],
    featured: false,
  },
  {
    name: "Gold",
    cashback: "4%",
    description: "A los 5,000 puntos acumulados.",
    perks: [
      "4% cashback en cada compra",
      "Todo lo de Silver",
      "Prioridad en eventos Neauvia",
      "Muestras exclusivas",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    cashback: "5%",
    description: "A los 15,000 puntos acumulados.",
    perks: [
      "5% cashback en cada compra",
      "Todo lo de Gold",
      "Acceso anticipado a nuevos productos",
      "Asesor Neauvia personal",
    ],
    featured: false,
  },
];

export function LoyaltySection() {
  return (
    <section id="lealtad" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Encabezado */}
        <AnimateOnScroll className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-6 h-[1px] bg-neauvia-red" />
            <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
              Programa de Lealtad
            </span>
          </div>
          <h2 className="text-4xl font-light text-neauvia-dark tracking-tight">
            Recompensas por<br />
            <span className="font-semibold">tu fidelidad</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 flex flex-col ${
                tier.featured ? "bg-neauvia-dark" : "bg-white"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-1 ${
                    tier.featured ? "text-neauvia-red" : "text-[#9CA3AF]"
                  }`}
                >
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-light tracking-tight ${
                      tier.featured ? "text-white" : "text-neauvia-dark"
                    }`}
                  >
                    {tier.cashback}
                  </span>
                  <span className={`text-sm ${tier.featured ? "text-white/40" : "text-[#9CA3AF]"}`}>
                    cashback
                  </span>
                </div>
                <p
                  className={`text-[12px] mt-2 font-light ${
                    tier.featured ? "text-white/50" : "text-[#9CA3AF]"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="h-[1px] mb-6" style={{ background: tier.featured ? "rgba(255,255,255,0.1)" : "#E5E7EB" }} />

              <ul className="space-y-3 flex-1">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className={`flex items-start gap-3 text-[13px] font-light ${
                      tier.featured ? "text-white/80" : "text-neauvia-dark"
                    }`}
                  >
                    <span className="text-neauvia-red mt-0.5 shrink-0 text-xs">—</span>
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
