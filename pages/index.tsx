import React from "react";
import Head from "next/head";

interface NewsItem { date: string; title: string; href: string; }
interface EventItem { date: string; title: string; href: string; }
interface QuickLink { icon: string; label: string; href: string; }

const NEWS: NewsItem[] = [
  { date: "01.06.2026", title: "Patrick Mutzenberg assure la fonction de maire a partir du 1er juin 2026", href: "/actualites/patrick-mutzenberg-assure-la-fonction-de-maire-partir-du-1er-juin-2026" },
  { date: "29.05.2026", title: "Retour en images: vernissage de exposition Concreto", href: "/actualites/retour-en-images-vernissage-de-lexposition-concreto" },
  { date: "27.05.2026", title: "Appel doffres: buvette du Boulodrome", href: "/actualites/appel-doffres-buvette-du-boulodrome" },
];

const EVENTS: EventItem[] = [
  { date: "02 juin", title: "Cross-training", href: "/agenda/cross-training" },
  { date: "03 juin", title: "Le Felin fete sa premiere annee", href: "/agenda/le-felin-fete-sa-premiere-annee" },
  { date: "03 juin", title: "Apero nutri carougeois: Les proteines au coeur des enjeux", href: "/agenda/apero-nutri-carougeois-les-proteines-au-coeur-des-enjeux" },
  { date: "03 juin", title: "Vernissage: Alibert et Arve les ecritures de la riviere", href: "/agenda/vernissage-de-lexposition-alibert-et-larve-les-ecritures-de-la-riviere" },
];

const QUICK_LINKS: QuickLink[] = [
  { icon: "🏀", label: "Offre sportive", href: "/sport" },
  { icon: "🎉", label: "Fetes et manifestations", href: "/vie-pratique/culture-fetes-et-loisirs/fetes-et-manifestations" },
  { icon: "🏛", label: "Musee de Carouge", href: "/musee-de-carouge" },
  { icon: "🏢", label: "Entrepreneuriat", href: "/entreprises" },
  { icon: "🚧", label: "Chantiers en cours", href: "/vie-pratique/espace-public/chantiers-et-travaux" },
  { icon: "🏠", label: "Louer une salle", href: "/vie-pratique/salles-materiel-et-evenements/salles-materiel-et-stands" },
  { icon: "💼", label: "Offres demploi", href: "/carrieres/offres-emploi" },
  { icon: "♻", label: "Dechets", href: "/vie-pratique/habiter-carouge/dechets-tri-et-recyclage/que-faire-de-vos-dechets" },
  { icon: "🚲", label: "Mobilite", href: "/vie-pratique/mobilite" },
  { icon: "🥕", label: "Marches", href: "/marches" },
  { icon: "📰", label: "Journal communal", href: "/medias" },
  { icon: "👵", label: "Seniors", href: "/seniors" },
];

const C = { red: "#C8102E", darkRed: "#A00D24", lightGray: "#F5F5F5", medGray: "#E0E0E0", darkGray: "#333333", textGray: "#555555", white: "#FFFFFF" };

const TopBar = () => (
  <div style={{ backgroundColor: C.red, padding: "6px 0", fontSize: 13 }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "flex-end", gap: 24 }}>
      <a href="/fr" style={{ color: C.white, textDecoration: "none" }}>Francais</a>
      <a href="/de" style={{ color: C.white, textDecoration: "none" }}>Deutsch</a>
      <a href="/it" style={{ color: C.white, textDecoration: "none" }}>Italiano</a>
      <a href="/en" style={{ color: C.white, textDecoration: "none" }}>English</a>
    </div>
  </div>
);

const Header = () => (
  <header style={{ borderBottom: "3px solid " + C.red, padding: "12px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 26, fontWeight: 700, color: C.darkGray }}>Carouge</div>
        <div style={{ fontSize: 11, color: C.textGray }}>Ville dynamique et durable, cite daccueil et de culture</div>
      </div>
      <nav style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 600 }}>
        <a href="/actualites" style={{ color: C.darkGray, textDecoration: "none" }}>Actualites</a>
        <a href="/vie-politique" style={{ color: C.darkGray, textDecoration: "none" }}>Vie politique</a>
        <a href="/agenda" style={{ color: C.darkGray, textDecoration: "none" }}>Agenda</a>
        <a href="/lieux" style={{ color: C.darkGray, textDecoration: "none" }}>Explorer</a>
        <a href="/vie-pratique" style={{ color: C.darkGray, textDecoration: "none" }}>Vie pratique</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", color: C.white, padding: "52px 0 44px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "url(https://images.unsplash.com/photo-1569949458471-66f8370bd339?w=1400&q=80) center/cover no-repeat", opacity: 0.22 }} />
    <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 44, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-1px" }}>Carouge</h1>
      <p style={{ fontSize: 18, margin: "0 0 30px", opacity: 0.9 }}>Ville dynamique et durable, cite daccueil et de culture</p>
      <div style={{ backgroundColor: C.red, display: "inline-flex", alignItems: "center", gap: 10, padding: "11px 22px", borderRadius: 4, fontSize: 15, fontWeight: 600 }}>
        Quoi de neuf a Carouge ?
        <a href="/actualites" style={{ color: C.white, textDecoration: "underline", fontSize: 14 }}>Voir les actualites</a>
      </div>
    </div>
  </div>
);

