import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { HOURS_SUMMARY, SERVICES, salon, whatsappUrl } from "../config/salon";
import {
  buildBookingMessage,
  parseLocalDate,
  slotsFor,
  toInputDate,
  validateBooking,
  type BookingErrors,
  type BookingForm,
} from "../lib/booking";

const EMPTY: BookingForm = { name: "", service: "", date: "", time: "", notes: "" };

export default function TurnosSection() {
  const [form, setForm] = useState<BookingForm>(EMPTY);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [sent, setSent] = useState(false);

  const today = toInputDate(new Date());
  const selectedDate = parseLocalDate(form.date);
  const slots = selectedDate ? slotsFor(selectedDate) : [];

  function update<K extends keyof BookingForm>(key: K, value: BookingForm[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // A new date can invalidate the chosen time.
      if (key === "date") next.time = "";
      return next;
    });
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSent(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateBooking(form);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`turno-${firstInvalid}`)?.focus();
      return;
    }
    const url = whatsappUrl(buildBookingMessage(form, salon.name));
    // Popup blockers can return null; fall back to navigating in the same tab.
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.assign(url);
    setSent(true);
  }

  const fieldProps = (key: keyof BookingForm) => ({
    id: `turno-${key}`,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `turno-${key}-error` : undefined,
  });

  const errorFor = (key: keyof BookingForm) =>
    errors[key] ? (
      <span className="field__error" id={`turno-${key}-error`}>
        {errors[key]}
      </span>
    ) : null;

  return (
    <section className="section" id="turnos" aria-labelledby="booking-title">
      <SectionHeader
        id="booking-title"
        eyebrow="Turnos"
        title="Reservá tu próximo turno"
        subtitle="Completá los datos y te llevamos a WhatsApp con el mensaje listo para enviar."
        aside="Fácil y rápido"
      />

      <div className="booking">
        <form className="booking__form" onSubmit={handleSubmit} noValidate>
          <div className="booking__grid">
            <label className="field" htmlFor="turno-name">
              <span className="field__label">Nombre</span>
              <input
                {...fieldProps("name")}
                type="text"
                autoComplete="given-name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Cómo te llamás"
              />
              {errorFor("name")}
            </label>

            <label className="field" htmlFor="turno-service">
              <span className="field__label">Servicio</span>
              <select {...fieldProps("service")} value={form.service} onChange={(e) => update("service", e.target.value)}>
                <option value="">Elegí una opción</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Otro (lo cuento en el detalle)">Otro</option>
              </select>
              {errorFor("service")}
            </label>

            <label className="field" htmlFor="turno-date">
              <span className="field__label">Fecha</span>
              <input
                {...fieldProps("date")}
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
              {errorFor("date")}
            </label>

            <label className="field" htmlFor="turno-time">
              <span className="field__label">Horario</span>
              <select
                {...fieldProps("time")}
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                disabled={!selectedDate || slots.length === 0}
              >
                <option value="">
                  {!selectedDate ? "Primero elegí la fecha" : slots.length ? "Elegí un horario" : "Sin turnos ese día"}
                </option>
                {slots.map((t) => (
                  <option key={t} value={t}>
                    {t} h
                  </option>
                ))}
              </select>
              {errorFor("time")}
            </label>
          </div>

          <label className="field" htmlFor="turno-notes">
            <span className="field__label">
              Detalle <span className="field__optional">(opcional)</span>
            </span>
            <textarea
              id="turno-notes"
              rows={3}
              maxLength={500}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Una referencia, el evento o algo que tengamos que saber."
            />
          </label>

          <button type="submit" className="btn btn--pink btn--block">
            <Icon name="whatsapp" />
            Enviar pedido por WhatsApp
          </button>

          <p className="booking__status" role="status">
            {sent ? "Listo: se abrió WhatsApp con tu pedido. Solo falta tocar Enviar." : ""}
          </p>
        </form>

        <aside className="booking__info" aria-label="Horarios y dirección">
          <h3 className="booking__info-title">
            <Icon name="clock" /> Horarios
          </h3>
          <dl className="hours">
            {HOURS_SUMMARY.map((h) => (
              <div key={h.days} className="hours__row">
                <dt>{h.days}</dt>
                <dd>{h.hours}</dd>
              </div>
            ))}
          </dl>
          <h3 className="booking__info-title">
            <Icon name="pin" /> Dirección
          </h3>
          <p>
            {salon.address}
            <br />
            {salon.city}
          </p>
        </aside>
      </div>
    </section>
  );
}
