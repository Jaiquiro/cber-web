export type Aliado = {
  id: string;
  nombre: string;
  tipo: string; // Universidad, ONG, Empresa, Estado
  logo?: string;
};

export const aliadosMock: Aliado[] = [
  {
    id: "umsa",
    nombre: "Universidad Mayor de San Andrés",
    tipo: "Universidad",
    logo: "/aliados/umsa.png",
  },
  {
    id: "fes",
    nombre: "Fundación Friedrich Ebert",
    tipo: "Fundación",
  },
  {
    id: "empresa-x",
    nombre: "Empresa Energética X",
    tipo: "Sector Productivo",
  },
];
