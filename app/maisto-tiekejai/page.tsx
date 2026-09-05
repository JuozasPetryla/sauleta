import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";
import { foodImages, media } from "@/data/site";

export const metadata: Metadata = { title: "Maisto tiekėjai", description: "Saulėta rekomenduojami švenčių maisto tiekėjai, meniu ir užsakymo informacija." };

export default function SuppliersPage() {
  return (
    <>
      <Hero image={media("20241207_141727-AE0aaLrRJMfgnDBZ.jpg")} position="center 58%" />
      <section className="section"><div className="container supplier-block">
        <div><p className="eyebrow">Maistas Jūsų šventei</p><h2>ĮSIMINTINOS AKIMIRKOS YRA IR APIE SKANŲ MAISTĄ</h2></div>
        <div>
          <p>Pristatome „Saulėta“ maisto tiekėjus – „Kitchen Obsession“, „TastyBite“ ir „MUUS – art.of.bites“.</p>
          <h3>Mūsų tiekėjai pasižymi:</h3>
          <ul className="benefit-list"><li>aukšta kokybe ir estetika;</li><li>unikaliu skoniu;</li><li>užkandžių, karštų patiekalų ir desertų įvairove;</li><li>draugiškomis kainomis.</li></ul>
        </div>
      </div></section>
      <section className="section section--soft"><div className="container supplier-block">
        <h2>MAŽIAU RŪPESČIŲ IKI ATVYKSTANT SVEČIAMS</h2>
        <div><p>Užsakytas maistas atvežamas į studiją ir sudėliojamas į specialias lėkštes. Užsisakant karštus patiekalus, Jums nereikia rūpintis jų pateikimu – juos patiekiame ant stalų.</p><p>Galite atsivežti ir savo maistą ar pasirinkti kitus tiekėjus be papildomo mokesčio.</p><p><strong>Užsisakant iš mūsų tiekėjų taikomas 10 Eur pristatymo mokestis.</strong> Jei karštieji patiekalai pristatomi atskirai nuo užkandžių, papildomai taikomas 10 Eur mokestis.</p>
          <div className="button-row"><a className="button" href={media("meniu-YrDW21anJLUPJMjp.pdf")} target="_blank"><Download />„TastyBite“ meniu</a><a className="button" href={media("muus_art.of.bites-ua3-4kanda3-4ia3-pasia-lymas-su-vaika3-meniu-Yan04p24NLI1Z4L6.pdf")} target="_blank"><Download />„MUUS“ meniu</a><a className="button button--secondary" href="http://kitchenobsession.lt/" target="_blank" rel="noreferrer">„Kitchen Obsession“<ExternalLink /></a></div>
        </div>
      </div></section>
      <section className="section--tight gallery-showcase" id="maisto-galerija"><div className="container"><div className="gallery-heading"><p className="eyebrow">Skoniai ir pateikimas</p><h2>Maistas, kuris puošia šventę</h2></div><ImageGrid images={foodImages} className="editorial-grid editorial-grid--food" label="Šventės maistas" sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 67vw" /></div></section>
    </>
  );
}
