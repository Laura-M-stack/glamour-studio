import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="section" id="servicios" aria-labelledby="services-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Servicios</div>
          <h2 className="section__title" id="services-title">
            Todo lo que necesitás en un solo salón
          </h2>
          <p className="section__subtitle">
            Diseñamos cada servicio para que tengas una experiencia cómoda,
            clara y sin sorpresas. Elegí tu look, nosotras nos ocupamos del
            resto.
          </p>
        </div>
        <div className="section__tag">Agenda flexible</div>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div>
            <div className="service-card__label">Cabello</div>
            <h3 className="service-card__title">Cortes &amp; color</h3>
            <p className="service-card__desc">
              Balayage, iluminaciones y cortes personalizados según tu tipo
              de rostro y estilo. Incluye asesoría previa.
            </p>
          </div>
          <div className="service-card__meta">
            <div className="service-card__tag">+ Brushing de regalo</div>
            <div className="service-card__detail">Duración aprox. 1h 30m</div>
          </div>
        </article>

        <article className="service-card">
          <div>
            <div className="service-card__label">Makeup</div>
            <h3 className="service-card__title">Maquillaje social</h3>
            <p className="service-card__desc">
              Ideal para eventos, casamientos y fiestas. Maquillaje de larga
              duración pensado para fotos y video.
            </p>
          </div>
          <div className="service-card__meta">
            <div className="service-card__tag">Prueba de look</div>
            <div className="service-card__detail">Duración aprox. 1h</div>
          </div>
        </article>

        <article className="service-card">
          <div>
            <div className="service-card__label">Uñas &amp; spa</div>
            <h3 className="service-card__title">Manos &amp; pies</h3>
            <p className="service-card__desc">
              Manicuría semipermanente, nail art y spa de pies para que te
              vayas con todo el glamour hasta la punta de los dedos.
            </p>
          </div>
          <div className="service-card__meta">
            <div className="service-card__tag">Nail art incluido</div>
            <div className="service-card__detail">Duración aprox. 1h 15m</div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;
