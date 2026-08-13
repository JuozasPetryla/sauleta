import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { media } from "@/data/site";

export const metadata: Metadata = { title: "Kaip suplanuoti Krikštynų šventę", description: "Žingsnis po žingsnio gidas, padėsiantis suplanuoti jaukią ir sklandžią Krikštynų šventę." };

export default function ChristeningGuide() {
  return (
    <article>
      <header className="article-header"><SiteHeader /><p className="eyebrow">Naudinga</p><h1>Kaip suplanuoti Krikštynų šventę: žingsnis po žingsnio gidas</h1><p className="article-meta">2024 m. liepos 11 d. · 2 min. skaitymo</p></header>
      <div className="article-cover"><Image src={media("4-mk393WVbK5cGZwEN.png")} alt="Krikštynų šventės planavimo gidas" fill priority sizes="100vw" /></div>
      <div className="container narrow article-body prose">
        <p>Krikštynos – ypatinga šeimos šventė, todėl jos planavimas gali atrodyti atsakingas ir sudėtingas. Aiški darbų seka padeda pasiruošti ramiai ir daugiau dėmesio skirti prasmingoms akimirkoms.</p>
        <h2>1. Nustatykite datą ir vietą</h2><p>Pirmiausia išsirinkite datą ir nuspręskite, kur vyks šventė po ceremonijos. Įvertinkite svečių skaičių, vaikams reikalingą erdvę, susisiekimą ir tai, kiek pasiruošimo darbų norėsite atlikti patys.</p>
        <h2>2. Suplanuokite Krikšto ceremoniją</h2><p>Susisiekite su pasirinkta bažnyčia, aptarkite galimas datas, reikalingus dokumentus ir ceremonijos eigą. Iš anksto pasikalbėkite su krikšto tėvais apie jų vaidmenį ir svarbiausias detales.</p>
        <h2>3. Pakvieskite svečius</h2><p>Paruoškite svečių sąrašą ir kvietimus išsiųskite pakankamai anksti. Kvietime nurodykite ceremonijos ir šventės vietą, laiką bei informaciją, kuri padės svečiams pasiruošti.</p>
        <h2>4. Apgalvokite meniu</h2><p>Rinkdamiesi maistą atsižvelkite į šventės trukmę, vaikų skaičių ir svečių poreikius. Iš anksto susitarkite dėl pristatymo, serviravimo ir karštųjų patiekalų pateikimo.</p>
        <h2>5. Pasirūpinkite dekoracijomis</h2><p>Pasirinkite spalvų paletę ir kelis pagrindinius motyvus. Foto sienelė, balionų girlianda, gyvos gėlės ir stalo tekstilė padės sukurti vientisą šventės vaizdą.</p>
        <h2>6. Suplanuokite veiklas</h2><p>Mažiesiems svečiams svarbu turėti saugią žaidimų erdvę, o suaugusiesiems – patogią vietą bendrauti. Galite numatyti simbolinę veiklą, palinkėjimų knygą ar šeimos fotografavimo laiką.</p>
        <h2>7. Apgalvokite smulkmenas</h2><p>Pasitikrinkite, kas pasirūpins tortu, žvakutėmis, dovanėlėmis, muzika ir atsivežtų daiktų sudėliojimu. Likus kelioms dienoms susidarykite trumpą galutinį sąrašą – jis leis šventės dieną jaustis ramiau.</p>
      </div>
    </article>
  );
}
