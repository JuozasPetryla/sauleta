import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

type HeroProps = {
  image: string;
  title?: string;
  subtitle?: string;
  home?: boolean;
  position?: string;
};

export function Hero({ image, title, subtitle, home = false, position = "center" }: HeroProps) {
  return (
    <section className={home ? "hero hero--home" : "hero"}>
      <Image
        className="hero-image"
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: position }}
      />
      {!home && <div className="hero-overlay" />}
      <SiteHeader />
      {(title || subtitle) && (
        <div className="hero-copy">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
    </section>
  );
}
