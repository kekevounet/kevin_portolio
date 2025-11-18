import { useEffect, useState } from "react"
import ProjetLaptop from "./Laptop/ProjetLaptop";
import ProjetPhone from "./Phone/ProjetPhone";
export default function Projet(  {navHoverFlou, setNavHoverFlou} )
{
  // Etat
  const [ isMobile, setIsMobile ] = useState(false);

  // Comportement
  useEffect(()=>
  {
    const handleResize = () =>
    {
      setIsMobile( window.innerWidth < 768 );
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // Affichage
  return(
    <div>
      { isMobile ?
      (
        <ProjetPhone />
      )
      :
      (
        <ProjetLaptop navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }
    </div>
  )
}