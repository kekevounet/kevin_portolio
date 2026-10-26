import { SiTypescript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import Maquette from '../../Assets/Maquette.jpg';
import Kevin from '../../Assets/Kevin.jpg';

export default function AccueilLaptop({navHoverFlou})
{
  const liens = [
    { icon : <BsWhatsapp />, url : "https://wa.me/0389423351", color:"text-green-500" },
    { icon : <CgFacebook />, url : "https://www.facebook.com/niavo.kevin", color:"text-blue-500" },
    { icon : <FaLinkedinIn />, url : "https://www.linkedin.com/in/kevin-niavo-39a541286/", color:"text-blue-500" },
    { icon : <AiOutlineMail /> , url:"mailto:niavo.kevin9@gmail.com", color:"text-green-500" }
  ]

  const competences = [
    { icon: <FaReact /> },
    { icon: <FaNodeJs /> },
    { icon: <TbBrandDjango /> },
    { icon: <SiTypescript /> },
    { icon: <AiFillHtml5 /> },
    { icon: <FaCss3Alt /> },
    { icon: <SiTailwindcss /> },
    { icon: <FaBootstrap /> },
    { icon: <TbBrandReactNative /> },
    { icon: <FaPython /> },
    { icon: <BiGitBranch /> },
    { icon: <AiFillGithub /> },
    { icon: <SiMysql /> },
    { icon: <TbBrandVscode /> },
  ];

  return(
    <div className={`w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[40px] py-8 lg:py-[0px] gap-8 lg:gap-0 z-10 background1 duration-500 ${navHoverFlou ? 'blur-md' : '' }`} id="Accueil">
      <div className="w-full lg:w-[45%] lg:h-[70%] flex flex-col justify-between gap-4 lg:gap-3">
        <div className="overflow-hidden w-full lg:h-[80%] tracking-wider text-shadow1 flex items-center mb-0 justify-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-base-100 text-center lg:text-left leading-tight">
          Bonjour, je suis développeur fullstack &copy;
        </div>
        <div className="w-full lg:h-[20%] flex items-center text-base sm:text-lg md:text-xl lg:text-2xl py-2 text-base-100 text-center lg:text-left">
          Passionné par le développement web et mobile, je suis prêt à relever vos défis technologiques.
          N'hésitez pas à me contacter pour discuter de vos projets ambitieux.
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-[70%] flex flex-col justify-between gap-4 lg:gap-3">
        <div className="w-full lg:h-2/3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a href="#Profil" className="w-full sm:w-1/2 h-64 sm:h-72 md:h-80 lg:h-full rounded-3xl bg-base-100 overflow-hidden relative ombre flex hover:-translate-y-3 group ease-in-out duration-300 cursor-pointer">
            <img src={Maquette} alt="Présentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-600 via-base-400/90 to-transparent pointer-events-none flex justify-center items-end font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 text-base-100 text-center leading-tight">
              MAMINIRINA Niavo Kevin
            </div>
            <div className="w-full h-0 bg-gradient-to-t from-base-600 via-base-400/90 to-base-200 absolute group-hover:h-full bottom-0 left-0 rounded-3xl duration-300 flex items-center justify-center">
              <span className="scale-0 group-hover:scale-100 duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold text-shadow1">Profil</span>
            </div>
          </a>
          <div className="w-full sm:w-1/2 h-64 sm:h-72 md:h-80 lg:h-full rounded-3xl overflow-hidden hover:cursor-none ombre hover:-translate-y-3 ease-in-out duration-300 cursor-pointer">
            <img src={Kevin} alt="Mon aperçu" className='w-full h-full object-cover ombre' />
          </div>
        </div>

        <div className="w-full lg:h-1/3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <a href="#Competences" className="no-underline w-full sm:w-2/3 h-36 sm:h-40 lg:h-full bg-base-100 ombre rounded-3xl overflow-hidden hover:-translate-y-3 ease-in-out duration-300 cursor-pointer group relative">
            <div className="h-[60%] w-full flex items-center px-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-base-900">
              Disponible pour des missions ou contrats
            </div>
            <div className="h-[40%] w-full flex gap-3 items-center px-3 relative bg-base-100">
              {competences.map((competence, index) =>(
                <div className="flex items-center px-3 animate-marquee" key={index}>
                  <span className="text-xl sm:text-2xl lg:text-3xl text-base-900 mr-3">{competence.icon}</span>
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-transparent to-base-100 "></div>
            </div>
            <div className="w-full h-0 bg-gradient-to-t from-base-600 via-base-400/90 to-base-200 absolute group-hover:h-full bottom-0 left-0 rounded-3xl duration-300 flex items-center justify-center">
              <span className="scale-0 group-hover:scale-100 duration-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-shadow1">Compétences</span>
            </div>
          </a>
          <div className="w-full sm:w-1/2 h-20 sm:h-28 lg:h-full rounded-3xl p-3 gap-3 justify-center items-center flex flex-row bg-base-100 ombre hover:-translate-y-3 ease-in-out duration-300 cursor-pointer">
            {liens.map((lien, index)=>(
              <a
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center shadow-md bg-white"
                href={lien.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`text-xl sm:text-2xl lg:text-3xl ${lien.color} cursor-pointer hover:scale-110 duration-300`}>
                  {lien.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}