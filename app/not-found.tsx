import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return <section className="article-header" style={{ minHeight: "70svh" }}><SiteHeader /><p className="eyebrow">404</p><h1>Puslapis nerastas</h1><p>Ieškomas puslapis neegzistuoja arba jo adresas pasikeitė.</p><Link className="button" href="/">Grįžti į pradžią</Link></section>;
}
