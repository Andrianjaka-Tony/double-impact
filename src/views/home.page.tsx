"use client";

import Image from "next/image";
import s from "./home.page.module.css";
import TransitionLink from "@/components/TransitionLink";
import { MouseEvent } from "react";
import gsap from "gsap";

export default function HomePage() {
  const handleMouseOver = (e: MouseEvent) => {
    const element = document.getElementById("image-hover");
    gsap.to(element, { opacity: 1, duration: 0.2 });
  };

  const handleMouseOut = (e: MouseEvent) => {
    const element = document.getElementById("image-hover");
    gsap.to(element, { opacity: 0, duration: 0.2 });
  };

  return (
    <div className={s.page}>
      {/* HERO */}
      <div className={s.hero}>
        <Image
          src="/DOUBLE_IMPACT_VERTICAL_BLANC.svg"
          alt="Double Impact Restaurant Paris"
          width={1344}
          height={265}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* container */}
      <div className={s.container}>
        <div className={s.left}>
          <p className={s.tagline}>
            La Cuisine C&rsquo;est Avant Tout Une Histoire De Ressenti Plus Que De Go&ucirc;t.
            <br />
            C&rsquo;est Tous Nos Sens Qui Sont En Alerte.
          </p>
          <div className={s.menuCol}>
            <div className={s.menuTitle}>Menu Unique &mdash; 95&euro;</div>
            <div className={s.menuSub}>7 Services</div>
          </div>
        </div>

        <div className={s.right}>
          <div className={s.rightCol}>
            <div className={s.chapterRow}>
              <div>
                <div className={s.chapterLabel}>Chapitre Actuel</div>
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className={s.chapterName}
                >
                  0. Prologue
                </div>
              </div>
              <div className={s.voirChapitres}>
                <TransitionLink href="/chapitres">
                  Voir tous les chapitres
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className={s.detailsCol}>
            <div className={s.hoursAddr}>
              <div className={s.hours}>
                Mar &mdash; Dim
                <br />
                19H &mdash; 22H30
              </div>
              <div className={s.address}>
                57 Rue Claude Rodier
                <br />
                Paris, 75009
              </div>
            </div>

            <div className={s.ctaRow}>
              <a className={s.cta} href="https://bookings.zenchef.com/results?rid=383003" target="_blank" rel="noopener noreferrer">
                R&eacute;server
              </a>
              <a
                className={s.ctaArrow}
                href="https://maps.app.goo.gl/hPwcU99mmVB4Qhh99"
                target="_blank"
                rel="noopener noreferrer"
              >
                Se rendre au restaurant{" "}
                <span className={s.ctaArrowText}>&nbsp;&#x2192;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.footerLeft}>
          <span className={s.footerPhone}>
            <a href="tel:+33699804587">
              +33 6 99 80 45 87
            </a>
          </span>
          <span className={s.footerInsta}>
            <a
              href="https://www.instagram.com/doubleimpact.paris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @doubleimpact.paris
            </a>
          </span>
        </div>
        <TransitionLink href="/credits" className={s.footerCredits}>
          Cr&eacute;dits
        </TransitionLink>
      </footer>

      <div id="image-hover" style={{ opacity: 0 }} className={s.imageHover}>
        <img src={"/ChapitreImage.png"} alt="Bengalore" />
      </div>
    </div>
  );
}
