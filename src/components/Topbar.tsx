import { useEffect, useState } from "react";
import Icon from "./Icon";
import { salon, whatsappUrl } from "../config/salon";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Staff" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#turnos", label: "Turnos" },
];

export default function Topbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape or when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 861px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            <Icon name="sparkles" size={18} />
          </span>
          <span className="brand__text">
            <span className="brand__name">{salon.name}</span>
            <span className="brand__tagline">{salon.tagline}</span>
          </span>
        </a>

        <button
          className="topbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>

        <nav id="main-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Secciones">
          {LINKS.map((l) => (
            <a key={l.href} className="nav__link" href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a className="nav__cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={close}>
            <Icon name="whatsapp" size={18} />
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}
