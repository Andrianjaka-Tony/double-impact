"use client";

import Image from "next/image";
import s from "./chapitres.page.module.css";
import TransitionLink from "@/components/TransitionLink";
import { useEffect } from "react";
import gsap from "gsap";

const chapters = [
  {
    number: "01",
    title: "BENGALORE",
    date: "16.03.2026",
    status: "Toujours en cours",
    image: "/ChapitreImage.png",
    details: `L’histoire de Double Impact naît il y a plus de dix ans dans le Morbihan, où Etienne et Mickael se rencontrent. 
    
    Rapidement, ils partagent une même passion pour la cuisine, le service et les lieux de vie.
    
    Les années passent, leur lien se renforce, chacun forge son expérience. Puis à Paris, leurs chemins se recroisent. 
    
    Une évidence s’impose : créer ensemble. Double Impact devient alors un lieu vivant où chaque repas raconte une histoire.`,
    imageAlt: "Bengalore",
    hasArrow: true,
  },
  {
    number: "02",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "03",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "04",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "05",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "06",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "07",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
  {
    number: "08",
    title: "????",
    date: "??.??.????",
    status: "??.??.????",
    image: "/placehoderChapitre.png",
    details:
      "Lorem ipsum dolor sit amet consectetur. Mattis fermentum enim eget bibendum. Netus viverra vel viverra amet rutrum egestas est in. Donec lectus justo nibh laoreet felis id donec elementum purus. Non nibh malesuada quis eget. Nunc adipiscing lacus netus sit. Consectetur malesuada varius.",
    imageAlt: "autre",
    hasArrow: false,
  },
];

export default function ChapitresPage() {
  useEffect(() => {
    gsap.to(`.${s.card}`, { opacity: 1, stagger: 0.05, duration: 0.5, y: 0 });
  }, []);

  return (
    <div className={s.page}>
      {/* HEADER */}
      <header className={s.header}>
        <TransitionLink href="/" className={s.backLink}>
          <span className={s.backArrow}>←</span>
          <span className={s.backText}>Précédent</span>
        </TransitionLink>
        <TransitionLink href="/" className={s.logo}>
          <Image
            src="/doubleImpact.svg"
            alt="logo Double Impact"
            width={490}
            height={21}
            style={{
              width: "clamp(15.3125rem, 9.1938rem + 25.1025vw, 30.625rem)",
              height: "auto",
            }}
          />
        </TransitionLink>
      </header>

      {/* GALLERY */}
      <div className={s.gallery}>
        {chapters.map((chapter) => (
          <article key={chapter.number} className={s.card}>
            <div className={s.cardImage}>
              <Image
                src={chapter.image}
                alt={chapter.imageAlt}
                width={318}
                height={462}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className={s.blurHover}>
                <Image
                  src="/logoPicto.svg"
                  alt={chapter.imageAlt}
                  width={50}
                  height={15}
                />
                <pre>{chapter.details}</pre>
              </div>
            </div>
            <div className={s.cardMeta}>
              <div className={s.cardNumber}>{chapter.number}</div>
              <h2 className={s.cardTitle}>{chapter.title}</h2>
              <div className={s.cardTimeline}>
                <span className={s.cardDate}>{chapter.date}</span>
                {chapter.hasArrow ? (
                  <div className={s.cardArrow}>
                    <Image
                      src="/arrow.svg"
                      alt=""
                      width={130}
                      height={12}
                      style={{ width: "100%" }}
                    />
                  </div>
                ) : (
                  <div className={s.cardArrow} />
                )}
                <span className={s.cardStatus}>{chapter.status}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <span className={s.footerInsta}>
          <a
            href="https://www.instagram.com/doubleimpact.paris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @doubleimpact.paris
          </a>
        </span>
      </footer>
    </div>
  );
}
