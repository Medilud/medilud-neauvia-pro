export type ProductLine = "intense" | "stimulate" | "hydro";

export interface Product {
  id: string;
  name: string;
  line: ProductLine;
  desc: string;
  price: number;
  unit: string;
  img: string;
}

export const products: Product[] = [
  // ── Intense ────────────────────────────────────────────────────
  {
    id: "intense",
    name: "Intense",
    line: "intense",
    desc: "Filler PEG-HA para restauración de volumen en subcutis. Alta cohesividad y duración prolongada.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense.png",
  },
  {
    id: "intense-rheology",
    name: "Intense Rheology",
    line: "intense",
    desc: "Filler PEG-HA para corrección intradermal. Ideal para líneas de expresión y arrugas superficiales.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-rheology.png",
  },
  {
    id: "intense-flux",
    name: "Intense Flux",
    line: "intense",
    desc: "Filler PEG-HA intradermal de alta fluidez. Excelente para contorno y definición fina.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-flux.png",
  },
  {
    id: "intense-lv",
    name: "Intense LV",
    line: "intense",
    desc: "Filler PEG-HA de bajo volumen para tratamientos de precisión en zonas delicadas.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-lv.png",
  },
  {
    id: "intense-lips",
    name: "Intense Lips",
    line: "intense",
    desc: "Filler PEG-HA formulado específicamente para la región labial. Hidratación y volumen natural.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-lips.png",
  },
  {
    id: "intense-rose",
    name: "Intense Rose",
    line: "intense",
    desc: "Filler PEG-HA con formulación enriquecida. Ideal para zonas de alta expresividad facial.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-rose.png",
  },
  {
    id: "intense-man",
    name: "Intense Man",
    line: "intense",
    desc: "Formulación específica para anatomía masculina. Resultados estructurados y naturales.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-man.png",
  },
  // ── Stimulate ──────────────────────────────────────────────────
  {
    id: "stimulate",
    name: "Stimulate",
    line: "stimulate",
    desc: "Filler PEG-HA con DualCore y CaHA para bioestimulación y restauración de volumen en tejido blando.",
    price: 0,
    unit: "jeringa",
    img: "/images/stimulate.png",
  },
  {
    id: "stimulate-man",
    name: "Stimulate Man",
    line: "stimulate",
    desc: "Formulación específica para anatomía masculina. Bioestimulación con resultados estructurados.",
    price: 0,
    unit: "jeringa",
    img: "/images/stimulate-man.png",
  },
  // ── Hydro Deluxe ───────────────────────────────────────────────
  {
    id: "hydro-deluxe",
    name: "Hydro Deluxe",
    line: "hydro",
    desc: "Hidrogel lineal no crosslinked con CaHA para bioestimulación e hidratación dérmica profunda.",
    price: 0,
    unit: "jeringa",
    img: "/images/hydro-deluxe.png",
  },
  {
    id: "hydro-deluxe-man",
    name: "Hydro Deluxe Man",
    line: "hydro",
    desc: "Formulación específica para piel masculina. Bioestimulación adaptada a la estructura dérmica del hombre.",
    price: 0,
    unit: "jeringa",
    img: "/images/hydro-deluxe-man.png",
  },
];

export const lineLabels: Record<ProductLine | "all", string> = {
  all: "Todos",
  intense: "Intense",
  stimulate: "Stimulate",
  hydro: "Hydro Deluxe",
};
