import { useEffect, useState } from "react";
import ContactLaptop from "./Laptop/ContactLaptop";
import ContactPhone from "./Phone/CompetencePhone";
export default function Accueil(  {navHoverFlou, setNavHoverFlou} )
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
        <ContactPhone />
      )
      :
      (
        <ContactLaptop navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }
    </div>
  )
}