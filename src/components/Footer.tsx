import React from "react";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%20Glamour%20Studio%2C%20quiero%20reservar%20un%20turno";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__title">Glamour Studio</div>
          <p className="footer__text">
            Un salón pensado para que vengas, te relajes y salgas con un look que te represente.
            Hacemos turnos con reserva previa por WhatsApp.
          </p>
        </div>

        <div>
          <div className="footer__title">Contacto</div>
          <ul className="footer__list">
            <li>Calle Ejemplo 123, Barrio Centro</li>
            <li>Buenos Aires, Argentina</li>
            <li>Tel: +54 9 11 1234-5678</li>
            <li>
              <a className="footer__pill" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span>💬</span>
                <span>Chatear por WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer__title">Horarios</div>
          <ul className="footer__list">
            <li>Lunes a viernes: 10:00 - 19:00</li>
            <li>Sábados: 9:00 - 14:00</li>
            <li>Domingos y feriados: cerrado</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
