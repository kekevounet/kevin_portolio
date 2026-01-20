import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import gestionTache from "../../Assets/gestion-tache.png";
import gestionTransportCommun from "../../Assets/gestion-transport-commun.png";
import { Link } from "react-router-dom";

export default function ProjetPhone({ navHoverFlou }) {
  const projets = [
    {
      titre: "Gestion de transport en commun",
      img: gestionTransportCommun,
      lien: "https://gestion-transport.netlify.app/",
      description:
        "Application web permettant la gestion des lignes, des arrêts et des horaires de transport en commun.",
      technologies: ["React", "Tailwind CSS"]
    },
    {
      titre: "Kev's Travel",
      img: kevTravel,
      lien: "https://kev-travel.netlify.app/",
      description:
        "Plateforme de voyage permettant de découvrir des destinations et d’organiser ses déplacements.",
      technologies: ["React", "CSS"]
    },
    {
      titre: "Gestion des projets",
      img: gestionProjet,
      lien: "https://gestion-projet-kevin.netlify.app/",
      description:
        "Outil de gestion de projets intégrant la création, l’organisation et le suivi des tâches.",
      technologies: ["React", "Tailwind CSS"]
    },
    {
      titre: "Stand'Art",
      img: standart,
      lien: "https://stand-art.netlify.app/",
      description:
        "Site vitrine artistique mettant en valeur des œuvres et des expositions.",
      technologies: ["React"]
    },
    {
      titre: "Gestion des tâches",
      img: gestionTache,
      lien: "https://gestion-tache-kevin.netlify.app/",
      description:
        "Application simple et efficace pour organiser ses tâches quotidiennes.",
      technologies: ["React"]
    }
  ];

  return (
    <section
      id="Competences"
      className={`w-full min-h-screen pb-32 bg-base-900 transition-all duration-300 ${
        navHoverFlou ? "blur-md" : ""
      }`}
    >
      <div className="grid grid-cols-1 gap-6 p-4">
        {projets.map((projet, index) => (
          <Link
            key={index}
            to={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-white no-underline"
          >
            {/* Image */}
            <div className="w-full h-[260px] overflow-hidden">
              <img
                src={projet.img}
                alt={projet.titre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu */}
            <div className="py-4 text-white">
              <h2 className="text-xl font-bold text-center mb-2">
                {projet.titre}
              </h2>

              <p className="text-sm text-center mb-3 opacity-90">
                {projet.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {projet.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
