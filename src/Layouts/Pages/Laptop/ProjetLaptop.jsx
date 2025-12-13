import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import gestionTache from "../../Assets/gestion-tache.png";
import { Link } from "react-router-dom";

export default function ProjetLaptop({ navHoverFlou })
{
  const projets = [
    {
      titre: "Kev's Travel", img: kevTravel, lien: "https://kev-travel.netlify.app/"
    },
    {
      titre: "Gestion des projets", img: gestionProjet, lien: "https://gestion-projet-kevin.netlify.app/"
    },
    {
      titre: "Stand'Art", img: standart, lien: "https://stand-art.netlify.app/"
    },
    {
      titre: "Gestion des projets", img: gestionTache, lien: "https://gestion-tache-kevin.netlify.app/"
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
          <Link className="w-full h-full border-white border-b no-underline" key={index}  to={`${projet.lien}`} target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <div className="w-full h-[80%] overflow-hidden">
              <img src={projet.img} alt="" className="object-cover w-full h-full" />
            </div>
            {/* Texte */}
            <div className="w-full h-[20%] text-white font-bold text-xl flex items-center justify-center backdrop-blur-sm">{projet.titre}</div>
          </Link>
        ))}

      </div>
    </div>
  )
}