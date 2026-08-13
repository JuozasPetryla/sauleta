import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-brand">Saulėta</Link>
          <p>Jūsų švenčių namai Kaune.</p>
        </div>
        <div className="footer-contact">
          <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer"><MapPin />{contact.address}</a>
          <a href={`tel:${contact.phoneHref}`}><Phone />{contact.phone}</a>
          <a href={`mailto:${contact.email}`}><Mail />{contact.email}</a>
        </div>
        <div className="footer-socials">
          <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><span aria-hidden="true">f</span></a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><span aria-hidden="true">ig</span></a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Saulėta. Švenčių namai</div>
    </footer>
  );
}
