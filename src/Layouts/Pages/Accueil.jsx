import { useEffect, useState } from "react"
import AccueilLaptop from "./Laptop/AccueilLaptop";
import AccueilPhone from "./Phone/AccueilPhone"
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
        <AccueilPhone />
      )
      :
      (
        <AccueilLaptop />
      ) }
    </div>
  )
}