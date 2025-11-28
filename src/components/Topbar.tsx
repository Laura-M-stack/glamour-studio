import React from "react";
import type { ThemeMode } from "../App";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%20Glamour%20Studio%2C%20quiero%20reservar%20un%20turno";

type TopbarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const Topbar: React.FC<TopbarProps> = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleNavClick = () => setIsMenuOpen(false);

  const isDark = theme === "dark";

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
          <a className="nav__link nav__link--ghost" href="#turnos" onClick={handleNavClick}>
            Turnos
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

        <div className="topbar__actions">
          <button
            type="button"
            className="topbar__theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button className="topbar__menu-toggle" type="button" onClick={handleToggleMenu}>
            Menú
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
