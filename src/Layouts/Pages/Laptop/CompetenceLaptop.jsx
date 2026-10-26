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

export default function CompetenceLaptop({ navHoverFlou }) {
  return (
    <section
      id="Competences"
      className={`w-full py-16 lg:py-8 lg:h-[90vh] background1 duration-500 ${
        navHoverFlou ? "blur-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col px-4 sm:px-6 lg:px-10">
        <header className="shrink-0 mb-8 lg:mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-500">
            Compétences
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Stack technique
          </h2>
          <p className="mt-2 text-sm text-white/50 max-w-xl leading-relaxed">
            Technologies et outils que j'utilise au quotidien pour concevoir des applications web complètes.
          </p>
        </header>

        <div className="flex flex-col gap-6 lg:gap-7 flex-1 justify-center">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-white font-semibold text-sm uppercase tracking-[0.15em]">
                  {group.label}
                </h3>
                <span className="text-xs text-white/30 font-medium tabular-nums">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-base-500/30" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center py-2.5 lg:py-3 lg:w-[120px] rounded-xl border border-base-500/40 bg-base-900/40 hover:border-cyan-500/50 hover:bg-base-900/70 transition-all duration-200"
                  >
                    <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                    <span className="mt-2 text-[11px] text-white/70 group-hover:text-white font-medium text-center leading-tight px-1 transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
