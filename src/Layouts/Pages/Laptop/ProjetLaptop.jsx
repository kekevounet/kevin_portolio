import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import gestionTache from "../../Assets/gestion-tache.png";
import gestionTransportCommun from "../../Assets/gestion-transport-commun.png"
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function ProjetLaptop({ navHoverFlou })
{
  const projets = [
    {
      titre: "Gestion de transport en commun",
      img: gestionTransportCommun,
      lien: "https://gestion-transport.netlify.app/",
      tooltip: "Application web permettant la gestion de coopératives, des revenus, et ainsi de voir des chauffeurs ou bus disponibles"
    },
    {
      titre: "Kev's Travel",
      img: kevTravel,
      lien: "https://kev-travel.netlify.app/",
      tooltip: "Plateforme de voyage permettant de découvrir des destinations et d'organiser ses déplacements"
    },
    {
      titre: "Gestion des projets",
      img: gestionProjet,
      lien: "https://gestion-projet-kevin.netlify.app/",
      tooltip: "Outil de gestion de projets intégrant la création, l'organisation et le suivi des tâches."
    },
    {
      titre: "Stand'Art",
      img: standart,
      lien: "https://stand-art.netlify.app/",
      tooltip: "Site vitrine artistique mettant en valeur des oeuvres et des expositions."
    },
    {
      titre: "Gestion des tâches",
      img: gestionTache,
      lien: "https://gestion-tache-kevin.netlify.app/",
      tooltip: "Application simple et efficace pour organiser ses tâches quotidiennes"
    },
  ];
  return(
    <div className={`w-full h-screen   ${navHoverFlou ? 'blur-md' : '' } `} id="Projet">
      {/* Texte mba ho affichageny fotsiny */}
      <div className="w-full h-[20%] flex items-end justify-center text-3xl p-3 font-bold text-white">
        Quelques projets réalisés, d'autres en cours
      </div>

      {/* Contenu */}
      <div className="w-full h-[80%] grid grid-cols-3 grid-rows-2 gap-3 px-5">

        {/* Ito no atao boucle */}
        {projets.map((projet, index)=>(
          <Link data-tooltip-id="ProjetLaptop-tooltip" data-tooltip-content={projet.tooltip} className="w-full h-full border-white border-b no-underline" key={index}  to={`${projet.lien}`} target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <div className="w-full h-[80%] overflow-hidden">
              <img src={projet.img} alt="" className="object-cover w-full h-full hover:scale-105 duration-200" />
            </div>
            {/* Texte */}
            <div className="w-full h-[20%] text-white font-bold text-xl flex items-center justify-center backdrop-blur-sm">{projet.titre}</div>
            <Tooltip id="ProjetLaptop-tooltip" place="top" className="z-50 p-3" />
          </Link>
        ))}

      </div>
    </div>
  )
}