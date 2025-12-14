import { AiOutlineProject } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import Kevin from '../../Assets/Kevin.jpg';
import { useState } from "react";
import { CgHomeAlt } from "react-icons/cg";
import { AiOutlineFolderOpen, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
export default function NavBar({ setNavHoverFlou, onClick})
{
  // Etat
  const [ navHover, setNavHover ] = useState(false);

   const menus = [
      { icon: <CgHomeAlt />, label: "Accueil", lien: "#Accueil" },
      { icon: <AiOutlineUser />, label: "Profil", lien: "#Profil" },
      { icon: <AiOutlineFolderOpen />, label: "Compétences", lien: "#Competences" },
      { icon: <AiOutlineMail />, label: "Contact", lien: "#Contact" },
      { icon: <AiOutlineProject />, label: "Projet", lien: "#Projet" },
      { icon: <BiBookContent />, label: "Télécharger CV", lien: "/CV_MAMINIRINA_Niavo_kevin.pdf", download:true },
    ]

  // Comportement
  const MouseEnter = () =>
  {
    setNavHover(true);
    setNavHoverFlou(true);
  }

  const MouseLeave = () =>
  {
    setNavHover(false);
    setNavHoverFlou(false);
  }


onClick = () =>
{
  window.location.href = "https://niavo.netlify.app";
}




  return(
    <div className="w-full h-20 mt-2 fixed flex justify-center items-center z-40">
      <div className="w-[98%] h-full bg-base-100 ombre rounded-3xl flex items-center bg-opacity-95 justify-between relative">
        <div className="w-16 h-16 rounded-full bg-fond ml-5 overflow-hidden">
          <img src={Kevin} alt="Mon aperçu" className="w-full h-full object-cover" />
        </div>

        {/* Le conteneur du bouton Contactez-moi est séparé */}
        <div className="w-1/6 flex h-full justify-around items-center">
          <a href="#Contact" className=" no-underline active:scale-75 duration-75 text-lg p-3 rounded-2xl bg-secondaire-500 text-white font-bold cursor-pointer shadow-md w-[55%] text-center">Contactez-moi</a>

          {/* Nouveau conteneur qui ne gère que le menu bars et le menu */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
          >
            <div className="text-5xl text-base-900 cursor-pointer pr-5 duration-500">


              <TiThMenuOutline className={`${navHover ? 'text-cyan-500' : 'text-black'}`} />
            </div>
            {navHover && (
              <div className="absolute w-72 right-0 h-[50vh] bg-base-100 ombre top-[101%] rounded-3xl z-40">

                {/* Titre menu */}
                <div className="h-[15%] w-full flex items-center justify-center border-b border-dotted border-base-900 text-3xl font-bold tracking-wide">Menu</div>

                {/* Contenu NavBar */}
                <div className="h-[85%] w-full flex flex-col items-center justify-center p-3 space-y-1 duration-500 delay-300">
                  {menus.map((menu,index)=>(
                    <a className="flex items-center w-full group justify-center cursor-pointer p-3 hover:bg-slate-200 rounded-3xl text-black no-underline relative" key={index} href={`${menu.lien}`} download={menu.download ? true : undefined}>
                      <span className="text-2xl absolute left-3 group-hover:text-secondaire-500">{menu.icon}</span>
                      <span className="text-2xl group-hover:text-secondaire-500">{menu.label}</span>
                      <span className="w-0 group-hover:w-20 absolute left-1/2 h-1 duration-300 bottom-0 bg-secondaire-500"></span>
                      <span className="w-0 group-hover:w-20 absolute right-1/2 h-1 duration-300 bottom-0 bg-secondaire-500"></span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Fin du conteneur de survol */}

        </div>
      </div>
    </div>
  )
}