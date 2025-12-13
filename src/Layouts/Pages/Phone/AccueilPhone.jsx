import Kevin1 from '../../Assets/kevin1.png';
// src/components/HomePage.jsx
import React from 'react';
import { TbBrandVscode } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
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
const AccueilPhone = () =>
{
  // Etat
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

   const liens = [
    { icon : <BsWhatsapp />, url : "https://wa.me/0389423351", color:"text-green-500" },
    { icon : <CgFacebook />, url : "https://www.facebook.com/niavo.kevin", color:"text-blue-500" },
    { icon : <FaLinkedinIn />, url : "https://www.linkedin.com/in/kevin-niavo-39a541286/", color:"text-blue-500" },
    { icon : <AiOutlineMail /> , url:"mailto:niavo.kevin9@gmail.com", color:"text-green-500" }
  ]

  // Affichage
  return (
    <div className={`bg-gradient-to-b from-base-900 via-base-700 to-base-400 text-base-100 h-full py-3 flex flex-col gap-5 items-center`}>

      {/* Contenu misy anarana */}
      <div className="w-full h-[10%] items-center justify-center flex flex-col">
        <span className='text-2xl font-bold'>MAMINIRINA Niavo Kevin</span>
        <span className='text-lg font-bold italic mt-2'>Développeur fullstack</span>
        <span className='text-lg font-bold italic'>Disponible pour des missions ou contrats</span>
      </div>

      {/* Contenu misy sary */}
      <div className="w-full h-[70%] flex items-end justify-center">
        <img src={Kevin1} alt="Kevin" className='' />
      </div>
      {/* Contenu misy info de base */}
      <div className="w-[90%] h-[17vh] flex items-center justify-center mb-20 bg-base-100 rounded-3xl ombre flex-col overflow-hidden">
        <div className="w-full h-1/2 flex ">
          {competences.map((competence, index) =>(
            <div className="flex items-center px-3 animate-marquee" key={index}>
              <span className="text-3xl text-base-900 mr-3">{competence.icon}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex items-center justify-around">
          {liens.map((lien, index)=>(
            <a
              className="w-12 h-12 rounded-full flex justify-center items-center shadow-md bg-white"
              href={lien.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`text-2xl ${lien.color} cursor-pointer hover:scale-110 duration-300`}>
                {lien.icon}
              </span>
            </a>
          ))}</div>
      </div>
    </div>
  );
};

export default AccueilPhone;