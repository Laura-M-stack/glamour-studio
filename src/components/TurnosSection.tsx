import React, { useState } from "react";

const WHATSAPP_NUMBER = "5491112345678";

const TurnosSection: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `
Hola Glamour Studio 👋

Me llamo ${nombre || "-"} y quiero reservar un turno.

Servicio: ${servicio || "-"}
Fecha: ${fecha || "-"}
Horario aproximado: ${horario || "-"}

Detalle:
${mensaje || "-"}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section" id="turnos" aria-labelledby="turnos-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Turnos</div>
          <h2 className="section__title" id="turnos-title">
            Reservá tu próximo turno online
          </h2>
          <p className="section__subtitle">
            Completá estos datos y te llevamos directo a WhatsApp con el mensaje armado.
          </p>
        </div>
        <div className="section__tag">Fácil &amp; rápido</div>
      </div>

      <form className="turnos-form" onSubmit={handleSubmit}>
        <div className="turnos-form__grid">
          <label className="turnos-form__field">
            <span>Nombre</span>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Cómo te llamás"
            />
          </label>

          <label className="turnos-form__field">
            <span>Servicio</span>
            <select
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Elegí una opción
              </option>
              <option value="Corte & color">Corte &amp; color</option>
              <option value="Maquillaje social">Maquillaje social</option>
              <option value="Manos & pies">Manos &amp; pies</option>
              <option value="Otro">Otro</option>
            </select>
          </label>

          <label className="turnos-form__field">
            <span>Fecha preferida</span>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>

          <label className="turnos-form__field">
            <span>Horario aproximado</span>
            <input
              type="text"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              placeholder="Ej: tarde, 15 hs..."
            />
          </label>
        </div>

        <label className="turnos-form__field turnos-form__field--full">
          <span>Detalle del turno</span>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows={4}
            placeholder="Contanos si tenés alguna referencia, evento, o algo a tener en cuenta."
          />
        </label>

        <button type="submit" className="btn btn--whatsapp turnos-form__submit">
          <span className="btn__icon">💬</span>
          <span>Enviar pedido por WhatsApp</span>
        </button>
      </form>
    </section>
  );
};

export default TurnosSection;
