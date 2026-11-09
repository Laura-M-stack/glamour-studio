import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { SERVICES } from "../config/salon";

export default function ServicesSection() {
  return (
    <section className="section" id="servicios" aria-labelledby="services-title">
      <SectionHeader
        id="services-title"
        eyebrow="Servicios"
        title="Todo lo que necesitás en un solo salón"
        subtitle="Cada servicio está pensado para que tengas una experiencia cómoda, clara y sin sorpresas."
        aside="Agenda flexible"
      />

      <div className="services">
        {SERVICES.map((s) => (
          <article key={s.id} className={`service service--${s.tone}`}>
            <span className="service__label">{s.label}</span>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__desc">{s.desc}</p>
            <div className="service__meta">
              <span className="service__perk">
                <Icon name="sparkles" size={16} /> {s.perk}
              </span>
              <span className="service__time">
                <Icon name="clock" size={16} /> {s.duration}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
