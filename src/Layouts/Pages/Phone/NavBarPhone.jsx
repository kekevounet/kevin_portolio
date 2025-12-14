import { BiBookContent } from "react-icons/bi";
import { AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function NavBarPhone()
{
  // Etat
  const menus = [
    { icon: <CgHomeAlt />, label: "Accueil", lien : '' },
    { icon: <AiOutlineUser />, label: "Profil", lien : 'Profil' },
    { icon: <AiOutlineFolderOpen />, label: "Competénce", lien : 'Competence' },
    { icon: <AiOutlineMail />, label: "Contact", lien : 'Contact' },
    { icon: <AiOutlineProject />, label: "Projet", lien: "Projet" },
    { icon: <BiBookContent />, label: "CV", lien : 'CV_MAMINIRINA_Niavo_kevin.pdf', download: true },
  ];
  const handleDownload = () =>
  {
    Swal.fire({
      title: "Niavo Kevin",
      text: "CV de Niavo Kevin télécharger avec succès.",
      icon: "success"
    });
  }

  // Affichage
  return(
    <div className="w-full fixed h-20 bottom-0 left-0 bg-slate-900 flex items-center justify-around text-base-100 z-50">
      {menus.map((menu,index)=>(
        menu.download
          ?
            (<a
              key={index}
              href={`/${menu.lien}`}
              download
              onClick={handleDownload}
              className="flex items-center flex-col w-full relative text-base-100 no-underline p-2"
            >
              <span className="text-2xl">{menu.icon}</span>
              <span className="text-xs">{menu.label}</span>
            </a>)
            :
            ( <NavLink className={(({ isActive })=>`flex items-center flex-col w-full relative text-base-100 no-underline p-2 ${isActive ? 'border-b border-white' : 'border-none'} `)} key={index} to={`/${menu.lien}`}  download={menu.download ? true : undefined}>
                <span className="text-2xl">{menu.icon}</span>
                <span className="text-xs">{menu.label}</span>
              </NavLink>)

      ))}
    </div>
  )
}