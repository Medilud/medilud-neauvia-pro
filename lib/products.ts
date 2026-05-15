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
  {
    id: "stimulate",
    name: "Stimulate",
    line: "stimulate",
    desc: "Filler PEG-HA enriquecido con CaHA para restauración de volumen en tejido blando.",
    price: 0,
    unit: "jeringa",
    img: "/images/stimulate.jpg",
  },
  {
    id: "stimulate-man",
    name: "Stimulate Man",
    line: "stimulate",
    desc: "Formulación específica para anatomía masculina. Restauración de volumen con resultados naturales.",
    price: 0,
    unit: "jeringa",
    img: "/images/stimulate-man.jpg",
  },
  {
    id: "intense",
    name: "Intense",
    line: "intense",
    desc: "Filler PEG-HA para restauración de volumen en subcutis. Alta cohesividad y duración prolongada.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense.jpg",
  },
  {
    id: "intense-rheology",
    name: "Intense Rheology",
    line: "intense",
    desc: "Filler PEG-HA para corrección intradermal. Ideal para líneas de expresión y arrugas superficiales.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-rheology.jpg",
  },
  {
    id: "intense-flux",
    name: "Intense Flux",
    line: "intense",
    desc: "Filler PEG-HA intradermal de alta fluidez. Excelente para contorno y definición fina.",
    price: 0,
    unit: "jeringa",
    img: "/images/intense-flux.jpg",
  },
  {
    id: "hydro-deluxe",
    name: "Hydro Deluxe",
    line: "hydro",
    desc: "Hidrogel lineal no crosslinked enriquecido con CaHA para bioestimulación e hidratación profunda.",
    price: 0,
    unit: "jeringa",
    img: "/images/hydro-deluxe.jpg",
  },
  {
    id: "hydro-deluxe-man",
    name: "Hydro Deluxe Man",
    line: "hydro",
    desc: "Formulación específica para piel masculina. Bioestimulación adaptada a la estructura dérmica del hombre.",
    price: 0,
    unit: "jeringa",
    img: "/images/hydro-deluxe-man.jpg",
  },
];

export const lineLabels: Record<ProductLine | "all", string> = {
  all: "Todos",
  intense: "Intense",
  stimulate: "Stimulate",
  hydro: "Hydro Deluxe",
};
