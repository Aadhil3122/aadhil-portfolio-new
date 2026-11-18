import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </Reveal>
  );
}
