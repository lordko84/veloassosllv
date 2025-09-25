import React from "react";
import { motion } from "framer-motion";
import { Bike, MapPin, Mail, Calendar, Users, Heart, Facebook, Instagram, Phone, BikeIcon } from "lucide-react";

// Simple helper components
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-24" aria-labelledby={`${id}-title`}>
    <Container>
      <div className="mb-10 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-700">{eyebrow}</p>
        )}
        {title && (
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-600">{subtitle}</p>
        )}
      </div>
      {children}
    </Container>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-medium text-lime-800">
    {children}
  </span>
);

export default function VeloClubSLV() {
  const nav = [
    { href: "#accueil", label: "Accueil" },
    { href: "#sorties", label: "Sorties" },
    { href: "#evenements", label: "Événements" },
    { href: "#adhesion", label: "Adhésion" },
    { href: "#itineraire", label: "Itinéraires" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  const rides = [
    { jour: "Mercredi", heure: "18:30", type: "Route tranquille", niveau: "Débutant", point: "Mairie" },
    { jour: "Samedi", heure: "09:00", type: "Gravel / VTC", niveau: "Intermédiaire", point: "Place du Marché" },
    { jour: "Dimanche", heure: "08:30", type: "Route sportive", niveau: "Confirmé", point: "Salle des Fêtes" },
  ];

  const events = [
    { date: "12 oct.", titre: "Randonnée des Vignes", note: "Boucles 25/45/70 km • ravitos" },
    { date: "9 nov.", titre: "Atelier réparation", note: "Freins & réglages dérailleur" },
    { date: "7 déc.", titre: "Téléthon à vélo", note: "Tour solidaire autour du bourg" },
  ];

  const tarifs = [
    { nom: "Jeune (-18)", prix: "10€", details: "Assurance comprise" },
    { nom: "Adulte", prix: "25€", details: "Licence loisir incluse" },
    { nom: "Famille", prix: "40€", details: "Jusqu’à 4 personnes" },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Container className="flex items-center justify-between py-3">
          <a href="#accueil" className="flex items-center gap-2 font-semibold">
            <Bike className="h-6 w-6" aria-hidden />
            <span className="sr-only">Logo du club</span>
            Vélo Club Saint‑Léger‑les‑Vignes
          </a>
          <nav aria-label="Navigation principale">
            <ul className="hidden gap-6 text-sm font-medium sm:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded-full px-3 py-2 hover:bg-gray-100">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-lime-50 to-white">
        <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <Pill>Association locale • ~3 000 habitants</Pill>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Pédalons ensemble à Saint‑Léger‑les‑Vignes
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-700">
              Le Vélo Club SLV rassemble les cyclistes de tous âges et de tous niveaux : route, gravel, VTC et VTT. Sorties hebdomadaires, événements conviviaux et entraide mécanique au cœur du bourg.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#adhesion" className="rounded-2xl bg-lime-600 px-5 py-3 text-white shadow hover:bg-lime-700">
                Adhérer au club
              </a>
              <a href="#sorties" className="rounded-2xl border border-gray-300 px-5 py-3 hover:bg-gray-50">
                Voir les sorties
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4"/> 60 adhérents</span>
              <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4"/> Bénévole & ouvert à tous</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
              {/* Decorative illustration */}
              <svg viewBox="0 0 800 600" className="h-full w-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#bef264"/>
                    <stop offset="100%" stopColor="#84cc16"/>
                  </linearGradient>
                </defs>
                <rect width="800" height="600" fill="#f7fee7"/>
                <g opacity="0.15">
                  <circle cx="650" cy="120" r="100" fill="url(#g1)" />
                  <circle cx="120" cy="480" r="120" fill="url(#g1)" />
                </g>
                <g stroke="#14532d" strokeWidth="6" fill="none">
                  <circle cx="260" cy="430" r="60"/>
                  <circle cx="480" cy="430" r="60"/>
                  <path d="M200 430 L300 300 L440 300 L540 430"/>
                  <path d="M300 300 L350 250 L430 250"/>
                </g>
                <g fill="#14532d">
                  <rect x="370" y="230" width="24" height="30" rx="4"/>
                </g>
              </svg>
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-4 py-3 shadow ring-1 ring-gray-200">
              <p className="text-sm font-medium">Rendez‑vous • <span className="font-semibold">Place du Marché</span></p>
              <p className="text-xs text-gray-600">Stationnement facile • Fontaine à eau</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Sorties */}
      <Section id="sorties" eyebrow="Chaque semaine" title="Sorties encadrées" subtitle="Trois rendez‑vous réguliers pour rouler en sécurité et à son rythme. Casque obligatoire." >
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Jour', 'Heure', 'Type', 'Niveau', 'Point de départ'].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {rides.map((r, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-sm">{r.jour}</td>
                  <td className="px-4 py-3 text-sm">{r.heure}</td>
                  <td className="px-4 py-3 text-sm">{r.type}</td>
                  <td className="px-4 py-3 text-sm">{r.niveau}</td>
                  <td className="px-4 py-3 text-sm">{r.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">Conseil : arrivez 10 min en avance, emportez eau, chambre à air et veste coupe‑vent.</p>
      </Section>

      {/* Événements */}
      <Section id="evenements" eyebrow="Agenda local" title="Événements à venir" subtitle="Inscriptions ouvertes en ligne ou sur place.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <div key={i} className="rounded-2xl border p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-lime-700">{e.date}</p>
                  <h3 className="mt-1 text-lg font-bold">{e.titre}</h3>
                  <p className="mt-1 text-sm text-gray-600">{e.note}</p>
                </div>
                <Calendar className="h-5 w-5 text-gray-400" aria-hidden />
              </div>
              <a href="#contact" className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black">Je participe</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Adhésion */}
      <Section id="adhesion" eyebrow="Saison 2025" title="Adhérer au club" subtitle="Tarifs accessibles pour favoriser la pratique. Réduction famille sur justificatif.">
        <div className="grid gap-6 lg:grid-cols-3">
          {tarifs.map((t, i) => (
            <div key={i} className="flex flex-col justify-between rounded-2xl border p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold">{t.nom}</h3>
                <p className="mt-1 text-3xl font-extrabold">{t.prix}</p>
                <p className="mt-1 text-sm text-gray-600">{t.details}</p>
              </div>
              <a href="#contact" className="mt-6 inline-block rounded-xl bg-lime-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-lime-700">Demander le bulletin</a>
            </div>
          ))}
        </div>
        <ul className="mt-6 list-inside list-disc text-sm text-gray-600">
          <li>Certificat médical conseillé (moins d’un an) pour les sorties sportives.</li>
          <li>Casque et éclairages obligatoires de nuit.</li>
          <li>Assurance responsabilité civile requise (assurance club possible).</li>
        </ul>
      </Section>

      {/* Itinéraires */}
      <Section id="itineraire" eyebrow="Autour des vignes" title="Idées d’itinéraires" subtitle="Partez découvrir les chemins viticoles et les petites routes autour de Saint‑Léger‑les‑Vignes.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { km: 12, nom: "Boucle familiale du bourg", surface: "majorité voies partagées", depart: "Mairie" },
            { km: 28, nom: "Route des Coteaux", surface: "route", depart: "Place du Marché" },
            { km: 45, nom: "Gravel des Vignes", surface: "chemins & petites routes", depart: "Salle des Fêtes" },
          ].map((it, i) => (
            <div key={i} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{it.nom}</h3>
                <Pill>{it.km} km</Pill>
              </div>
              <p className="mt-1 text-sm text-gray-600">Surface : {it.surface}</p>
              <p className="text-sm text-gray-600">Départ : {it.depart}</p>
              <button className="mt-3 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">Télécharger GPX</button>
            </div>
          ))}
        </div>
      </Section>

      {/* Galerie (placeholder) */}
      <Section id="galerie" eyebrow="Souvenirs" title="Galerie" subtitle="Quelques moments de nos sorties. (Remplacez par vos propres photos)">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"></div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="On vous répond vite" title="Contact" subtitle="Pour toute question, inscription ou partenariat local.">
        <div className="grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()} aria-label="Formulaire de contact">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Nom</label>
                <input required className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-lime-200 focus:ring" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-lime-200 focus:ring" placeholder="vous@exemple.fr" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-lime-200 focus:ring" placeholder="Dites‑nous tout…" />
            </div>
            <button className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-black">Envoyer</button>
            <p className="mt-3 text-xs text-gray-500">En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à votre demande (RGPD).</p>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-bold">Coordonnées</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4"/> 44710 Saint‑Léger‑les‑Vignes</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4"/> contact@veloclub-slv.fr</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4"/> 06 00 00 00 00</li>
                <li className="flex items-center gap-3"><Facebook className="h-4 w-4"/> facebook.com/veloclubslv</li>
                <li className="flex items-center gap-3"><Instagram className="h-4 w-4"/> @veloclub_slv</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-bold">Partenaires locaux</h3>
              <ul className="mt-3 list-inside list-disc text-sm text-gray-700">
                <li>Maison des Associations de Saint‑Léger‑les‑Vignes</li>
                <li>Commerçants du bourg</li>
                <li>Clubs voisins (route & VTT)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Infos pratiques */}
      <Section id="infos" eyebrow="Sécurité & pratique" title="Infos utiles">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-bold">Règles de sécurité</h3>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-700">
              <li>Respect du code de la route et des autres usagers.</li>
              <li>Gilet haute visibilité dès la tombée de la nuit.</li>
              <li>Roulez à deux de front maximum, en file indienne si nécessaire.</li>
              <li>Prévenez les dangers et attendez au sommet des côtes.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-bold">Fonctionnement de l’association</h3>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-700">
              <li>Assemblée générale annuelle à l’automne.</li>
              <li>Bureau : président, secrétaire, trésorier, référents sorties.</li>
              <li>Communication via email et groupe messagerie.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vélo Club Saint‑Léger‑les‑Vignes — Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
            <a href="#contact" className="hover:underline">Mentions légales</a>
            <span>•</span>
            <a href="#contact" className="hover:underline">Politique RGPD</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
