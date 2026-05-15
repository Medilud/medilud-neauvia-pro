export function Footer() {
  return (
    <footer className="bg-neauvia-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white font-bold text-lg tracking-tight">NEAUVIA</span>
              <span className="bg-neauvia-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest">
                PRO
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Portal exclusivo B2B para médicos especialistas en México.
              Distribución oficial de Neauvia® por Medilud.
            </p>
            <p className="text-xs mt-3 text-white/40">
              Solo para uso profesional médico. Cedula de especialidad requerida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
              Portal
            </h4>
            <ul className="space-y-2 text-sm">
              {["Catálogo", "Programa de Lealtad", "Eventos", "Centro Educativo"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
              Medilud
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Distribuidor Oficial Neauvia México</li>
              <li>
                <a href="mailto:contacto@medilud.mx" className="hover:text-white transition-colors">
                  contacto@medilud.mx
                </a>
              </li>
              <li>WhatsApp Business</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Medilud · Distribuidor Oficial Neauvia México. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
