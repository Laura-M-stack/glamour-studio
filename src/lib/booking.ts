import { OPENING_HOURS } from "../config/salon";

/** Parses "YYYY-MM-DD" (from <input type="date">) as a LOCAL date, avoiding the UTC off-by-one of new Date(str). */
export function parseLocalDate(value: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!m) return null;
  const date = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  // Reject rolled-over dates like 2026-02-31.
  return date.getMonth() === Number(m[2]) - 1 ? date : null;
}

export function toInputDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function formatDisplayDate(date: Date): string {
  return new Intl.DateTimeFormat("es-AR", { weekday: "long", day: "numeric", month: "long" }).format(date);
}

/** Half-hour start times for that day; empty if closed. Past slots are removed when the date is today. */
export function slotsFor(date: Date, now: Date = new Date()): string[] {
  const hours = OPENING_HOURS[date.getDay()];
  if (!hours) return [];
  const [open, close] = hours;
  const isToday = toInputDate(date) === toInputDate(now);
  const slots: string[] = [];
  for (let minutes = open * 60; minutes < close * 60; minutes += 30) {
    if (isToday && minutes <= now.getHours() * 60 + now.getMinutes()) continue;
    slots.push(`${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`);
  }
  return slots;
}

export type BookingForm = {
  name: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

export type BookingErrors = Partial<Record<keyof BookingForm, string>>;

export function validateBooking(form: BookingForm, now: Date = new Date()): BookingErrors {
  const errors: BookingErrors = {};
  if (form.name.trim().length < 2) errors.name = "Escribí tu nombre.";
  if (!form.service) errors.service = "Elegí un servicio.";

  const date = parseLocalDate(form.date);
  const today = parseLocalDate(toInputDate(now))!;
  if (!date) {
    errors.date = "Elegí una fecha.";
  } else if (date < today) {
    errors.date = "Esa fecha ya pasó.";
  } else if (slotsFor(date, now).length === 0) {
    errors.date = "Ese día no hay turnos disponibles. Probá con otra fecha.";
  } else if (!form.time) {
    errors.time = "Elegí un horario.";
  } else if (!slotsFor(date, now).includes(form.time)) {
    errors.time = "Ese horario ya no está disponible.";
  }
  return errors;
}

export function buildBookingMessage(form: BookingForm, salonName: string): string {
  const date = parseLocalDate(form.date);
  const lines = [
    `Hola ${salonName}, quiero reservar un turno.`,
    "",
    `Nombre: ${form.name.trim()}`,
    `Servicio: ${form.service}`,
    `Día: ${date ? formatDisplayDate(date) : form.date}`,
    `Horario: ${form.time} h`,
  ];
  if (form.notes.trim()) lines.push("", `Detalle: ${form.notes.trim()}`);
  return lines.join("\n");
}
