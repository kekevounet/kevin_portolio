import Accueil from './Accueil';
import Profil from './Profil';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
export default function Index(  {navHoverFlou, setNavHoverFlou} )
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
  // Affichage
  return(
    <div className="w-full h-full background1">
      <Accueil navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <div className="w-full h-[50vh] fondaka flex items-center justify-center overflow-hidden">
          <Parallax speed={-40} className='text-[10rem] text-base-900 text-shadow1 font-extrabold tracking-wide'>Profil</Parallax>
        </div>
      ) }

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Profil navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <div className="w-full h-[50vh] fondaka flex items-center justify-center overflow-hidden">
          <Parallax speed={-40} className='text-[10rem] text-base-900 text-shadow1 font-extrabold tracking-wide'>Projets</Parallax>
        </div>
      ) }

    </div>
  )
}