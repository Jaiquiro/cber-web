export type MiembroEquipo = {
  id: string;
  nombre: string;
  rol: string;
  area: string;
  foto?: string;
};

export const equipoMock: MiembroEquipo[] = [
  {
    id: "director",
    nombre: "Nombre Apellido",
    rol: "Director del Centro",
    area: "Gestión e Investigación",
    foto: "/equipo/director.jpg",
  },
  {
    id: "investigador-1",
    nombre: "Nombre Apellido",
    rol: "Investigador",
    area: "Energía solar y sistemas híbridos",
  },
  {
    id: "investigador-2",
    nombre: "Nombre Apellido",
    rol: "Investigador",
    area: "Hidrógeno verde",
  },
];
