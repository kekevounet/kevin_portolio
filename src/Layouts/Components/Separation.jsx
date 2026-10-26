import { Parallax } from "react-scroll-parallax";

export default function Separation({text, navHoverFlou})
{
  return(
    <div className={`w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] fondaka flex items-center justify-center overflow-hidden ${navHoverFlou ? 'blur-md' : '' }`}>
      <Parallax speed={-40} className='text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] text-base-900 text-shadow1 font-extrabold tracking-wide text-center px-4 whitespace-nowrap'>{text}</Parallax>
    </div>
  )
}