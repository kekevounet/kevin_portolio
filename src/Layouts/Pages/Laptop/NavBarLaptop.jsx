import { AiOutlineProject } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import Kevin from '../../Assets/Kevin.jpg';
import { useCallback, useEffect, useRef, useState } from "react";
import { CgHomeAlt } from "react-icons/cg";
import { AiOutlineFolderOpen, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

export default function NavBar({ setNavHoverFlou }) {
  const [navHover, setNavHover] = useState(false);
  const menuRef = useRef(null);

  const menus = [
    { icon: <CgHomeAlt />, label: "Accueil", lien: "#Accueil" },
    { icon: <AiOutlineUser />, label: "Profil", lien: "#Profil" },
    { icon: <AiOutlineFolderOpen />, label: "Compétences", lien: "#Competences" },
    { icon: <AiOutlineProject />, label: "Projets", lien: "#Projet" },
    { icon: <AiOutlineMail />, label: "Contacts", lien: "#Contact" },
    { icon: <BiBookContent />, label: "Télécharger CV", lien: "/CV_MAMINIRINA_Niavo_kevin.pdf", download: true },
  ];

  const updateMenu = useCallback(
    (value) => {
      setNavHover(value);
      if (setNavHoverFlou) setNavHoverFlou(value);
    },
    [setNavHoverFlou]
  );

  const handlePointerEnter = (e) => {
    if (e.pointerType === "mouse") updateMenu(true);
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === "mouse") updateMenu(false);
  };

  const handleMenuToggle = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") {
      updateMenu(!navHover);
    }
  };

  const handleMenuItemClick = () => {
    if (navHover) updateMenu(false);
  };

  useEffect(() => {
    if (!navHover) return;
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        updateMenu(false);
      }
    };
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [navHover, updateMenu]);

  return (
    <div className="w-full h-16 sm:h-18 md:h-20 mt-2 fixed flex justify-center items-center z-40 px-1 sm:px-0">
      <div className="w-[98%] h-full bg-base-100 ombre rounded-3xl flex items-center bg-opacity-95 justify-between relative gap-2">
        <a
          href="https://niavo.netlify.app"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-fond ml-2 sm:ml-3 md:ml-5 overflow-hidden shrink-0"
        >
          <img src={Kevin} alt="Mon aperçu" className="w-full h-full object-cover" />
        </a>

        <div className="flex h-full items-center gap-2 sm:gap-3 md:gap-4 lg:gap-0 lg:w-1/6 lg:justify-around shrink-0 pr-2 sm:pr-3 md:pr-4 lg:pr-0">
          <a
            href="#Contact"
            data-tooltip-content="Contactez-moi"
            data-tooltip-id="Contact-tooltip"
            className="no-underline active:scale-75 duration-75 text-[11px] sm:text-xs md:text-sm lg:text-lg px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 lg:p-3 rounded-2xl bg-secondaire-500 text-white font-bold cursor-pointer shadow-md lg:w-[55%] text-center whitespace-nowrap"
          >
            Contactez-moi
          </a>
          <Tooltip id="Contact-tooltip" place="bottom" className="z-50" />

          <div
            ref={menuRef}
            className="relative h-full flex items-center"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-base-900 cursor-pointer pr-1 sm:pr-2 md:pr-3 lg:pr-5 duration-500 flex items-center touch-manipulation select-none"
              onPointerDown={handleMenuToggle}
            >
              <TiThMenuOutline className={`${navHover ? 'text-cyan-500' : 'text-black'}`} />
            </div>
            {navHover && (
              <div className="absolute w-64 sm:w-72 max-w-[calc(100vw-1rem)] right-0 max-h-[calc(100vh-6rem)] md:h-[50vh] md:max-h-[calc(100vh-6rem)] bg-base-100 ombre top-[101%] rounded-3xl z-40 overflow-y-auto">
                <div className="h-12 sm:h-14 md:h-[15%] w-full flex items-center justify-center border-b border-dotted border-base-900 text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                  Menu
                </div>

                <div className="w-full md:h-[85%] flex flex-col items-center justify-center p-2 sm:p-3 space-y-1">
                  {menus.map((menu, index) => (
                    <a
                      className="flex items-center w-full group justify-center cursor-pointer p-2 sm:p-2.5 md:p-3 hover:bg-slate-200 rounded-xl text-black no-underline relative"
                      key={index}
                      href={`${menu.lien}`}
                      download={menu.download ? true : undefined}
                      onClick={handleMenuItemClick}
                    >
                      <span className="text-lg sm:text-xl md:text-2xl absolute left-2 sm:left-2.5 md:left-3 group-hover:text-secondaire-500">{menu.icon}</span>
                      <span className="text-sm sm:text-base md:text-xl lg:text-2xl group-hover:text-secondaire-500 pl-4">{menu.label}</span>
                      <span className="w-0 group-hover:w-14 md:group-hover:w-16 lg:group-hover:w-20 absolute left-1/2 h-1 duration-300 bottom-0 bg-secondaire-500"></span>
                      <span className="w-0 group-hover:w-14 md:group-hover:w-16 lg:group-hover:w-20 absolute right-1/2 h-1 duration-300 bottom-0 bg-secondaire-500"></span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}