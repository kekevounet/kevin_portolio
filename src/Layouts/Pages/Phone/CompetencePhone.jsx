import { FcLinux } from "react-icons/fc";
import {
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMysql,
  SiLaravel,
  SiPrisma,
  SiNpm,
  SiComposer,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandDjango, TbBrandVscode } from "react-icons/tb";
import { FaReact, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

const SKILL_GROUPS = [
  {
    label: "Front-end",
    skills: [
      { name: "HTML5", icon: <AiFillHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "text-pink-500" },
    ],
  },
  {
    label: "Back-end",
    skills: [
      { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-white/80" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-teal-400" },
      { name: "Django", icon: <TbBrandDjango />, color: "text-emerald-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    ],
  },
  {
    label: "Outils",
    skills: [
      { name: "Git", icon: <BiGitBranch />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "VS Code", icon: <TbBrandVscode />, color: "text-blue-400" },
      { name: "Linux", icon: <FcLinux />, color: "" },
      { name: "npm", icon: <SiNpm />, color: "text-red-500" },
      { name: "Composer", icon: <SiComposer />, color: "text-orange-300" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    ],
  },
];

export default function Competences({ navHoverFlou }) {
  return (
    <section
      id="Competences"
      className={`w-full min-h-screen px-4 py-10 bg-base-900 transition-all duration-300 pb-32 ${navHoverFlou ? "blur-md" : ""}`}
    >
      <div className="max-w-xl mx-auto flex flex-col gap-8">
        <header>
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-400/90">
            Compétences
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white tracking-tight">
            Stack technique
          </h2>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Technologies et outils utilisés au quotidien pour concevoir des applications web complètes.
          </p>
        </header>

        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {group.label}
              </h3>
              <span className="text-[10px] font-mono text-white/30">
                {String(group.skills.length).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-gray-700/60" />
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center py-3 px-2 border border-gray-700/60 rounded-2xl backdrop-blur-sm bg-white/[0.03] transition-all duration-300 active:scale-[0.97]"
                >
                  <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                  <span className="mt-2 text-[11px] font-semibold text-gray-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}