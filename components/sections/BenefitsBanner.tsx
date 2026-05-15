import { Tag, Award, FileText, Truck, Shield } from "lucide-react";

const benefits = [
  {
    icon: Tag,
    title: "15% OFF",
    desc: "En tu primera compra al registrarte",
  },
  {
    icon: Award,
    title: "3 Niveles de Lealtad",
    desc: "Silver · Gold · Platinum con cashback acumulable",
  },
  {
    icon: FileText,
    title: "Facturación Inmediata",
    desc: "Comprobante fiscal emitido automáticamente",
  },
  {
    icon: Truck,
    title: "Envío DHL",
    desc: "Entrega rastreada a todo México",
  },
  {
    icon: Shield,
    title: "Acceso con Cédula",
    desc: "Portal exclusivo para médicos especialistas",
  },
];

export function BenefitsBanner() {
  return (
    <section className="bg-neauvia-offwhite border-y border-neauvia-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center rounded bg-neauvia-red/10">
                <b.icon className="w-4 h-4 text-neauvia-red" />
              </div>
              <div>
                <div className="text-sm font-bold text-neauvia-dark">{b.title}</div>
                <div className="text-xs text-neauvia-gray mt-0.5 leading-snug">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
