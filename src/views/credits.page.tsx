import Image from "next/image";
import s from "./credits.page.module.css";
import TransitionLink from "@/components/TransitionLink";

export default function CreditsPage() {
  return (
    <div className={s.wrapper}>
      {/* FIXED NAV */}
      <nav className={s.navBack}>
        <TransitionLink href="/" className={s.backLink}>
          <span className={s.backArrow}>←</span>
          <span className={s.backText}>Précédent</span>
        </TransitionLink>
        <div className={s.navLabel}>Crédits</div>
      </nav>

      {/* Hero */}
      <h1 className={s.heroTitle}>MERCI À</h1>

      {/* FIXED FOOTER (bottom-left) */}
      <div className={s.footerInsta}>@doubleimpact.paris</div>

      {/* SCROLLABLE CONTENT */}
      <main className={s.content}>
        {/* Direction Artistique */}
        <section className={s.section}>
          <h2 className={s.sectionTitle}>La Direction Artistique</h2>
          <div className={s.sectionList}>
            Jeremy Pichard
            <br />
            Corentin Bahon
          </div>
        </section>

        {/* Image 1 */}
        <div className={s.sectionImage}>
          <Image
            src="/creditPlaceholer.png"
            alt="Double Impact card"
            width={266}
            height={346}
            style={{ width: "100%", height: "auto", borderRadius: "2px" }}
          />
        </div>

        {/* Les Travaux */}
        <section className={s.section}>
          <h2 className={s.sectionTitle}>Les Travaux</h2>
          <div className={s.sectionList}>Mon Papa</div>
        </section>

        {/* Image 2 */}
        <div className={`${s.sectionImage} ${s.img2}`}>
          <Image
            src="/creditPlaceholer.png"
            alt="Double Impact card"
            width={266}
            height={346}
            style={{ width: "100%", height: "auto", borderRadius: "2px" }}
          />
        </div>
      </main>
    </div>
  );
}
