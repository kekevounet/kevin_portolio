import { BiBookContent } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";
import { Link } from 'react-router-dom';
export default function NavBarPhone()
{
  // Etat
  const menus = [
    { icon: <CgHomeAlt />, label: "Accueil", lien : '' },
    { icon: <AiOutlineUser />, label: "Profil", lien : 'Profil' },
    { icon: <AiOutlineFolderOpen />, label: "Projets", lien : 'Projets' },
    { icon: <AiOutlineMail />, label: "Contact", lien : 'Contact' },
    { icon: <BiBookContent />, label: "CV", lien : 'CV' },
  ]

  // Affichage
  return(
    <div className="w-full fixed h-20 bottom-0 left-0 bg-slate-900 flex items-center justify-around text-base-100">
      {menus.map((menu,index)=>(
        <Link className="flex items-center flex-col w-full relative text-base-100 no-underline" key={index} to={`/${menu.lien}`}>
          <span className="text-2xl">{menu.icon}</span>
          <span className="text-xs">{menu.label}</span>
        </Link>
      ))}
    </div>
  )
}