import React from 'react';

export default function ProfilMobile() {
  return (
    <div className="w-full h-screen p-5 flex flex-col justify-start bg-base-900 font-sans text-base-100 overflow-y-auto">
      {/* Section Principale : Nom, Rôle, Mission & Vision */}
      <div className="w-full h-auto flex flex-col items-center text-center mt-6">
        <h1 className="text-4xl font-extrabold text-base-100 tracking-wide leading-tight">
          Niavo Kevin
        </h1>
        <p className="text-lg text-teal-400 font-light mt-1">
          Développeur Full-Stack Junior
        </p>

        <p className="text-sm italic text-base-300 leading-relaxed max-w-sm px-4 mt-6">
          "Ma mission est de transformer des idées innovantes en applications web performantes et intuitives. Je m'engage à créer des expériences numériques qui répondent aux défis d'aujourd'hui et préparent les opportunités de demain."
        </p>

        <p className="text-xs mt-3 text-gray-500 font-medium tracking-wider">
          Disponible pour des missions en freelance
        </p>
      </div>

      {/* Les deux cartes du bas */}
      <div className="w-full flex flex-col gap-4 mt-8 pb-5">
        {/* Section 1 : Création de solutions */}
        <div className="w-full bg-base-900 rounded-2xl p-6 ombre border-l-4 border-teal-500">
          <h2 className="text-xl font-bold mb-2 text-teal-400">
            Comment je peux vous aider ?
          </h2>
          <p className="text-sm leading-relaxed text-base-300 mb-4">
            Je construis des applications web robustes et esthétiques, du front-end au back-end. Que ce soit pour un site vitrine élégant, une plateforme e-commerce dynamique ou une application web complexe, je m'assure que votre vision prenne vie avec une <span className="font-bold">architecture solide et un code propre</span>.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mt-4 text-gray-400">
            <li>Développement Front-end avec React JS</li>
            <li>Création d'APIs RESTful avec Express JS</li>
            <li>Intégration de bases de données (MongoDB, MySQL)</li>
          </ul>
        </div>

        {/* Section 2 : Mon approche et ce que je recherche */}
        <div className="w-full bg-base-900 rounded-2xl p-6 ombre border-l-4 border-violet-500">
          <h2 className="text-xl font-bold mb-2 text-violet-400">
            Mon approche & Ce que je recherche
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            Je crois fermement en un développement agile, axé sur les résultats et la collaboration. Mon objectif est de fournir des solutions optimisées, faciles à maintenir et à faire évoluer.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            Actuellement à la recherche d'opportunités stimulantes pour rejoindre une équipe innovante en tant que développeur junior. Je suis impatient de contribuer à des projets ambitieux et de continuer à développer mes compétences.
          </p>
          <div className="text-right text-xs text-base-500 mt-4">
            Contact : 038 94 233 51 | <a href="mailto:niavo.kevin9@gmail.com" className="hover:text-teal-400 transition-colors">niavo.kevin9@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}