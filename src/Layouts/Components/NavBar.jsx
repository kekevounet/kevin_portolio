import { useEffect, useState } from "react";
import NavBarPhone from "../Pages/Phone/NavBarPhone";
import NavBarlaptop from "../Pages/Laptop/NavBarLaptop";
export default function App()
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
        <NavBarlaptop />
      ) }
    </div>
  )
}