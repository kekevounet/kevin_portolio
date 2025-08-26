import Accueil from './Accueil';
export default function Index(  {navHoverFlou, setNavHoverFlou} )
{
  // Affichage
  return(
    <div className="w-full h-full bg-[#f6f6f6]">
      <Accueil navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
    </div>
  )
}