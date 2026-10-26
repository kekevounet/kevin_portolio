import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import gestionTache from "../../Assets/gestion-tache.png";
import gestionTransportCommun from "../../Assets/gestion-transport-commun.png";
import gestionClinique from "../../Assets/gestion-clinique.png";

const PROJETS = [
  {
    titre: "Gestion de clinique",
    img: gestionClinique,
    lien: "https://gestion-clinique.netlify.app/",
    description: "Application pour gérer une clinique, fonctionnelle et efficace.",
    technologies: ["TypeScript", "Vite", "React", "Tailwind CSS"],
  },
  {
    titre: "Gestion de transport en commun",
    img: gestionTransportCommun,
    lien: "https://gestion-transport.netlify.app/",
    description:
      "Application web permettant la gestion de coopératives, des revenus, et ainsi de voir des chauffeurs ou bus disponibles.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    titre: "Kev's Travel",
    img: kevTravel,
    lien: "https://kev-travel.netlify.app/",
    description:
      "Plateforme de voyage permettant de découvrir des destinations et d'organiser ses déplacements.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    titre: "Gestion des projets",
    img: gestionProjet,
    lien: "https://gestion-projet-kevin.netlify.app/",
    description:
      "Outil de gestion de projets intégrant la création, l'organisation et le suivi des tâches.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    titre: "Stand'Art",
    img: standart,
    lien: "https://stand-art.netlify.app/",
    description: "Site vitrine artistique mettant en valeur des œuvres et des expositions.",
    technologies: ["React"],
  },
  {
    titre: "Gestion des tâches",
    img: gestionTache,
    lien: "https://gestion-tache-kevin.netlify.app/",
    description: "Application simple et efficace pour organiser ses tâches quotidiennes.",
    technologies: ["React"],
  },
];

export default function ProjetPhone({ navHoverFlou }) {
  return (
    <section
      id="Projet"
      className={`w-full min-h-screen bg-base-900 transition-all duration-300 pb-24 ${
        navHoverFlou ? "blur-md" : ""
      }`}
    >
      <div className="flex flex-col gap-6 p-3 sm:p-4">
        {PROJETS.map((projet) => (
          <a
            key={projet.titre}
            href={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-white/30 no-underline active:opacity-80 transition-opacity duration-150"
          >
            <div className="w-full aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src={projet.img}
                alt={`Aperçu du projet ${projet.titre}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="py-4 text-white">
              <h2 className="text-lg sm:text-xl font-bold text-center mb-2 leading-tight">
                {projet.titre}
              </h2>

              <p className="text-xs sm:text-sm text-center mb-3 text-white/80 leading-relaxed">
                {projet.description}
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                {projet.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-white/40 rounded-full text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}