import React from "react";

type Service = {
  label: string;
  title: string;
  desc: string;
  tag: string;
  duration: string;
};

const SERVICES: Service[] = [
  {
    label: "Cabello",
    title: "Cortes & color",
    desc: "Balayage, iluminaciones y cortes personalizados según tu tipo de rostro y estilo. Incluye asesoría previa.",
    tag: "+ Brushing de regalo",
    duration: "Duración aprox. 1h30",
  },
  {
    label: "Makeup",
    title: "Maquillaje social",
    desc: "Ideal para eventos, casamientos y fiestas. Maquillaje de larga duración pensado para fotos y video.",
    tag: "Prueba de look",
    duration: "Duración aprox. 1h",
  },
  {
    label: "Uñas & spa",
    title: "Manos & pies",
    desc: "Manicuría semipermanente, nail art y spa de pies para que te vayas con todo el glamour hasta la punta de los dedos.",
    tag: "Nail art incluido",
    duration: "Duración aprox. 1h15",
  },
];

function ServicesSection() {
  return (
    <section className="section" id="servicios" aria-labelledby="services-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Servicios</div>
          <h2 className="section__title" id="services-title">
            Todo lo que necesitás en un solo salón
          </h2>
          <p className="section__subtitle">
            Diseñamos cada servicio para que tengas una experiencia cómoda, clara y sin sorpresas.
            Elegí tu look, nosotras nos ocupamos del resto.
          </p>
        </div>
        <div className="section__tag">Agenda flexible</div>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <article className="service-card" key={service.title}>
            <div>
              <div className="service-card__label">{service.label}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </div>
            <div className="service-card__meta">
              <span className="service-card__tag">{service.tag}</span>
              <span>{service.duration}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
