import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/apie", "/galerija", "/paketai-ir-ju-kainos", "/maisto-tiekejai", "/atsiliepimai", "/kontaktai", "/naudinga", "/pagrindinio-stalo-dekoras", "/kaip-suplanuoti-krikstynu-svente-zingsnis-po-zingsnio-gidas"];
  return routes.map((route) => ({ url: `https://sauletasvente.com${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
