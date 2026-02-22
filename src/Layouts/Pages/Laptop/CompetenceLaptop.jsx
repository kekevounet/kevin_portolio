import { FcLinux } from "react-icons/fc";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaNodeJs, FaCss3Alt, FaBootstrap, FaPython, FaGithub } from 'react-icons/fa';
import { TbBrandDjango, TbBrandReactNative, TbBrandVscode } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiMysql } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5'; // Importation de l'icône JavaScript

// Vos données de compétences avec les icônes directement
const competences = [
    { name: 'HTML', icon: <AiFillHtml5 size={64} className="text-red-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={64} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript size={64} className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript size={64} className="text-blue-500" /> },
    { name: 'React JS', icon: <FaReact size={64} className="text-cyan-500" /> },
    { name: 'Express JS', icon: <SiExpress size={64} className="text-gray-400" /> },
    { name: 'Node JS', icon: <FaNodeJs size={64} className="text-green-500" /> },
    { name: 'Django', icon: <TbBrandDjango size={64} className="text-gray-600 dark:text-gray-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} className="text-cyan-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={64} className="text-purple-500" /> },
    { name: 'Git', icon: <BiGitBranch size={64} className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub size={64} className="text-gray-900 dark:text-gray-100" /> },
    { name: 'MongoDB', icon: <SiMongodb size={64} className="text-lime-500" /> },
    { name: 'MySQL', icon: <SiMysql size={64} className="text-blue-600" /> },
    { name: 'React Native', icon: <TbBrandReactNative size={64} className="text-sky-500" /> },
    { name: 'Python', icon: <FaPython size={64} className="text-yellow-400" /> },
    { name: 'Postman', icon: <SiPostman size={64} className="text-orange-500" /> },
    { name: 'VS Code', icon: <TbBrandVscode size={64} className="text-blue-400" /> },
    { name: 'Framer motion', icon: <TbBrandFramerMotion size={64} className="text-orange-500" /> },
    { name: 'Linux', icon: <FcLinux size={64} className="text-orange-500" /> },
];

export default function CompetenceLaptop({ navHoverFlou }) {
    return (
        <section id="Competences" className={`w-full h-[120vh] flex items-center justify-center transition-all duration-300 background1 ${navHoverFlou ? 'blur-md' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
                    {competences.map(comp => (
                        <div key={comp.name} className="flex flex-col cursor-pointer items-center justify-center p-10 border border-gray-700 rounded-3xl backdrop-blur-sm bg-white/5 shadow-lg transform transition-transform duration-300 hover:scale-[1.05] hover:border-blue-400 hover:shadow-[0_0_20px_0_rgba(96,165,250,0.3)]">
                            {comp.icon}
                            <span className="mt-4 text-lg font-semibold text-gray-200 text-center">{comp.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}