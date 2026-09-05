import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";
import { galleryImages, media } from "@/data/site";

export const metadata: Metadata = { title: "Galerija", description: "Saulėta studijos erdvės, švenčių dekoracijų ir jaukių šeimos akimirkų galerija." };

export default function GalleryPage() {
  return (
    <>
      <Hero image={media("untitled-website-2-YbN91Db6NruXXDrB.png")} title="Galerija" />
      <section className="section--tight gallery-showcase" id="nuotraukos">
        <div className="container">
          <div className="gallery-heading">
            <p className="eyebrow">Švenčių akimirkos</p>
            <h2>Jaukumas, detalės ir tikros emocijos</h2>
          </div>
          <ImageGrid
            images={galleryImages}
            className="editorial-grid"
            label="Saulėta galerija"
            sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 67vw"
          />
        </div>
      </section>
    </>
  );
}
