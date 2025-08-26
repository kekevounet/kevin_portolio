import { TiThMenuOutline } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import Kevin from '../../Assets/Kevin.jpg';
import { useState } from "react";
import { CgHomeAlt } from "react-icons/cg";
import { AiOutlineFolderOpen, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
export default function NavBar({navHoverFlou, setNavHoverFlou})
{
  // Etat
  const [ navHover, setNavHover ] = useState(false);

   const menus = [
      { icon: <CgHomeAlt />, label: "Accueil" },
      { icon: <AiOutlineUser />, label: "Profil" },
      { icon: <AiOutlineFolderOpen />, label: "Projets" },
      { icon: <AiOutlineMail />, label: "Contact" },
      { icon: <BiBookContent />, label: "CV" },
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



  return(
    <div className="w-full h-20 mt-2 fixed flex justify-center items-center z-40">
      <div className="w-[98%] h-full bg-base-100 ombre rounded-3xl flex items-center justify-between relative">
        <div className="w-16 h-16 rounded-full bg-fond ml-5 overflow-hidden">
          <img src={Kevin} alt="Mon aperçu" className="w-full h-full object-cover" />
        </div>

        {/* Le conteneur du bouton Contactez-moi est séparé */}
        <div className="w-1/6 flex h-full justify-around items-center">
          <div className=" text-lg p-3 rounded-3xl bg-secondaire-500 text-white font-bold cursor-pointer shadow-md w-2/3 text-center">Contactez-moi</div>

          {/* Nouveau conteneur qui ne gère que le menu bars et le menu */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
          >
            <div className="text-5xl text-base-900 cursor-pointer pr-5 duration-500">


              {navHover ? (<FaBars />) : (<TiThMenuOutline />)}
            </div>
            {navHover && (
              <div className="absolute w-64 right-0 h-[50vh] bg-base-100 ombre top-[105%] rounded-3xl z-40">

                {/* Titre menu */}
                <div className="h-[15%] w-full flex items-center justify-center border-b border-dotted border-base-900 text-3xl font-bold tracking-wide">Menu</div>

                {/* Contenu NavBar */}
                <div className="h-[85%] w-full flex flex-col items-center justify-center p-3 space-y-1 duration-500 delay-300">
                  {menus.map((menu,index)=>(
                    <div className="flex items-center w-full justify-center cursor-pointer p-3 hover:bg-slate-300 rounded-3xl" key={index}>
                      <span className="text-2xl absolute left-7 ">{menu.icon}</span>
                      <span className="text-2xl">{menu.label}</span>
                    </div>
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