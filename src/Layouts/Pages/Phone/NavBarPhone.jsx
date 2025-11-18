import { BiBookContent } from "react-icons/bi";
import { AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
export default function NavBarPhone()
{
  // Etat
  const menus = [
    { icon: <CgHomeAlt />, label: "Accueil", lien : '' },
    { icon: <AiOutlineUser />, label: "Profil", lien : 'Profil' },
    { icon: <AiOutlineFolderOpen />, label: "Competénce", lien : 'Competence' },
    { icon: <AiOutlineMail />, label: "Contact", lien : 'Contact' },
    { icon: <AiOutlineProject />, label: "Projet", lien: "Projet" },
    { icon: <BiBookContent />, label: "CV", lien : 'CV' },
  ]

  // Affichage
  return(
    <div className="w-full fixed h-20 bottom-0 left-0 bg-slate-900 flex items-center justify-around text-base-100 z-50">
      {menus.map((menu,index)=>(
        <NavLink className={(({ isActive })=>`flex items-center flex-col w-full relative text-base-100 no-underline p-2 ${isActive ? 'border-b border-white' : 'border-none'} `)} key={index} to={`/${menu.lien}`}>
          <span className="text-2xl">{menu.icon}</span>
          <span className="text-xs">{menu.label}</span>
        </NavLink>
      ))}
    </div>
  )
}