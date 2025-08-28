import React from 'react';

export default function ProfilLaptop({navHoverFlou}) {
  return (
    <div className={`w-full h-screen flex items-center text-base-100 justify-between flex-col gap-3 p-5 font-sans ${navHoverFlou ? 'blur-md' : '' }`} id="Profil">
      {/* Section Principale : Nom, Rôle, Mission & Vision */}
      <div className="w-full h-[60%] flex items-end justify-center">
        <div className="h-[85%] w-full rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 relative flex flex-col justify-end p-8 text-white shadow-lg overflow-hidden">
          {/* Un cercle décoratif en haut à droite pour le dynamisme */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>

          {/* Contenu principal */}
          <div className="z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Niavo Kevin</h1>
            <p className="text-2xl font-light mt-2">Développeur Full-Stack Junior</p>

            <p className="text-lg italic mt-4">
              "Ma mission est de transformer des idées innovantes en applications web performantes et intuitives, en combinant une approche méthodique avec une passion pour les technologies modernes. Je m'engage à créer des expériences numériques qui répondent aux défis d'aujourd'hui et préparent les opportunités de demain."
            </p>

            <div className="mt-6 border-t border-white border-opacity-30 pt-4">
              <p className="text-sm font-light leading-relaxed">
                Fort d'une expertise en **React.js pour le front-end** et **Express.js pour le back-end**, je conçois des solutions complètes et robustes. Mon approche est guidée par les principes du **clean code** et une attention particulière au design et à l'expérience utilisateur. J'aime résoudre des problèmes complexes et m'assurer que chaque ligne de code est à la fois fonctionnelle et élégante.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sections du bas : Comment je peux vous aider */}
      <div className="w-full h-[40%] gap-3 flex justify-between items-center">
        {/* Section 1 : Création de solutions */}
        <div className="w-1/2 h-full bg-white text-gray-800 rounded-3xl p-8 shadow-md flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-600">Comment je peux vous aider ?</h2>
            <p className="text-sm leading-relaxed mb-4">
              Je construis des **applications web robustes et esthétiques** du front-end au back-end. Que ce soit pour un site vitrine élégant, une plateforme e-commerce dynamique ou une application web complexe, je m'assure que votre vision prenne vie avec une **architecture solide et un code propre**.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 mt-4">
              <li>Développement Front-end avec React JS</li>
              <li>Création d'APIs RESTful avec Express JS</li>
              <li>Intégration de bases de données (MongoDB, MySQL)</li>
            </ul>
          </div>
          <div className="text-right text-xs text-gray-500 mt-4">
            — Votre partenaire numérique à Antananarivo, Madagascar
          </div>
        </div>

        {/* Section 2 : Mon approche et ce que je recherche */}
        <div className="w-1/2 h-full bg-white text-gray-800 rounded-3xl p-8 shadow-md flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Mon approche & Ce que je recherche</h2>
            <p className="text-sm leading-relaxed mb-4">
              Je crois fermement en un développement agile, axé sur les résultats et la collaboration. Mon objectif est de fournir des solutions optimisées, faciles à maintenir et à faire évoluer.
            </p>
            <p className="text-sm leading-relaxed">
              Actuellement à la recherche d'opportunités stimulantes pour rejoindre une équipe innovante en tant que développeur junior. Je suis impatient de contribuer à des projets ambitieux et de continuer à développer mes compétences techniques et interpersonnelles.
            </p>
          </div>
          <div className="text-right text-xs text-gray-500 mt-4">
            Contact : 038 94 233 51 | niavo.kevin9@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}