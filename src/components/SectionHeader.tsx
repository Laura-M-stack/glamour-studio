type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  aside?: string;
};

export default function SectionHeader({ id, eyebrow, title, subtitle, aside }: Props) {
  return (
    <div className="section__header">
      <div>
        <p className="section__eyebrow">{eyebrow}</p>
        <h2 className="section__title" id={id}>
          {title}
        </h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </div>
      {aside && <span className="tag tag--white tag--tilt-right">{aside}</span>}
    </div>
  );
}
