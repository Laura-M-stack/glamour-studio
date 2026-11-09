import { salon } from "../config/salon";

export default function DemoBanner() {
  if (!salon.isDemo) return null;

  return (
    <div className="demo-banner" role="note">
      <span>
        <strong>Sitio de demostración:</strong> {salon.name} es un negocio ficticio.
      </span>
      <a href={salon.author.url} target="_blank" rel="noopener noreferrer">
        Diseño y desarrollo: {salon.author.name}
      </a>
    </div>
  );
}
