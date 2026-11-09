const WORDS = ["Balayage", "Makeup social", "Nail art", "Spa de pies", "Cortes", "Novias", "Semipermanente"];

/** Decorative scrolling strip. The list is duplicated so the CSS loop is seamless. */
export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((w, i) => (
          <span key={i} className="marquee__item">
            {w}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
