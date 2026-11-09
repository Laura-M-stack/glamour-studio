import staffSofia from "../assets/images/staff-sofia.webp";
import staffCamila from "../assets/images/staff-camila.webp";
import staffBrenda from "../assets/images/staff-brenda.webp";

/**
 * Single source of truth for the salon's data. Every component reads from here,
 * so turning this demo into a real client site means editing only this file.
 */
export const salon = {
  name: "Glamour Studio",
  tagline: "Belleza & estilo",
  city: "Buenos Aires, Argentina",
  address: "Av. Siempreviva 742, Palermo",
  phoneDisplay: "+54 9 11 0000-0000",
  /**
   * Demo site: no real number, so WhatsApp links open the share picker with the
   * message ready instead of writing to a stranger. Put the real number here
   * (digits only, e.g. "5491112345678") for a client site.
   */
  whatsappNumber: "",
  isDemo: true,
  author: { name: "Laura Moyano", url: "https://laura-moyano-web.pages.dev/" },
} as const;

/** 0 = Sunday … 6 = Saturday. `null` = closed. Hours are [open, close) in 24h. */
export const OPENING_HOURS: Record<number, [number, number] | null> = {
  0: null,
  1: [10, 19],
  2: [10, 19],
  3: [10, 19],
  4: [10, 19],
  5: [10, 19],
  6: [9, 14],
};

export const HOURS_SUMMARY = [
  { days: "Lunes a viernes", hours: "10:00 – 19:00" },
  { days: "Sábados", hours: "9:00 – 14:00" },
  { days: "Domingos y feriados", hours: "Cerrado" },
];

export type Service = {
  id: string;
  label: string;
  title: string;
  desc: string;
  perk: string;
  duration: string;
  tone: "white" | "pink" | "yellow";
};

export const SERVICES: Service[] = [
  {
    id: "cabello",
    label: "Cabello",
    title: "Cortes y color",
    desc: "Balayage, iluminaciones y cortes según tu tipo de rostro y estilo. Siempre con asesoría previa.",
    perk: "Brushing de regalo",
    duration: "1 h 30 min aprox.",
    tone: "white",
  },
  {
    id: "makeup",
    label: "Makeup",
    title: "Maquillaje social",
    desc: "Para casamientos, fiestas y sesiones de fotos. Larga duración y pensado para cámara.",
    perk: "Prueba de look",
    duration: "1 h aprox.",
    tone: "pink",
  },
  {
    id: "unas",
    label: "Uñas y spa",
    title: "Manos y pies",
    desc: "Semipermanente, nail art y spa de pies para que el glamour llegue hasta la punta de los dedos.",
    perk: "Nail art incluido",
    duration: "1 h 15 min aprox.",
    tone: "yellow",
  },
];

export const STAFF = [
  {
    name: "Sofía",
    area: "Cabello",
    role: "Colorista y especialista en balayage",
    desc: "Fan de los cambios de look con degradé suave y mucho brillo. Te ayuda a encontrar el color ideal para tu piel.",
    img: staffSofia,
  },
  {
    name: "Camila",
    area: "Makeup",
    role: "Makeup artist social y novias",
    desc: "Arma tu look según la ocasión, el vestido y tu estilo, pensando en cómo va a salir en las fotos.",
    img: staffCamila,
  },
  {
    name: "Brenda",
    area: "Uñas",
    role: "Manicuría, nail art y spa de pies",
    desc: "Detallista al máximo. Lo suyo son las combinaciones fucsia, glitter y tonos pastel.",
    img: staffBrenda,
  },
];

export const TESTIMONIALS = [
  {
    text: "Me hicieron exactamente el color que tenía en mente. Te escuchan, te aconsejan y el resultado fue mejor de lo que esperaba.",
    name: "Mariana R.",
    service: "Color y corte",
  },
  {
    text: "Fui para un casamiento y el maquillaje me duró toda la noche, incluso bailando. Súper prolijas.",
    name: "Luciana P.",
    service: "Maquillaje social",
  },
  {
    text: "Las uñas quedaron perfectas y el spa de pies es un antes y un después. Ambiente relajado y buena música.",
    name: "Carolina G.",
    service: "Manos y spa",
  },
];

export const DEFAULT_WHATSAPP_MESSAGE = `Hola ${salon.name}, quiero reservar un turno.`;

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = encodeURIComponent(message);
  return salon.whatsappNumber
    ? `https://wa.me/${salon.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`;
}
