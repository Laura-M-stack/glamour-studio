import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { TESTIMONIALS, salon } from "../config/salon";

export default function TestimonialsSection() {
  return (
    <section className="section" id="opiniones" aria-labelledby="reviews-title">
      <SectionHeader
        id="reviews-title"
        eyebrow="Opiniones"
        title="Clientas que ya brillan"
        subtitle="Nos importa que te vayas feliz. Esto cuentan quienes ya pasaron por el salón."
      />

      <div className="notes">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="note">
            <div className="note__stars" aria-label="5 de 5 estrellas">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={16} />
              ))}
            </div>
            <blockquote className="note__text">“{t.text}”</blockquote>
            <figcaption className="note__author">
              <strong>{t.name}</strong> · {t.service}
            </figcaption>
          </figure>
        ))}
      </div>

      {salon.isDemo && <p className="section__footnote">Reseñas de ejemplo para esta demo.</p>}
    </section>
  );
}
