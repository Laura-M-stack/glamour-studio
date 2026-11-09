import Icon from "./Icon";
import { HOURS_SUMMARY, salon, whatsappUrl } from "../config/salon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__title">{salon.name}</p>
          <p className="footer__text">
            Un salón pensado para que vengas, te relajes y salgas con un look que te represente. Turnos con
            reserva previa.
          </p>
        </div>

        <div>
          <p className="footer__title">Contacto</p>
          <ul className="footer__list">
            <li>{salon.address}</li>
            <li>{salon.city}</li>
            <li>
              <a className="btn btn--yellow btn--small" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} />
                Escribinos por WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__title">Horarios</p>
          <ul className="footer__list">
            {HOURS_SUMMARY.map((h) => (
              <li key={h.days}>
                {h.days}: {h.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        © {year} {salon.name} · Sitio diseñado y desarrollado por{" "}
        <a href={salon.author.url} target="_blank" rel="noopener noreferrer">
          {salon.author.name}
        </a>
      </div>
    </footer>
  );
}
