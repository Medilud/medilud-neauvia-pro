export function Footer() {
  return (
    <footer className="bg-[#111010] text-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-bold text-[17px] tracking-[0.06em] uppercase">
                Neauvia
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neauvia-red border border-neauvia-red/40 px-2 py-[3px]">
                Pro
              </span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs font-light">
              Portal exclusivo B2B para médicos especialistas en México.
              Distribución oficial de Neauvia® por Medilud.
            </p>
            <p className="text-[11px] mt-4 text-white/25 uppercase tracking-[0.1em]">
              Solo para uso profesional médico
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Portal
            </h4>
            <ul className="space-y-3 text-[13px] font-light">
              {["Catálogo", "Programa de Lealtad", "Eventos", "Centro Educativo"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Medilud
            </h4>
            <ul className="space-y-3 text-[13px] font-light">
              <li>Distribuidor Oficial Neauvia México</li>
              <li>
                <a href="mailto:contacto@medilud.mx" className="hover:text-white transition-colors duration-200">
                  contacto@medilud.mx
                </a>
              </li>
              <li>WhatsApp Business</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[11px] text-white/25 uppercase tracking-[0.08em]">
            © {new Date().getFullYear()} Medilud · Distribuidor Oficial Neauvia México
          </p>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.08em]">
            <a href="#" className="hover:text-white transition-colors duration-200">Términos</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
