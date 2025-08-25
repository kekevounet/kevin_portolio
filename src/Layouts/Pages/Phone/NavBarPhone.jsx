import { BiBookContent } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";
export default function NavBarPhone()
{
  // Etat
  const menus = [
    { icon: <CgHomeAlt />, label: "Accueil" },
    { icon: <AiOutlineUser />, label: "Profil" },
    { icon: <AiOutlineFolderOpen />, label: "Projets" },
    { icon: <AiOutlineMail />, label: "Contact" },
    { icon: <BiBookContent />, label: "CV" },
  ]

  // Affichage
  return(
    <div className="w-full fixed h-20 bottom-0 left-0 bg-slate-900 flex items-center justify-around text-base-100">
      {menus.map((menu,index)=>(
        <div className="flex items-center flex-col w-full relative" key={index}>
          <span className="text-2xl">{menu.icon}</span>
          <span className="text-xs">{menu.label}</span>
        </div>
      ))}
    </div>
  )
}