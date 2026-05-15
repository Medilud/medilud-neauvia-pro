const videos = [
  { title: "Introducción a PEG-HA Technology", duration: "12 min", category: "Fundamentos" },
  { title: "Protocolo de Aplicación: Intense", duration: "18 min", category: "Técnica" },
  { title: "Zona Perioral: Casos Clínicos", duration: "24 min", category: "Casos Clínicos" },
  { title: "Bioestimulación con Hydro Deluxe", duration: "15 min", category: "Técnica" },
  { title: "Manejo de Complicaciones", duration: "30 min", category: "Seguridad" },
  { title: "Anatomía Facial para Rellenos", duration: "45 min", category: "Anatomía" },
];

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-6 h-[1px] bg-neauvia-red" />
            <span className="text-neauvia-red text-[11px] font-semibold uppercase tracking-[0.25em]">
              Centro Educativo
            </span>
          </div>
          <h2 className="text-4xl font-light text-neauvia-dark tracking-tight">
            Recursos para<br />
            <span className="font-semibold">Médicos</span>
          </h2>
          <p className="text-[#9CA3AF] mt-4 text-sm leading-relaxed max-w-md font-light">
            Videotecas, protocolos y casos clínicos de Neauvia International.
            Contenido exclusivo para médicos registrados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB]">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-white group cursor-pointer hover:bg-[#F8F8F6] transition-colors duration-200"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-[#111010] flex items-center justify-center relative overflow-hidden">
                <button className="w-11 h-11 border border-white/30 flex items-center justify-center group-hover:border-neauvia-red transition-colors duration-200">
                  <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[11px] border-l-white ml-[3px] group-hover:border-l-neauvia-red transition-colors" />
                </button>
                <span className="absolute bottom-3 right-3 text-[10px] text-white/50 uppercase tracking-[0.12em]">
                  {video.duration}
                </span>
              </div>
              {/* Info */}
              <div className="p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neauvia-red mb-2">
                  {video.category}
                </div>
                <h3 className="text-[14px] font-medium text-neauvia-dark leading-snug tracking-wide group-hover:text-neauvia-red transition-colors duration-200">
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
