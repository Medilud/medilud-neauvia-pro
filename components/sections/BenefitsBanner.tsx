import { Tag, Award, FileText, Truck, Shield } from "lucide-react";

const benefits = [
  { icon: Tag, title: "15% OFF", desc: "En tu primera compra" },
  { icon: Award, title: "3 Niveles de Lealtad", desc: "Silver · Gold · Platinum" },
  { icon: FileText, title: "Facturación Inmediata", desc: "CFDI automático" },
  { icon: Truck, title: "Envío DHL", desc: "Rastreado a todo México" },
  { icon: Shield, title: "Solo Médicos", desc: "Cédula de especialidad requerida" },
];

export function BenefitsBanner() {
  return (
    <section className="bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex flex-col items-center text-center gap-3 py-8 px-4 ${
                i < benefits.length - 1 ? "border-r border-[#E5E7EB]" : ""
              }`}
            >
              <b.icon className="w-4 h-4 text-neauvia-red" strokeWidth={1.5} />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-neauvia-dark">
                  {b.title}
                </div>
                <div className="text-[11px] text-[#9CA3AF] mt-1 tracking-wide">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
