import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";
import { homeGallery, media } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero
        home
        image={media("_j3a9273---copy11-Yan3LXvnOPCD59Qr.jpg")}
        title="Saulėta"
        subtitle="Jūsų švenčių namai"
        position="center 42%"
      />

      <section className="section">
        <div className="container home-about">
          <div>
            <p className="eyebrow">Švenčių studija Kaune</p>
            <h2>KODĖL MES?</h2>
            <p>„Saulėta“ – tai tikri Jūsų švenčių namai. Čia šviesu, erdvu ir jauku: prie didelio stalo be vargo tilps 22 suaugusieji, minkšta sofa kviečia prisėsti ramiai kavos pertraukėlei, o atskira virtuvė leis pamiršti pasiruošimo darbų netvarką.</p>
            <p>Vaikų ir suaugusiųjų erdvė yra bendra, todėl suaugusieji gali atsipalaiduoti, stebėti žaidžiančius mažuosius ir bendrauti su svečiais.</p>
            <div className="button-row">
              <Link className="button" href="/paketai-ir-ju-kainos">Peržiūrėti paketus</Link>
              <Link className="button button--secondary" href="/kontaktai">Susisiekti</Link>
            </div>
          </div>
          <div className="home-about-media">
            <Image src={media("_j3a8994-AQEGEkPWEoH2lO86.jpg")} alt="Saulėta vaikų žaidimų erdvė" fill sizes="(max-width: 760px) 100vw, 55vw" />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="section-heading">JŪSŲ SAULĖTOMS ŠVENTĖMS</h2>
          <p className="section-intro">Šviesi bendra erdvė, stilingi foto fonai ir kruopščiai atrinkti žaislai mažiesiems.</p>
          <ImageGrid images={homeGallery} className="home-grid" />
        </div>
      </section>
    </>
  );
}
