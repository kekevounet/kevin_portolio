import Accueil from './Accueil';
import Profil from './Profil';
import Projets from './Competence';
import { useEffect, useState } from 'react';
import Separation from '../Components/Separation';
import Contact from './Contact'
import Projet from './Projet';
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
        <Separation text="Profil" navHoverFlou={navHoverFlou}/>
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
        <Separation text="Compétences" navHoverFlou={navHoverFlou}/>
      ) }

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Projets navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }


      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Separation text="Contact" navHoverFlou={navHoverFlou}/>
      ) }

       {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Contact navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Separation text="Projets" navHoverFlou={navHoverFlou}/>
      ) }

      {isMobile ?
      (
        <div className="hidden"></div>
      )
      :
      (
        <Projet navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      ) }





    </div>
  )
}