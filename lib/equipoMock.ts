// Datos de ejemplo para la sección de equipo

export type MiembroEquipo = {
  nombre: string;
  cargo: string;
  linea: string; // línea de investigación principal
  email?: string;
};

export const equipoMock: MiembroEquipo[] = [
  {
    nombre: "Dra. Nombre Apellido",
    cargo: "Directora del Centro",
    linea: "Políticas energéticas y planificación",
    email: "directora@cer.edu.bo",
  },
  {
    nombre: "Ing. Nombre Apellido2",
    cargo: "Investigador en energías renovables",
    linea: "Energía solar fotovoltaica y recursos energéticos",
    email: "investigador.solar@cer.edu.bo",
  },
  {
    nombre: "MSc. Nombre Apellido",
    cargo: "Investigador en hidrógeno verde",
    linea: "Hidrógeno verde y almacenamiento",
    email: "investigador.h2v@cer.edu.bo",
  },
  {
    nombre: "Ing. Nombre Apellido",
    cargo: "Asistente de investigación",
    linea: "Eficiencia energética y auditorías",
  },
];
