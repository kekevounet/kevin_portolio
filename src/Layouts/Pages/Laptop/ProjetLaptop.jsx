import { FiArrowUpRight } from "react-icons/fi";
import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import gestionTache from "../../Assets/gestion-tache.png";
import gestionTransportCommun from "../../Assets/gestion-transport-commun.png";
import gestionClinique from "../../Assets/gestion-clinique.png";

const PROJECTS = [
  {
    id: "clinique",
    title: "Gestion de clinique",
    category: "Application web",
    image: gestionClinique,
    link: "https://gestion-clinique.netlify.app/",
    description:
      "Application web dédiée à la gestion complète d'une clinique : suivi des patients, du personnel, des médicaments et des rendez-vous, avec un tableau de bord d'administration et une interface responsive.",
  },
  {
    id: "transport",
    title: "Gestion de transport en commun",
    category: "Application web",
    image: gestionTransportCommun,
    link: "https://gestion-transport.netlify.app/",
    description:
      "Application web permettant la gestion de coopératives, des revenus, et ainsi de voir des chauffeurs ou bus disponibles.",
  },
  {
    id: "travel",
    title: "Kev's Travel",
    category: "Plateforme",
    image: kevTravel,
    link: "https://kev-travel.netlify.app/",
    description:
      "Plateforme de voyage permettant de découvrir des destinations et d'organiser ses déplacements.",
  },
  {
    id: "projet",
    title: "Gestion des projets",
    category: "Application web",
    image: gestionProjet,
    link: "https://gestion-projet-kevin.netlify.app/",
    description:
      "Outil de gestion de projets intégrant la création, l'organisation et le suivi des tâches.",
  },
  {
    id: "standart",
    title: "Stand'Art",
    category: "Site vitrine",
    image: standart,
    link: "https://stand-art.netlify.app/",
    description:
      "Site vitrine artistique mettant en valeur des œuvres et des expositions.",
  },
  {
    id: "tache",
    title: "Gestion des tâches",
    category: "Application web",
    image: gestionTache,
    link: "https://gestion-tache-kevin.netlify.app/",
    description:
      "Application simple et efficace pour organiser ses tâches quotidiennes.",
  },
];

function getSpanClasses(index) {
  if (index === 0) {
    return "md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto";
  }
  if (index < 3) {
    return "md:col-span-5 aspect-[4/3] md:aspect-auto";
  }
  return "md:col-span-4 aspect-[4/3] md:aspect-auto";
}

export default function ProjetLaptop({ navHoverFlou }) {
  return (
    <section
      id="Projet"
      className={`w-full text-base-100 duration-500 ${
        navHoverFlou ? "blur-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-10 py-16 lg:py-20 flex flex-col">
      
        <div className="pb-10 lg:pb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Quelques projets{" "}
            <span className=" text-cyan-400">
              réalisés
            </span>
            , d'autres en cours.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-base-100/60 font-light max-w-xl leading-relaxed">
            Sélection de projets web développés récemment. Cliquez sur un projet pour ouvrir le site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[190px] lg:auto-rows-[210px] gap-3 md:gap-4">
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ouvrir le site du projet ${project.title}`}
              className={`group relative overflow-hidden rounded-xl border border-base-100/10 hover:border-cyan-500/40 transition-all duration-300 text-left no-underline flex flex-col justify-end outline-none hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${getSpanClasses(
                index
              )}`}
            >
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

              <div
                className={`relative p-5 flex flex-col gap-2 ${
                  index === 0 ? "md:p-7 lg:p-8" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-base-100/50 tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-4 bg-base-100/30" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400/90">
                    {project.category}
                  </span>
                </div>
                <h3
                  className={`font-bold text-white tracking-tight leading-tight no-underline ${
                    index === 0
                      ? "text-xl sm:text-2xl md:text-3xl"
                      : "text-base sm:text-lg md:text-xl"
                  }`}
                >
                  {project.title}
                </h3>
                {index === 0 && (
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-2 max-w-md no-underline">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <FiArrowUpRight className="text-sm" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}