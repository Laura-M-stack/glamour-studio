import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section" id="opiniones" aria-labelledby="opiniones-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Opiniones</div>
          <h2 className="section__title" id="opiniones-title">
            Clientas que ya brillan con Glamour
          </h2>
          <p className="section__subtitle">
            Nos importa que te vayas feliz. Estas son algunas de las
            experiencias de quienes ya pasaron por el salón.
          </p>
        </div>
        <div className="section__tag">★★★★★</div>
      </div>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            “Me hicieron exactamente el color que tenía en mente. Me escuchan,
            aconsejan y el resultado fue mejor de lo que esperaba.”
          </p>
          <div className="testimonial-card__author">
            <div>
              <div className="testimonial-card__name">Mariana R.</div>
              <div className="testimonial-card__detail">Color &amp; corte</div>
            </div>
            <span className="testimonial-card__detail">Cliente habitual</span>
          </div>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            “Fui para un casamiento y el maquillaje me duró toda la noche,
            incluso bailando. Súper prolijas y detallistas.”
          </p>
          <div className="testimonial-card__author">
            <div>
              <div className="testimonial-card__name">Luciana P.</div>
              <div className="testimonial-card__detail">Makeup social</div>
            </div>
            <span className="testimonial-card__detail">Evento</span>
          </div>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            “Las uñas quedaron perfectas y el spa de pies es un antes y un
            después. Ambiente relajado y buena música.”
          </p>
          <div className="testimonial-card__author">
            <div>
              <div className="testimonial-card__name">Carolina G.</div>
              <div className="testimonial-card__detail">
                Manicuría &amp; spa
              </div>
            </div>
            <span className="testimonial-card__detail">Primera visita</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TestimonialsSection;
