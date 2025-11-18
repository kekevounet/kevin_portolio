import kevTravel from "../../Assets/kev-travel.png";
import gestionProjet from "../../Assets/gestion-projet.png";
import standart from "../../Assets/standart.png";
import { Link } from "react-router-dom";

export default function ProjetPhone({ navHoverFlou }) {
  // Etat
  const projets = [
    {
      titre: "Kev's Travel", img: kevTravel, lien: "https://kev-travel.netlify.app/"
    },
    {
      titre: "Gestion des projets", img: gestionProjet, lien: "https://gestion-projet-kevin.netlify.app/"
    },
    {
      titre: "Stand'Art", img: standart, lien: "https://stand-art.netlify.app/"
    }
  ];

    return (
        <section id="Competences" className={`w-full min-h-screen pb-32 bg-base-900  transition-all duration-300 ${navHoverFlou ? 'blur-md' : ''}`}>
         <div className=" grid-cols-1 grid overflow-auto w-full h-full gap-3 p-3">

             {/* Ito no atao boucle */}
        {projets.map((projet, index)=>(
          <Link className="w-full h-[300px] border-white border-b no-underline" key={index} to={`${projet.lien}`}  target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <div className="w-full h-[80%] overflow-hidden">
              <img src={projet.img} alt="" className="object-cover w-full h-full" />
            </div>
            {/* Texte */}
            <div className="w-full h-[20%] text-white font-bold text-xl flex items-center justify-center backdrop-blur-sm">{projet.titre}</div>
          </Link>
        ))}

         </div>
        </section>
    );
}