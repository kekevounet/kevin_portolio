export default function ProfilLaptop({ navHoverFlou }) {
  const services = [
    "Développement Front-end avec React JS",
    "Création d'APIs RESTful avec Laravel ou Express JS",
    "Intégration de bases de données (MySQL)",
  ];

  return (
    <section
      id="Profil"
      className={`w-full min-h-screen lg:min-h-[90vh] text-base-100 duration-500 ${
        navHoverFlou ? "blur-md" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-10 py-16 lg:py-20 flex flex-col">
        {/*  */}
        <div className="py-10 lg:py-14">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9]">
            Niavo{" "}
            <span className="text-cyan-400">
              Kevin
            </span>
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-base-100/30" />
            <p className="text-xs sm:text-sm font-semibold text-base-100/60 tracking-[0.3em] uppercase">
              Développeur Full-Stack Junior
            </p>
          </div>
        </div>

        <div className="border-t border-base-100/10 py-10 lg:py-12">
          <p className="text-sm sm:text-base lg:text-lg text-base-100/80 font-light leading-[1.75] max-w-3xl">
            « Ma mission est de transformer des idées innovantes en applications web performantes et intuitives, en combinant une approche méthodique avec une passion pour les technologies modernes. Je m'engage à créer des expériences numériques qui répondent aux défis d'aujourd'hui et préparent les opportunités de demain. »
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 border-t border-base-100/10 py-10 lg:py-12">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Ce que je propose
            </h2>
            <p className="text-sm text-base-100/80 leading-relaxed">
              Je construis des{" "}
              <span className="font-semibold text-base-100">
                applications web robustes et esthétiques
              </span>{" "}
              du front-end au back-end. Que ce soit pour un site vitrine élégant, une plateforme e-commerce dynamique ou une application web complexe, je m'assure que votre vision prenne vie avec une{" "}
              <span className="font-semibold text-base-100">
                architecture solide et un code propre
              </span>
              .
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-base-100/80">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400 mb-4">
              Mon approche
            </h2>
            <p className="text-sm text-base-100/80 leading-relaxed">
              Fort d'une expertise en{" "}
              <span className="font-semibold text-base-100">
                React.js pour le front-end
              </span>{" "}
              et{" "}
              <span className="font-semibold text-base-100">
                Express.js pour le back-end
              </span>
              , je conçois des solutions complètes et robustes. Mon approche est guidée par les principes du{" "}
              <span className="font-semibold text-base-100">clean code</span> et une attention particulière au design et à l'expérience utilisateur.
            </p>
            <p className="mt-4 text-sm text-base-100/80 leading-relaxed">
              Actuellement à la recherche d'opportunités stimulantes pour rejoindre une équipe innovante en tant que développeur junior. Je suis impatient de contribuer à des projets ambitieux et de continuer à développer mes compétences techniques et interpersonnelles.
            </p>
          </div>
        </div>

        <div className="border-t border-base-100/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-base-100/50">
          <span className="tracking-wide">Basé à Antananarivo, Madagascar</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:0389423351"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              038 94 233 51
            </a>
            <a
              href="mailto:niavo.kevin9@gmail.com"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              niavo.kevin9@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}