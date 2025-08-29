import { Parallax } from "react-scroll-parallax";

export default function Separation({text, navHoverFlou})
{
  // Affichage
  return(
    <div className={`w-full h-[50vh] fondaka flex items-center justify-center overflow-hidden ${navHoverFlou ? 'blur-md' : '' }`}>
      <Parallax speed={-40} className='text-[10rem] text-base-900 text-shadow1 font-extrabold tracking-wide'>{text}</Parallax>
    </div>
  )
}