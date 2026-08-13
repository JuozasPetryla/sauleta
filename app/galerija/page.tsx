import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";
import { galleryImages, media } from "@/data/site";

export const metadata: Metadata = { title: "Galerija", description: "Saulėta studijos erdvės, švenčių dekoracijų ir jaukių šeimos akimirkų galerija." };

export default function GalleryPage() {
  return (
    <>
      <Hero image={media("untitled-website-2-YbN91Db6NruXXDrB.png")} title="Galerija" />
      <section className="section--tight">
        <div className="container">
          <ImageGrid images={galleryImages} className="gallery-grid" label="Saulėta galerija" />
        </div>
      </section>
    </>
  );
}
