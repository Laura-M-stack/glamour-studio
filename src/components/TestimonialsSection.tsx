import React from "react";

type Testimonial = {
  name: string;
  detail: string;
  label: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana R.",
    detail: "Color & corte",
    label: "Cliente habitual",
    text: "“Me hicieron exactamente el color que tenía en mente. Me escuchan, aconsejan y el resultado fue mejor de lo que esperaba.”",
  },
  {
    name: "Luciana P.",
    detail: "Makeup social",
    label: "Evento",
    text: "“Fui para un casamiento y el maquillaje me duró toda la noche, incluso bailando. Súper prolijas y detallistas.”",
  },
  {
    name: "Carolina G.",
    detail: "Manicuría & spa",
    label: "Primera visita",
    text: "“Las uñas quedaron perfectas y el spa de pies es un antes y un después. Ambiente relajado y buena música.”",
  },
];

function TestimonialsSection() {
  return (
    <section className="section" id="opiniones" aria-labelledby="opiniones-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Opiniones</div>
          <h2 className="section__title" id="opiniones-title">
            Clientas que ya brillan con Glamour
          </h2>
          <p className="section__subtitle">
            Nos importa que te vayas feliz. Estas son algunas de las experiencias de quienes ya
            pasaron por el salón.
          </p>
        </div>
        <div className="section__tag">★★★★★</div>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <article className="testimonial-card" key={t.name}>
            <div className="testimonial-card__stars">★★★★★</div>
            <p className="testimonial-card__text">{t.text}</p>
            <div className="testimonial-card__author">
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__detail">{t.detail}</div>
              </div>
              <span className="testimonial-card__detail">{t.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
