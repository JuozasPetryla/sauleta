import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { media } from "@/data/site";

export const metadata: Metadata = { title: "Apie mus", description: "Susipažinkite su Saulėta švenčių studija ir vaikų žaidimų erdve Kaune." };

export default function AboutPage() {
  return (
    <>
      <Hero image={media("untitled-website-AoPG7EyyDPFbOrLN.png")} title="Apie mus" />
      <section className="section">
        <div className="container split-copy">
          <h2>KODĖL MES?</h2>
          <p>„Saulėta“ – tikri Jūsų švenčių namai. Čia šviesu, erdvu ir jauku: prie didelio stalo be vargo tilps 22 suaugusieji, minkšta sofa kviečia prisėsti ramiai kavos pertraukėlei, atskira virtuvės patalpa leis pamiršti apie pasiruošimo darbų netvarką, o stilingi foto fonai taps nuostabia šventės puošmena.</p>
          <p>Vaikų žaidimų erdvė kruopščiai atrinkta: dailūs mediniai ir minkšti žaislai, berniukams ir mergaitėms įdomios veiklos, saugūs ir linksmi užsiėmimai. Išalkusiems šventės mažyliams paruoštas atskiras, 10 sėdimų vietų turintis kampelis.</p>
        </div>
      </section>
    </>
  );
}
