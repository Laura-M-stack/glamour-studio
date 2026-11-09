import { motion } from "framer-motion";
import Icon from "./Icon";
import heroImg from "../assets/images/hero.webp";
import { salon, whatsappUrl } from "../config/salon";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero__text"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="tag tag--yellow tag--tilt">Turnos con brillo garantizado</span>

        <h1 className="hero__title" id="hero-title">
          En {salon.name} tu look es <span className="highlight">protagonista</span>
        </h1>

        <p className="hero__subtitle">
          Cabello, maquillaje y uñas en un solo lugar, con especialistas en cada área para que salgas
          sintiéndote increíble.
        </p>

        <ul className="hero__pills" aria-label="Especialidades">
          <li>Color y cortes</li>
          <li>Makeup social</li>
          <li>Nails y spa</li>
        </ul>

        <div className="hero__actions">
          <a className="btn btn--pink" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />
            Reservar por WhatsApp
          </a>
          <a className="btn btn--white" href="#servicios">
            Ver servicios
            <Icon name="arrow" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        <div className="photo-card">
          <img
            src={heroImg}
            alt="Clienta sonriendo con el pelo suelto y brillante"
            width={495}
            height={941}
            fetchPriority="high"
            decoding="async"
          />
          <span className="photo-card__label">
            <span className="dot" aria-hidden="true" />
            Look listo para brillar
          </span>
        </div>

        <span className="sticker sticker--yellow sticker--a">
          <Icon name="bolt" size={16} /> Full glam
        </span>
        <span className="sticker sticker--white sticker--b">
          <Icon name="heart" size={16} /> Clientas felices
        </span>
        <span className="sticker sticker--pink sticker--c">
          <Icon name="calendar" size={16} /> Turnos online
        </span>
      </motion.div>
    </section>
  );
}
