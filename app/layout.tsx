import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sauletasvente.com"),
  title: { default: "Saulėta - Jūsų švenčių namai!", template: "%s | Saulėta" },
  description: "Stilinga vaikų žaidimų erdvė, komfortiškas suaugusiųjų susodinimas ir žaismingas foto kampelis gražiausioms Jūsų akimirkoms.",
  openGraph: {
    locale: "lt_LT",
    type: "website",
    siteName: "Saulėta. Švenčių namai",
    images: ["/media/_j3a9273---copy11-Yan3LXvnOPCD59Qr.jpg"],
  },
  icons: { icon: "/media/_j3a9467-AR0n0k8M2rueqa7l.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lt">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
