import Image from "next/image";
import { media } from "@/data/site";

type ImageGridProps = {
  images: readonly string[];
  className?: string;
  label?: string;
};

export function ImageGrid({ images, className = "", label = "Saulėta šventės erdvė" }: ImageGridProps) {
  return (
    <div className={`image-grid ${className}`.trim()}>
      {images.map((image, index) => (
        <figure className={`image-grid-item image-grid-item--${(index % 5) + 1}`} key={`${image}-${index}`}>
          <Image
            src={media(image)}
            alt={`${label}, nuotrauka ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
          />
        </figure>
      ))}
    </div>
  );
}
