import React, { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%20Glamour%20Studio%2C%20quiero%20reservar%20un%20turno";

const Topbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`topbar ${isMenuOpen ? "topbar--menu-open" : ""}`} id="top">
      <div className="topbar__inner">
        <div className="brand">
          <div className="brand__mark" aria-hidden="true" />
          <div className="brand__text">
            <span className="brand__name">Glamour Studio</span>
            <span className="brand__tagline">Belleza &amp; estilo</span>
          </div>
        </div>

        <nav className="nav" aria-label="Secciones principales">
          <a className="nav__link nav__link--ghost" href="#servicios" onClick={handleNavClick}>
            Servicios
          </a>
          <a className="nav__link nav__link--ghost" href="#opiniones" onClick={handleNavClick}>
            Opiniones
          </a>
          <a className="nav__link nav__link--ghost" href="#equipo" onClick={handleNavClick}>
            Staff
          </a>
          <a
            className="nav__link nav__cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            WhatsApp
          </a>
        </nav>

        <button className="topbar__menu-toggle" type="button" onClick={handleToggleMenu}>
          Menú
        </button>
      </div>
    </header>
  );
}

export default Topbar;
