import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { media } from "@/data/site";

export const metadata: Metadata = { title: "Atsiliepimai", description: "Šeimų atsiliepimai apie Saulėta švenčių studiją Kaune." };

const reviews = ["agn-YD0DnW6zVei34L6D.png", "atsiliepimas2-Aq26kK23R8tX5740.png", "atsiliepimas3-d953vn6gVbU460jL.png", "atsiliepimas4-YKba9gxZlGU6eg2G.png", "atsiliepimas5-YNqp8goGgLi0qwQX.png", "atsiliepimas6-mv04oKy7xoUBMJKZ.png", "atsiliepimas7-m5K27QxBgesJpe0a.png", "atsiliepimas8-m6LD5Xo7y9toWQww.png", "atsiliepimas10-dWxwjgp6VMH0Jy4b.png", "atsiliepimas11-YZ974gWjxNFPP5w7.png", "atsiliepimas12-mxBlkKELKwuQVM50.png"];
const moments = ["23.08.09-tuktuk-49-ALpOlgJ054Cz1D2Q.jpg", "23.08.09-tuktuk-17-dWxwjglrZEi9eMy6.jpg", "23.08.09-tuktuk-63-A0xWgRJxKvHJvjWK.jpg", "aukse-AE0Mzgyv68SDZBQz.png", "irenute-A3QPKRMWwMc5bZrn.png", "ruta-AoP6y9paPZTg9V41.png"];

export default function ReviewsPage() {
  return <><Hero image={media("untitled-website-2-YbN91Db6NruXXDrB.png")} title="Atsiliepimai" position="center 56%" /><section className="section--tight"><div className="container review-grid"><div className="review-column">{reviews.map((image, index) => <Image className="review-image" key={image} src={media(image)} alt={`Klientų atsiliepimai, dalis ${index + 1}`} width={900} height={1100} sizes="(max-width: 760px) 100vw, 55vw" />)}</div><div className="review-column">{moments.map((image, index) => <Image className="review-image" key={image} src={media(image)} alt={`Saulėta šventės akimirka ${index + 1}`} width={800} height={1000} sizes="(max-width: 760px) 100vw, 42vw" />)}</div></div></section></>;
}
