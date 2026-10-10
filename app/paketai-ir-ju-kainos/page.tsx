import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";
import { media, packageImages } from "@/data/site";

export const metadata: Metadata = { title: "Paketai ir kainos", description: "Saulėta studijos nuomos, MINI ir MAXI švenčių paketų kainos bei papildomos paslaugos." };

type PackageProps = { title: string; prices: string[]; children: React.ReactNode; featured?: boolean };

function Package({ title, prices, children, featured = false }: PackageProps) {
  return <article className={featured ? "package package--featured" : "package"}><h2>{title}</h2><div className="package-body"><div className="package-prices">{prices.map((price) => <div key={price}>{price}</div>)}</div>{children}</div></article>;
}

export default function PricingPage() {
  return (
    <>
      <Hero image={media("untitled-website-1-m6LJz4o673cz5W2a.png")} title="Paketai ir kainos" position="center 48%" />
      <section className="section"><div className="container offer-intro">
        <h2>ŠVENTĖ PAGAL JŪSŲ POREIKIUS</h2>
        <div><h3>Siūlomos paslaugos:</h3><ul><li>tik studijos nuoma;</li><li>MINI paketas;</li><li>gimtadienio, lyties atskleidimo ir kūdikio sutikimo švenčių paketas;</li><li>Krikštynų paketas;</li><li>šeimų su mažyliais pasibuvimo pasiūlymas.</li></ul><p>Daugiau paketų nuotraukų rasite „Saulėta“ studijos Facebook ir Instagram paskyrose. Mielai kviečiame atvykti susipažinti su studija – susitikimo data derinama individualiai.</p><Link className="button" href="/kontaktai">Susitarti dėl apsilankymo</Link></div>
      </div></section>
      <section><div className="container package-list">
        <Package title="TIK STUDIJOS NUOMA" prices={["I–IV 1 val. – 40 Eur", "V–VII ir švenčių dienomis 1 val. – 50 Eur"]}>
          <p>Papildoma valanda rezervuojant 3 val. ir daugiau iš anksto – 30 Eur.</p><p>Papildoma valanda nuomos metu – 40 Eur.</p><p><strong>Į kainą neįskaičiuotos papildomos paslaugos:</strong> kavos aparatas, sausuolių kompozicijos, vanduo su citrina, įrankiai ir indai, elektroninis kvietimas.</p>
        </Package>
        <Package title="MINI PAKETAS" prices={["I–IV – 110 Eur", "V–VII ir švenčių dienomis – 130 Eur"]}>
          <p>Papildoma valanda rezervuojant iš anksto – 30 Eur. Papildoma valanda šventės metu – 40 Eur.</p><h3>Paketą sudaro:</h3><ul><li>2 val. studijos nuoma ir standartizuotas elektroninis kvietimas;</li><li>indai gėrimams, užkandžiams ir desertams;</li><li>suaugusiųjų ir vaikų stalo serviravimas studijos indais;</li><li>desertinio stalo balionų girlianda;</li><li>popierinės servetėlės, padėkliukai ir sausuolių kompozicijos;</li><li>pasirinktos spalvos foto fonas: rožinis, žydras arba kreminis;</li><li>minimaliai papuošta maitinimo kėdutė pirmajam gimtadieniui;</li><li>vanduo su citrina ir arbata.</li></ul><p>Kavos aparato nuoma – papildomai 20 Eur, užsakant iš anksto. Paketas ruošiamas 22 suaugusiesiems ir 10 vaikų.</p>
        </Package>
        <Package featured title="SPECIALUS KRIKŠTYNŲ PASIŪLYMAS – MAXI" prices={["I–IV 4 val. – 400 Eur", "V–VII ir švenčių dienomis 4 val. – 450 Eur", "I–IV 3 val. – 380 Eur", "V–VII ir švenčių dienomis 3 val. – 430 Eur", "I–IV 2 val. – 360 Eur", "V–VII ir švenčių dienomis 2 val. – 410 Eur"]}>
          <p>Papildoma valanda rezervuojant iš anksto – 30 Eur. Papildoma valanda šventės metu – 40 Eur.</p><h3>Paketas šventei be rūpesčio:</h3><ul><li>2–4 val. studijos nuoma ir specialiai Jums sukurtas teminis elektroninis kvietimas;</li><li>teminė foto sienelė su didele 250–300 balionų girlianda ir personalizuotu užrašu arba balionų pusmėnulio arka;</li><li>spalviškai priderinta desertinio stalo girlianda iš maždaug 100 balionų;</li><li>pasirinktos spalvos foto zonos fonas;</li><li>pilnas pagrindinio, vaikų ir desertinio stalo serviravimas;</li><li>teminis stalų dekoras, medžiaginės servetėlės, staltiesė arba takelis, vazos, žvakidės, gyvų gėlių kompozicijos ir personalizuotos detalės;</li><li>temiškai papuošta maitinimo kėdutė pirmajam gimtadieniui;</li><li>kavos aparatas, arbata ir vanduo su citrina;</li><li>pagalba patiekiant atsivežtą maistą, desertus ir gėrimus bei sudėliojant šventės atributiką.</li></ul>
        </Package>
        <Package title="SPECIALUS GIMTADIENIO PASIŪLYMAS – MAXI" prices={["I–IV 3 val. – 320 Eur", "V–VII ir švenčių dienomis 3 val. – 370 Eur", "I–IV 2 val. – 300 Eur", "V–VII ir švenčių dienomis 2 val. – 350 Eur"]}>
          <p>Papildoma valanda rezervuojant iš anksto – 30 Eur. Papildoma valanda šventės metu – 40 Eur.</p><h3>Paketas šventei be rūpesčio:</h3><ul><li>2–3 val. studijos nuoma ir individualus teminis elektroninis kvietimas;</li><li>foto sienelė su 150–200 balionų girlianda ir personalizuotu užrašu arba pusmėnulio arka;</li><li>50–70 balionų desertinio stalo girlianda ir pasirinktas foto zonos fonas;</li><li>pilnas pagrindinio, vaikų ir desertinio stalo serviravimas bei teminis dekoras;</li><li>gyvų gėlių kompozicijos, maitinimo kėdutės dekoras, kavos aparatas, arbata ir vanduo;</li><li>pagalba patiekiant maistą, desertus ir gėrimus.</li></ul><p>Paketas taip pat tinka lyties atskleidimo ir kūdikio sutikimo šventėms.</p>
        </Package>
        <Package title="PAPILDOMOS PASLAUGOS" prices={[]}>
          <table className="service-table"><tbody>
            <tr><td>Kavos aparato nuoma su kava, pienu ir cukrumi</td><td>20 Eur</td></tr><tr><td>Foto fonas renkantis tik studijos nuomą</td><td>10 Eur</td></tr><tr><td>Teminė foto arka arba sienelė su 200–250 balionų girlianda</td><td>130 Eur</td></tr><tr><td>Bendrinis / personalizuotas užrašas ant balionų sienelės</td><td>20 / 30 Eur</td></tr><tr><td>Teminė desertinio stalo girlianda, apie 100 balionų</td><td>80 Eur</td></tr><tr><td>Suaugusiųjų stalo teminis dekoras su serviravimu</td><td>80–120 Eur</td></tr><tr><td>Vaikų stalo teminis dekoras</td><td>40 Eur</td></tr><tr><td>Maitinimo kėdutės mini balionų girlianda ir dekoras</td><td>30 Eur</td></tr><tr><td>Helio balionų kompozicijos MINI / MIDI / MAXI</td><td>40 / 60 / 80 Eur</td></tr><tr><td>Helio balionai pagrindinio stalo dekorui, 7 vnt.</td><td>20 Eur</td></tr><tr><td>Staltiesės / stalo takelio nuoma</td><td>20 / 10 Eur</td></tr><tr><td>Medžiaginių servetėlių nuoma</td><td>1 Eur / vnt.</td></tr><tr><td>Indai ir įrankiai užkandžiams ar karštiems patiekalams</td><td>10 Eur</td></tr><tr><td>Personalo pagalba pasiruošiant ar šventės metu</td><td>60 Eur / val.</td></tr><tr><td>Momentinio fotoaparato nuoma (neįskaitant nuotraukų)</td><td>15 Eur / val.</td></tr>
          </tbody></table>
        </Package>
      </div></section>
      <section className="section--tight"><div className="container"><h2 className="section-heading">PAKETŲ AKIMIRKOS</h2><ImageGrid images={packageImages} label="Saulėta šventės paketas" /></div></section>
      <section className="section meetup-band"><div className="container narrow"><h2>Specialus pasiūlymas šeimų su mažyliais susitikimams</h2><p className="meetup-price">2 val. pasibuvimas mamai ar tėčiui su mažyliu – 10 Eur</p><ul><li>2 val. trukmės pasibuvimas</li><li>kava arba arbata</li><li>minimalus stalo serviravimas</li><li>mini vaišės</li></ul><p>Broliukui ar sesutei papildomai taikomas 5 Eur mokestis. Pasiūlymas galioja susidarius bent 5 šeimų grupei.</p></div></section>
    </>
  );
}
