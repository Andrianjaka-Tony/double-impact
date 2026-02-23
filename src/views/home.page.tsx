import Image from "next/image";
import Link from "next/link";
import s from "./home.page.module.css";

export default function HomePage() {
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
            La Cuisine C&rsquo;est Avant Tout Une Histoire De<br />
            Ressenti Plus Que De Go&ucirc;t.<br />
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
                <div className={s.chapterName}>0. Prologue</div>
              </div>
              <div className={s.voirChapitres}>
                <Link href="/chapitres">Voir tous les chapitres</Link>
              </div>
            </div>
          </div>
          <div className={s.detailsCol}>
            <div className={s.hoursAddr}>
              <div className={s.hours}>Mar &mdash; Dim<br />19H &mdash; 22H30</div>
              <div className={s.address}>57 Rue Claude Rodier<br />Paris, 75009</div>
            </div>

            <div className={s.ctaRow}>
              <a className={s.cta} href="#">R&eacute;server</a>
              <a className={s.ctaArrow} href="#">
                Se rendre au restaurant <span className={s.ctaArrowText}>&nbsp;&#x2192;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <span className={s.footerInsta}>@doubleimpact.paris</span>
        <Link href="/credits">
          <span className={s.footerCredits}>Cr&eacute;dits</span>
        </Link>
      </footer>
    </div>
  );
}
