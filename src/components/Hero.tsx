import React from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%20Glamour%20Studio%2C%20quiero%20reservar%20un%20turno";

const Hero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <motion.section
        className="hero"
        aria-labelledby="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* shapes de fondo */}
        <div className="hero-shape hero-shape--1" aria-hidden="true" />
        <div className="hero-shape hero-shape--2" aria-hidden="true" />
        <div className="hero-shape hero-shape--3" aria-hidden="true" />

        <div className="hero__inner">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Turnos con brillo garantizado
          </div>
          <h1 className="hero__title" id="hero-title">
            Glamour
            <span className="hero__title-highlight">Studio</span> para tu próxima
            transformación
          </h1>
          <p className="hero__subtitle">
            Cabello, maquillaje y uñas en un solo lugar. Un equipo de especialistas listo
            para que salgas sintiéndote increíble, sin dramas y con mucho estilo.
          </p>

          <div className="hero__meta">
            <span className="hero__meta-pill">Color &amp; cortes</span>
            <span className="hero__meta-pill">Makeup social</span>
            <span className="hero__meta-pill">Nails &amp; spa</span>
          </div>

          <div className="hero__actions">
            <a
              className="btn btn--whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__icon">💬</span>
              <span>Reservar por WhatsApp</span>
            </a>
            <a className="btn btn--outline" href="#servicios">
              <span className="btn__icon">✨</span>
              <span>Ver servicios</span>
            </a>
          </div>
        </div>

        {/* bloque media animado */}
        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero-photo-card">
            <div className="hero-photo-card__inner">
              <img
                src="https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clienta sonriendo luego de un servicio de belleza"
              />
            </div>
            <div className="hero-photo-card__label">
              <span className="hero-photo-card__label-dot" />
              <span>Look listo para brillar</span>
            </div>
          </div>

          {/* stickers */}
          <div className="hero-sticker hero-sticker--spark">
            <span className="hero-sticker__icon">⚡</span>
            <span>Full glam</span>
          </div>

          <div className="hero-sticker hero-sticker--heart">
            <span className="hero-sticker__icon">💖</span>
            <span>Clientes felices</span>
          </div>

          <div className="hero-sticker hero-sticker--tag">
            <span className="hero-sticker__icon">📅</span>
            <span>Turnos online</span>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
