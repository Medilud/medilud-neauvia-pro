const events = [
  {
    date: "Junio 2025",
    title: "Masterclass: Técnicas Avanzadas con PEG-HA",
    desc: "Workshop práctico con expertos internacionales en el uso de fillers de última generación.",
    tag: "Workshop",
    location: "Ciudad de México",
  },
  {
    date: "Julio 2025",
    title: "Neauvia Academy: Anatomía Facial y Fillers",
    desc: "Curso teórico-práctico avalado por Neauvia International para médicos certificados.",
    tag: "Curso",
    location: "Guadalajara",
  },
  {
    date: "Agosto 2025",
    title: "Webinar: Bioestimulación con Hydro Deluxe",
    desc: "Sesión en línea sobre protocolos de hidratación y bioestimulación dérmica.",
    tag: "Webinar",
    location: "En línea",
  },
];

const tagColors: Record<string, string> = {
  Workshop: "bg-neauvia-red/10 text-neauvia-red",
  Curso: "bg-blue-100 text-blue-700",
  Webinar: "bg-teal-100 text-teal-700",
};

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neauvia-red mb-2">
            Agenda
          </p>
          <h2 className="text-3xl font-bold text-neauvia-dark">
            Eventos y Formación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="border border-neauvia-border rounded-lg p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-neauvia-gray font-medium">
                  {event.date}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    tagColors[event.tag] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {event.tag}
                </span>
              </div>
              <h3 className="font-bold text-neauvia-dark text-base leading-snug mb-2 group-hover:text-neauvia-red transition-colors">
                {event.title}
              </h3>
              <p className="text-xs text-neauvia-gray leading-relaxed mb-4">
                {event.desc}
              </p>
              <div className="flex items-center gap-1 text-xs text-neauvia-gray">
                <span>📍</span>
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