const NewsSection = () => (
  <div>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: C.darkGray, marginBottom: 18, paddingBottom: 10, borderBottom: "3px solid " + C.red }}>A la une</h2>
    <p style={{ color: C.textGray, fontSize: 14, marginBottom: 16 }}>
      Quoi de neuf a Carouge ? Zoomez sur les dernieres actions et informations officielles de la Ville!
    </p>
    {NEWS.map((n, i) => (
      <a key={i} href={n.href} style={{ backgroundColor: C.lightGray, borderRadius: 6, padding: "14px 18px", marginBottom: 12, display: "block", textDecoration: "none", color: C.darkGray, borderLeft: "4px solid " + C.red }}>
        <div style={{ fontSize: 12, color: C.red, fontWeight: 700, marginBottom: 4 }}>{n.date}</div>
        <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{n.title}</div>
      </a>
    ))}
    <a href="/actualites" style={{ display: "inline-block", marginTop: 12, color: C.red, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Voir toute lactualite</a>
  </div>
);

const AgendaSection = () => (
  <div>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: C.darkGray, marginBottom: 18, paddingBottom: 10, borderBottom: "3px solid " + C.red }}>Agenda</h2>
    <p style={{ color: C.textGray, fontSize: 14, marginBottom: 16 }}>
      Concerts, expositions, rencontres, manifestations... Il y en a pour tous les gout!
    </p>
    {EVENTS.map((e, i) => (
      <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: "1px solid " + C.medGray }}>
        <div style={{ backgroundColor: C.red, color: C.white, borderRadius: 4, padding: "4px 8px", fontSize: 12, fontWeight: 700, textAlign: "center", minWidth: 52, lineHeight: 1.3 }}>{e.date}</div>
        <a href={e.href} style={{ textDecoration: "none" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.darkGray, lineHeight: 1.4 }}>{e.title}</div>
        </a>
      </div>
    ))}
    <a href="/agenda" style={{ display: "inline-block", marginTop: 14, color: C.red, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Voir tout lagenda</a>
  </div>
);

const QuickLinks = () => (
  <div style={{ backgroundColor: C.lightGray, padding: "32px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: C.darkGray, marginBottom: 20, paddingBottom: 10, borderBottom: "3px solid " + C.red }}>Services et informations</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {QUICK_LINKS.map((l, i) => (
          <a key={i} href={l.href} style={{ backgroundColor: C.white, borderRadius: 6, padding: "16px 12px", textAlign: "center", textDecoration: "none", color: C.darkGray, border: "1px solid " + C.medGray, display: "block" }}>
            <span style={{ fontSize: 28, marginBottom: 8, display: "block" }}>{l.icon}</span>
            <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{l.label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ExploreSection = () => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: C.darkGray, marginBottom: 10 }}>Explorez Carouge</h2>
      <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.6, marginBottom: 20 }}>
        Une ville, cest aussi un territoire et des lieux a vivre. Nous avons recenses les principaux pour vous. Envie dexplorer ?
      </p>
      <a href="/lieux" style={{ display: "inline-block", backgroundColor: C.red, color: C.white, padding: "10px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Trouver un lieu</a>
    </div>
    <div style={{ background: "linear-gradient(135deg, " + C.red + " 0%, " + C.darkRed + " 100%)", borderRadius: 8, padding: "28px 32px", color: C.white, textAlign: "center" }}>
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Carouge pour vous</div>
      <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 16 }}>
        La Ville de Carouge a selectionne des informations utiles selon plusieurs profils.
      </p>
      <a href="/profil" style={{ display: "inline-block", backgroundColor: C.white, color: C.red, padding: "8px 20px", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 13 }}>Decouvrir</a>
    </div>
  </div>
);

const ProfilesStrip = () => (
  <div style={{ backgroundColor: C.darkGray, padding: "28px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
      {["Enfants en bas-age", "Enfants, ados et jeunes", "Seniors", "Familles", "Entrepreneurs"].map((p, i) => (
        <a key={i} href={"/profil/" + p.toLowerCase().replace(/\s/g, "-")} style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: C.white, padding: "8px 20px", borderRadius: 20, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>{p}</a>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ backgroundColor: C.darkGray, color: C.white, padding: "40px 0 20px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 32 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: C.white }}>Services</div>
          <a href="/sport" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Offre sportive</a>
          <a href="/culture" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Culture</a>
          <a href="/social" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Affaires sociales</a>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: C.white }}>Vie pratique</div>
          <a href="/dechets" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Dechets</a>
          <a href="/mobilite" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Mobilite</a>
          <a href="/salles" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Locations de salles</a>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: C.white }}>Politique</div>
          <a href="/conseil" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Conseil municipal</a>
          <a href="/administratif" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Conseil administratif</a>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: C.white }}>Contact</div>
          <a href="/contact" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Nous contacter</a>
          <a href="/plan" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, marginBottom: 6 }}>Plan de la ville</a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
        <span>Ville de Carouge - 2026</span>
        <span>Realise avec Next.js et React</span>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div style={{ margin: 0 }}>
      <Head>
        <title>Accueil | Ville de Carouge</title>
        <meta name="description" content="Ville dynamique et durable, cite daccueil et de culture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopBar />
      <Header />
      <Hero />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 16px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 36 }}>
        <NewsSection />
        <AgendaSection />
      </div>
      <QuickLinks />
      <ExploreSection />
      <ProfilesStrip />
      <Footer />
    </div>
  );
}
