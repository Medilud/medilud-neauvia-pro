import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const events = [
  {
    date: "Jun 2025",
    title: "Masterclass: Técnicas Avanzadas con PEG-HA",
    desc: "Workshop práctico con expertos internacionales en el uso de fillers de última generación.",
    tag: "Workshop",
    location: "Ciudad de México",
  },
  {
    date: "Jul 2025",
    title: "Neauvia Academy: Anatomía Facial y Fillers",
    desc: "Curso teórico-práctico avalado por Neauvia International para médicos certificados.",
    tag: "Curso",
    location: "Guadalajara",
  },
  {
    date: "Ago 2025",
    title: "Webinar: Bioestimulación con Hydro Deluxe",
    desc: "Sesión en línea sobre protocolos de hidratación y bioestimulación dérmica.",
    tag: "Webinar",
    location: "En línea",
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-24 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateOnScroll className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-6 h-[1px] bg-neauvia-red" />
            <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
              Agenda
            </span>
          </div>
          <h2 className="text-4xl font-light text-neauvia-dark tracking-tight">
            Eventos y<br />
            <span className="font-semibold">Formación</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB]">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-8 group hover:bg-neauvia-dark transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF] group-hover:text-white/40 transition-colors">
                  {event.date}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neauvia-red border border-neauvia-red/30 px-2 py-1">
                  {event.tag}
                </span>
              </div>
              <h3 className="font-semibold text-neauvia-dark text-[15px] leading-snug tracking-wide mb-3 group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <p className="text-[12px] text-[#9CA3AF] leading-relaxed font-light mb-6 group-hover:text-white/50 transition-colors">
                {event.desc}
              </p>
              <div className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.12em] group-hover:text-white/30 transition-colors">
                {event.location}
              </div>
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
