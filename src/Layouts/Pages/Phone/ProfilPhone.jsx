export default function ProfilMobile() {
  const services = [
    "Développement Front-end avec React JS",
    "Création d'APIs RESTful avec Laravel ou Express JS",
    "Intégration de bases de données (MongoDB, MySQL)",
  ];

  return (
    <section
      id="Profil"
      className="w-full min-h-screen bg-base-900 text-base-100 font-sans pb-24"
    >
      <div className="w-full px-5 pt-10 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-[0.95]">
            Niavo <span className="text-teal-400">Kevin</span>
          </h1>
          <p className="mt-2 text-sm font-semibold text-teal-400 tracking-wide">
            Développeur Full-Stack Junior
          </p>
          <p className="mt-3 text-xs text-base-100/50 tracking-wide">
            Disponible pour des missions et contrats
          </p>
        </div>

        <div className="h-px w-full bg-base-100/10" />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-base-100/40 mb-3">
            Mission
          </p>
          <blockquote className="text-sm italic text-base-300 leading-[1.8]">
            « Ma mission est de transformer des idées innovantes en applications web performantes et intuitives. Je m'engage à créer des expériences numériques qui répondent aux défis d'aujourd'hui et préparent les opportunités de demain. »
          </blockquote>
        </div>

        <div className="h-px w-full bg-base-100/10" />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-400 mb-3">
            Ce que je propose
          </p>
          <h2 className="text-base font-bold tracking-tight">
            Comment je peux vous aider
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-base-300">
            Je construis des applications web robustes et esthétiques, du front-end au back-end. Que ce soit pour un site vitrine élégant, une plateforme e-commerce dynamique ou une application web complexe, je m'assure que votre vision prenne vie avec une{" "}
            <span className="font-semibold text-base-100">
              architecture solide et un code propre
            </span>
            .
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-base-300">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-2.5">
                <span className="mt-[9px] w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px w-full bg-base-100/10" />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400 mb-3">
            Mon approche
          </p>
          <h2 className="text-base font-bold tracking-tight">
            Ce que je recherche
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-gray-300">
            Je crois fermement en un développement agile, axé sur les résultats et la collaboration. Mon objectif est de fournir des solutions optimisées, faciles à maintenir et à faire évoluer.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Actuellement à la recherche d'opportunités stimulantes pour rejoindre une équipe innovante en tant que développeur junior. Je suis impatient de contribuer à des projets ambitieux et de continuer à développer mes compétences.
          </p>
        </div>

        <div className="h-px w-full bg-base-100/10" />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-base-100/40 mb-3">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="tel:0389423351"
              className="text-base-300 hover:text-teal-400 transition-colors duration-200 w-fit"
            >
              038 94 233 51
            </a>
            <a
              href="mailto:niavo.kevin9@gmail.com"
              className="text-base-300 hover:text-teal-400 transition-colors duration-200 w-fit break-all"
            >
              niavo.kevin9@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}