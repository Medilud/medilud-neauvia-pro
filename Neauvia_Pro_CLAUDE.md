# Neauvia Pro — CLAUDE.md
> Plataforma B2B de pedidos digitales para medicos especialistas en Mexico.
> Proyecto: medilud-neauvia-pro | Cuenta GitHub: Medilud

---

## CONTEXTO DEL PROYECTO

Neauvia Pro es un portal exclusivo para medicos que permite:
- Consultar y ordenar el catalogo completo de fillers Neauvia Mexico
- Acceder a un programa de lealtad por volumen de compra (Silver / Gold / Platinum)
- Ver recursos educativos, eventos y registrar casos clinicos
- Gestionar su cuenta, historial de pedidos y facturacion

**Audiencia:** Medicos especialistas en Mexico (cedula de especialidad requerida)
**Fase actual:** V1 — MVP funcional para piloto con 10-50 clinicas
**Integracion Odoo:** Fase 2 (no incluir en V1)

---

## IDENTIDAD VISUAL — NEAUVIA OFICIAL

Aplicar con precision. El sitio debe verse como una extension de neauvia.com.

### Paleta
| Token | Hex | Uso |
|---|---|---|
| Neauvia Red | #C41230 | Color primario, botones principales, acentos, hover states |
| White | #FFFFFF | Fondo principal, superficies de contenido |
| Off-white | #F8F8F6 | Fondos de secciones alternadas |
| Dark | #1A1A1A | Texto principal, headers |
| Gray | #6B7280 | Texto secundario, labels, descripciones |
| Light border | #E5E7EB | Separadores, bordes de tarjetas |

### Tipografia
- **Display / Headlines:** Montserrat 700 (disponible Google Fonts)
- **Body:** Montserrat 400
- **Labels / Tags:** Montserrat 600, letter-spacing: 0.1em, uppercase
- NO usar fuentes serif. NO usar Cormorant Garamond. NO usar gold.

### Estetica
- Minimal, limpio, clinico, premium europeo
- Mucho espacio en blanco
- Imagenes: fondo blanco o neutro, producto centrado
- Sin elementos decorativos excesivos
- Bordes sutiles, sombras ligeras
- Botones: fondo rojo Neauvia, texto blanco, sin border-radius excesivo (4px max)

---

## ARQUITECTURA TECNICA

### Stack V1
- **Frontend:** HTML5 + CSS3 + Vanilla JS (single-page, sin framework)
- **Backend:** Vercel Serverless Functions (Node.js) para: registro, ordenes, pagos
- **Deploy:** Vercel — subdominio a configurar (ej: pro.neauvia.com.mx)
- **Repo:** GitHub > Medilud > medilud-neauvia-pro

### Estructura de archivos
```
medilud-neauvia-pro/
├── index.html           # App principal SPA
├── styles/
│   └── main.css         # Estilos globales con variables CSS
├── scripts/
│   ├── app.js           # Logica principal, navegacion, estado
│   ├── catalog.js       # Catalogo, filtros, carrito
│   ├── auth.js          # Registro, login, sesion
│   └── checkout.js      # Carrito, pago, confirmacion
├── api/                 # Vercel Serverless Functions
│   ├── register.js      # Registro de medico + validacion cedula
│   ├── order.js         # Crear orden de compra
│   └── payment.js       # Integracion Mercado Pago
├── data/
│   └── products.js      # Catalogo de productos (placeholders V1)
├── vercel.json          # Configuracion de deploy
└── CLAUDE.md            # Este archivo
```

---

## SECCIONES DEL SITIO (mantener arquitectura del HTML de referencia)

1. **Header fijo** — Logo Neauvia, navegacion, boton Acceder, carrito
2. **Hero** — Fondo oscuro (Neauvia Red o dark), headline bold, CTA doble
3. **Banner de beneficios** — 5 bullets: 15% OFF primera compra, 3 niveles lealtad, facturacion, envio DHL, cedula requerida
4. **Catalogo** — Grid de productos con filtros: Todos | Intense | Stimulate | Hydro Deluxe
5. **Programa de Lealtad** — 3 tiers: Silver 3% | Gold 4% | Platinum 5%
6. **Eventos** — Cards con fecha, titulo, descripcion, tag
7. **Centro Educativo** — Grid de videos (placeholder thumbnails)
8. **Casos Clinicos** — Formulario de submission
9. **Mi Cuenta** — Sidebar + historial de pedidos + nivel de lealtad
10. **Footer** — Logo, links, legal
11. **Panel de Carrito** — Slide-in lateral con resumen + checkout
12. **Modal Login/Registro** — Tabs: Acceder | Registrarse

---

## FUNCIONALIDAD V1 — PRIORIDAD DE IMPLEMENTACION

