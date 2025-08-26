import { useEffect, useState } from "react"
import ProfilPhone from './Phone/ProfilPhone';
import ProfilLaptop from './Laptop/ProfilLaptop';
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
        <ProfilPhone />
      )
      :
      (
        <ProfilLaptop navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }
    </div>
  )
}