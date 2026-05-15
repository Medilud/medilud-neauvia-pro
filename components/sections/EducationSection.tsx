const videos = [
  {
    title: "Introducción a PEG-HA Technology",
    duration: "12 min",
    category: "Fundamentos",
  },
  {
    title: "Protocolo de Aplicación: Intense",
    duration: "18 min",
    category: "Técnica",
  },
  {
    title: "Zona Perioral: Casos Clínicos",
    duration: "24 min",
    category: "Casos Clínicos",
  },
  {
    title: "Bioestimulación con Hydro Deluxe",
    duration: "15 min",
    category: "Técnica",
  },
  {
    title: "Manejo de Complicaciones",
    duration: "30 min",
    category: "Seguridad",
  },
  {
    title: "Anatomía Facial para Rellenos",
    duration: "45 min",
    category: "Anatomía",
  },
];

const catColors: Record<string, string> = {
  Fundamentos: "bg-blue-100 text-blue-700",
  Técnica: "bg-amber-100 text-amber-700",
  "Casos Clínicos": "bg-purple-100 text-purple-700",
  Seguridad: "bg-red-100 text-red-700",
  Anatomía: "bg-teal-100 text-teal-700",
};

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-neauvia-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neauvia-red mb-2">
            Centro Educativo
          </p>
          <h2 className="text-3xl font-bold text-neauvia-dark mb-3">
            Recursos para Médicos
          </h2>
          <p className="text-sm text-neauvia-gray max-w-lg">
            Accede a videotecas, protocolos y casos clínicos de Neauvia International.
            Contenido exclusivo para médicos registrados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-white border border-neauvia-border rounded-lg overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-neauvia-dark flex items-center justify-center relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    catColors[video.category] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {video.category}
                </span>
                <h3 className="text-sm font-semibold text-neauvia-dark mt-2 leading-snug group-hover:text-neauvia-red transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
