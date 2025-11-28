import React from "react";
import mujer1 from "../assets/mujer1.jpg";
import mujer2 from "../assets/mujer2.jpg";
import mujer3 from "../assets/mujer3.jpg";

type StaffMember = {
  name: string;
  roleTag: string;
  role: string;
  desc: string;
  img: string;
  alt: string;
};

const STAFF: StaffMember[] = [
  {
    name: "Sofía",
    roleTag: "Cabello",
    role: "Colorista & especialista en balayage",
    desc: "Amante de los cambios de look con degradé suave, brillo y movimiento. Te ayuda a encontrar el color ideal para tu piel.",
    img: mujer2,
    alt: "Estilista de cabello trabajando en el salón",
  },
  {
    name: "Camila",
    roleTag: "Makeup",
    role: "Makeup artist social & novias",
    desc: "Especializada en maquillaje para eventos, fotos y video. Trabaja tu look según la ocasión, el vestido y tu estilo.",
    img: mujer1,
    alt: "Maquilladora aplicando maquillaje a una clienta",
  },
  {
    name: "Brenda",
    roleTag: "Nails",
    role: "Manicuría, nail art & spa de pies",
    desc: "Detallista al máximo, fan del nail art y las combinaciones fucsia, glitter y tonos pastel.",
    img: mujer3,
    alt: "Manicurista realizando nail art",
  },
];

const StaffSection: React.FC = () => {
  return (
    <section className="section" id="equipo" aria-labelledby="equipo-title">
      <div className="section__header">
        <div className="section__title-block">
          <div className="section__eyebrow">Staff</div>
          <h2 className="section__title" id="equipo-title">
            Un equipo de chicas expertas en tu look
          </h2>
          <p className="section__subtitle">
            Cada integrante del equipo está especializada en un área distinta, para que cada
            detalle esté cuidado.
          </p>
        </div>
        <div className="section__tag">Equipo Glamour</div>
      </div>

      <div className="staff-grid">
        {STAFF.map((person) => (
          <article className="staff-card" key={person.name}>
            <div className="staff-card__photo">
              <img src={person.img} alt={person.alt} />
            </div>
            <div className="staff-card__body">
              <div className="staff-card__role-tag">{person.roleTag}</div>
              <h3 className="staff-card__name">{person.name}</h3>
              <div className="staff-card__role">{person.role}</div>
              <p className="staff-card__desc">{person.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