### P1 — Debe funcionar en el piloto
- [ ] Registro de medico: nombre, cedula especialidad, clinica, email, password, datos facturacion, datos entrega
- [ ] Login / sesion persistente (localStorage)
- [ ] Catalogo con filtros por linea de producto
- [ ] Agregar al carrito, modificar cantidades, ver resumen
- [ ] Checkout con integracion Mercado Pago (modo sandbox primero)
- [ ] Pagina de confirmacion de orden con numero de folio
- [ ] Vista Mi Cuenta con historial de ordenes

### P2 — Segunda iteracion
- [ ] Validacion de cedula profesional via repositorio publico
- [ ] Calculo automatico de descuento por nivel de lealtad
- [ ] Newsletter signup con cupon 15% OFF
- [ ] Notificacion por email al hacer un pedido
- [ ] Panel de administracion basico (ver ordenes recibidas)

### Fuera de scope V1
- Integracion Odoo
- Facturacion automatica SAT
- Sistema de avatares de doctor
- Videos personalizados por clinica

---

## PRODUCTOS — PLACEHOLDERS V1

Usar estos datos reales de producto con imagenes placeholder hasta que Medilud provea imagenes oficiales.

```javascript
const products = [
  // STIMULATE
  { id: 'stimulate', name: 'Stimulate', line: 'stimulate',
    desc: 'Filler PEG-HA enriquecido con CaHA para restauracion de volumen en tejido blando.',
    price: 0, unit: 'jeringa', img: 'placeholder-stimulate.jpg' },
  { id: 'stimulate-man', name: 'Stimulate Man', line: 'stimulate',
    desc: 'Formulacion especifica para anatomia masculina.',
    price: 0, unit: 'jeringa', img: 'placeholder-stimulate-man.jpg' },

  // INTENSE
  { id: 'intense', name: 'Intense', line: 'intense',
    desc: 'Filler PEG-HA para restauracion de volumen en subcutis.',
    price: 0, unit: 'jeringa', img: 'placeholder-intense.jpg' },
  { id: 'intense-rheology', name: 'Intense Rheology', line: 'intense',
    desc: 'Filler PEG-HA para correccion intradermal.',
    price: 0, unit: 'jeringa', img: 'placeholder-intense-rheology.jpg' },
  { id: 'intense-flux', name: 'Intense Flux', line: 'intense',
    desc: 'Filler PEG-HA intradermal de alta fluidez.',
    price: 0, unit: 'jeringa', img: 'placeholder-intense-flux.jpg' },

  // HYDRO DELUXE
  { id: 'hydro-deluxe', name: 'Hydro Deluxe', line: 'hydro',
    desc: 'Hidrogel lineal no crosslinked enriquecido con CaHA para bioestimulacion.',
    price: 0, unit: 'jeringa', img: 'placeholder-hydro-deluxe.jpg' },
  { id: 'hydro-deluxe-man', name: 'Hydro Deluxe Man', line: 'hydro',
    desc: 'Formulacion especifica para piel masculina.',
    price: 0, unit: 'jeringa', img: 'placeholder-hydro-deluxe-man.jpg' },
];
```

**Nota:** Precios en 0 hasta que Medilud confirme lista de precios oficial. Mostrar "Precio disponible al registrarse" en el catalogo publico.

---

## INTEGRACION MERCADO PAGO

- Usar SDK oficial de Mercado Pago para Mexico
- Arrancar en modo sandbox para pruebas del piloto
- Credenciales: Medilud provee Public Key y Access Token
- Flujo: carrito > checkout > redirect a Mercado Pago > regreso a pagina de confirmacion
- Documentacion: https://www.mercadopago.com.mx/developers/es/docs

---

## VALIDACION DE CEDULA (P2 — no bloquea V1)

- Base publica de cedulas: https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action
- En V1: campo de texto libre + checkbox de declaracion bajo protesta
- En P2: validacion automatica via scraping o API del repositorio SEP

---

## DEPLOY EN VERCEL

```json
// vercel.json
{
  "version": 2,
  "builds": [
    { "src": "api/*.js", "use": "@vercel/node" },
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Pasos de deploy:
1. `vercel login` (cuenta de Medilud)
2. `vercel` en la raiz del repo
3. Asignar dominio: Settings > Domains > agregar subdominio

---

## REGLAS DE DESARROLLO

- Cero dependencias de npm en frontend — vanilla JS unicamente
- CSS con variables (`:root`) para facilitar ajustes de paleta
- Comentarios en codigo en espanol
- Nombres de variables y funciones en ingles
- Mobile-first responsive
- Sin animaciones complejas — transiciones sutiles unicamente (0.3s ease)
- Accesibilidad basica: alt en imagenes, labels en formularios, contraste AA
