import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { media } from "@/data/site";

export const metadata: Metadata = { title: "Pagrindinio stalo dekoras", description: "Patarimai, kaip pagrindinio stalo dekoras padeda sukurti vientisą ir jaukią šventės atmosferą." };

export default function TableDecorArticle() {
  return (
    <article>
      <header className="article-header"><SiteHeader /><p className="eyebrow">Naudinga</p><h1>Pagrindinio stalo dekoras</h1><p className="article-meta">2025 m. sausio 14 d. · 1 min. skaitymo</p></header>
      <div className="article-cover"><Image src={media("unnamed-1-dOq8NG3G6EFDqxrb.jpg")} alt="Šventiškai dekoruotas pagrindinis stalas" fill priority sizes="100vw" /></div>
      <div className="container narrow article-body prose">
        <h2>Ar verta skirti dėmesį pagrindinio stalo dekorui?</h2>
        <p>Šventę prisimename ne tik dėl žmonių ir patirtų emocijų. Dažnai atmintyje lieka bendra tema, spalvų paletė ir detalės, kurios viską sujungė į vieną visumą. Pagrindinis stalas yra viena labiausiai matomų šventės vietų, todėl jo dekoras kuria visos erdvės nuotaiką.</p>
        <p>Tvarkingai suplanuotas dekoras padeda aiškiai išdėstyti užkandžius ir karštuosius patiekalus, palieka pakankamai vietos svečiams ir išlaiko estetišką vaizdą visos šventės metu.</p>
        <h2>Detalės, kurios keičia nuotaiką</h2>
        <p>Žvakės suteikia jaukumo, medžiaginės servetėlės – elegancijos, o džiovintų ar gyvų gėlių kompozicijos įneša gyvybės. Staltiesė arba subtilus stalo takelis padeda sujungti spalvas ir išryškinti pasirinktą temą.</p>
        <p>Dekoras gali būti ryškus arba pastelinis, gausus arba simboliškas. Svarbiausia, kad jis atspindėtų šventės šeimininkų lūkesčius ir asmenybę, o ne užgožtų susitikimo esmę.</p>
      </div>
    </article>
  );
}
