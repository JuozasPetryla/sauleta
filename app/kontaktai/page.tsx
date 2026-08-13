import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { contact, media } from "@/data/site";

export const metadata: Metadata = { title: "Kontaktai", description: "Susisiekite su Saulėta švenčių studija. Chemijos g. 17C, Kaunas." };

export default function ContactPage() {
  return (
    <><Hero image={media("untitled-website-AoPG7EyyDPFbOrLN.png")} title="Kontaktai" />
      <section className="section"><div className="container">
        <h2 className="contact-heading">Jeigu turite klausimų – susisiekite.</h2>
        <div className="social-links"><a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Saulėta Facebook"><span aria-hidden="true">f</span></a><a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Saulėta Instagram"><span aria-hidden="true">ig</span></a></div>
        <div className="contact-grid"><iframe className="map-frame" title="Saulėta vieta žemėlapyje" loading="lazy" src="https://www.google.com/maps?q=Chemijos%20g.%2017C%2C%20Kaunas&output=embed" /><div className="contact-photo"><Image src={media("kaunas-dainava-chemijos-g-mv09K8y0G2uKlMyp.jpg")} alt="Pastatas Chemijos gatvėje, kuriame įsikūrusi Saulėta" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></div>
        <div className="contact-details"><div><h2>Aplankykite mus:</h2><p>{contact.address}</p></div><div><h2>Kontaktai:</h2><p><a href={`tel:${contact.phoneHref}`}>Skambinkite: {contact.phone}</a><br /><a href={`mailto:${contact.email}`}>Rašykite: {contact.email}</a></p></div></div>
      </div></section>
    </>
  );
}
