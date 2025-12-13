import { FaLaravel } from "react-icons/fa";

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
  // Etat
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
  { icon: <FaLaravel /> },
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
  // Affichage
  return(
    <div className={`w-full h-screen flex justify-between items-center px-[40px] gap-0 py-[0px] z-10 background1 duration-500 ${navHoverFlou ? 'blur-md' : '' }`} id="Accueil">
      {/* Texte au début */}
      <div className="w-[45%] h-[70%] flex flex-col justify-between gap-3">
        {/* Grand annoncement */}
        <div className="overflow-hidden w-full h-[80%] tracking-wider text-shadow1 flex items-center mb-0 justify-center font-semibold text-8xl text-base-100">
          Bonjour, je suis développeur fullstack &copy;
        </div>
        {/* Petit annoncement */}
        <div className="w-full h-[20%] flex items-center text-2xl py-2 text-base-100">
          Passionné par le développement web et mobile, je suis prêt à relever vos défis technologiques.
          N’hésitez pas à me contacter pour discuter de vos projets ambitieux.
        </div>
      </div>


      {/* Image et tout */}
      <div className="w-1/2 h-[70%] flex flex-col justify-between gap-3">
        <div className="w-full h-2/3 flex items-center flex-row justify-between gap-3">
        {/* Information du gauche */}
          <a href="#Profil" className="w-1/2 h-full rounded-3xl bg-base-100 overflow-hidden relative ombre flex hover:-translate-y-3 group ease-in-out duration-300 cursor-pointer">
            <img src={Maquette} alt="Présentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-600 via-base-400/90 to-transparent pointer-events-none flex justify-center items-end font-bold text-5xl p-4 text-base-100">MAMINIRINA Niavo Kevin</div>
            <div class="w-full h-0 bg-gradient-to-t from-base-600 via-base-400/90 to-base-200 absolute group-hover:h-full bottom-0 left-0 rounded-3xl duration-300 flex items-center justify-center">
              <span class="scale-0 group-hover:scale-100 duration-500 text-8xl text-white font-bold text-shadow1">Profil</span>
            </div>
          </a>
          {/* Image de droite */}
          <div className="w-1/2 h-full rounded-3xl overflow-hidden hover:cursor-none ombre hover:-translate-y-3 ease-in-out duration-300 cursor-pointer">
            <img src={Kevin} alt="Mon aperçu" className='w-full h-full object-cover ombre' />
          </div>
        </div>

        {/* Le ambany ito le misy contact */}
        <div className="w-full h-1/3 flex justify-between flex-row items-center gap-3">
          {/* Voalohany */}
          <a href="#Competences" className="no-underline w-2/3 h-full bg-base-100 ombre rounded-3xl overflow-hidden hover:-translate-y-3 ease-in-out duration-300 cursor-pointer group relative">
            <div className="h-[60%] w-full flex items-center px-3 text-3xl font-bold text-base-900">Disponible pour des missions ou contrats</div>
            <div className="h-[40%] w-full flex gap-3 items-center px-3 relative bg-base-100">
              {competences.map((competence, index) =>(
                <div className="flex items-center px-3 animate-marquee" key={index}>
                  <span className="text-3xl text-base-900 mr-3">{competence.icon}</span>
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-transparent to-base-100 "></div>
            </div>
            <div class="w-full h-0 bg-gradient-to-t from-base-600 via-base-400/90 to-base-200 absolute group-hover:h-full bottom-0 left-0 rounded-3xl duration-300 flex items-center justify-center">
              <span class="scale-0 group-hover:scale-100 duration-500 text-6xl text-white font-bold text-shadow1">Compétences</span>
            </div>
          </a>
          {/* Faharoany */}
          <div className="w-1/2 h-full rounded-3xl p-3 gap-3 justify-center items-center flex bg-base-100 ombre hover:-translate-y-3 ease-in-out duration-300 cursor-pointer">
            {liens.map((lien, index)=>(
              <a
                className="w-16 h-16 rounded-full flex justify-center items-center shadow-md bg-white"
                href={lien.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`text-3xl ${lien.color} cursor-pointer hover:scale-110 duration-300`}>
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