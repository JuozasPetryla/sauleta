import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { media } from "@/data/site";

export const metadata: Metadata = { title: "Naudinga", description: "Naudingi Saulėta patarimai planuojant vaikų šventę, Krikštynas ir stalo dekorą." };

const articles = [
  { href: "/pagrindinio-stalo-dekoras", title: "Pagrindinio stalo dekoras", text: "Ar verta skirti dėmesį pagrindinio stalo dekorui ir kokios detalės kuria vientisą šventės vaizdą?", image: "unnamed-1-dOq8NG3G6EFDqxrb.jpg" },
  { href: "/kaip-suplanuoti-krikstynu-svente-zingsnis-po-zingsnio-gidas", title: "Kaip suplanuoti Krikštynų šventę", text: "Žingsnis po žingsnio gidas, padėsiantis ramiai suplanuoti prasmingą šeimos šventę.", image: "4-mk393WVbK5cGZwEN.png" },
];

export default function UsefulPage() {
  return <><Hero image={media("image00529-m2WQW3Gy1zUOOJQa.jpeg")} title="Naudinga" /><section className="section"><div className="container"><h2 className="section-heading">PATARIMAI JŪSŲ ŠVENTEI</h2><div className="article-list">{articles.map((article) => <Link className="article-card" href={article.href} key={article.href}><div className="article-card-image"><Image src={media(article.image)} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><h2>{article.title}</h2><p>{article.text}</p><span>Skaityti <ArrowUpRight /></span></Link>)}</div></div></section></>;
}
