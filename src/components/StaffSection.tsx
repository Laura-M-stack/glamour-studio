import SectionHeader from "./SectionHeader";
import { STAFF } from "../config/salon";

export default function StaffSection() {
  return (
    <section className="section" id="equipo" aria-labelledby="staff-title">
      <SectionHeader
        id="staff-title"
        eyebrow="Staff"
        title="Un equipo experto en tu look"
        subtitle="Cada integrante se especializa en un área distinta, para que cada detalle esté cuidado."
        aside="Equipo Glamour"
      />

      <div className="staff">
        {STAFF.map((p) => (
          <article key={p.name} className="staff-card">
            <div className="staff-card__photo">
              <img src={p.img} alt={`Retrato de ${p.name}`} width={720} height={900} loading="lazy" decoding="async" />
              <span className="staff-card__area">{p.area}</span>
            </div>
            <div className="staff-card__body">
              <h3 className="staff-card__name">{p.name}</h3>
              <p className="staff-card__role">{p.role}</p>
              <p className="staff-card__desc">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
