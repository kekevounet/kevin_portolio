import { useEffect, useState } from "react";
import NavBarPhone from "../Pages/Phone/NavBarPhone";
import NavBarlaptop from "../Pages/Laptop/NavBarLaptop";
export default function NavBar( {navHoverFlou, setNavHoverFlou} )
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
        <NavBarPhone />
      )
      :
      (
        <NavBarlaptop navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }
    </div>
  )
}