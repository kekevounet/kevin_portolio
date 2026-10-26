import { BiCodeAlt } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import React from "react";

export default function Contact({ navHoverFlou }) {
  const [formData, setFormData] = React.useState({
    nom: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      access_key: "c9836232-f4a2-491b-b65d-55d8e6383360",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      const json = await res.json();

      if (json.success) {
        Swal.fire({
          title: "Message envoyé avec succès",
          text: "Tu auras une réponse de la part de Kevin sous peu.",
          icon: "success"
        });
        setFormData({ nom: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi.");
      }
    } catch (error) {
      Swal.fire({
        title: "Oups, erreur !",
        text: "Une galère est survenue, réessaie plus tard.",
        icon: "error"
      });
    }
  };

  return (
    <div
      id="Contact"
      className={`w-full min-h-screen lg:h-screen flex items-center justify-center py-24 lg:py-0 ${navHoverFlou ? 'blur-md' : '' }`}
    >
      <div className="w-full lg:h-[80%] px-4 sm:px-6 lg:px-0 flex justify-center lg:justify-between items-stretch gap-5 flex-col lg:flex-row">
        {/* Informations */}
        <div className="w-full lg:h-full border border-base-500 backdrop-blur-sm lg:ml-20 flex flex-col">
          <div className="p-3 text-2xl font-extrabold tracking-wider text-center text-white border-b border-base-500">
            Informations
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:flex-1">
            {/* Côté gauche */}
            <div className="flex flex-col items-center justify-center w-full py-6 lg:py-0 space-y-3 lg:space-y-5 text-base sm:text-lg lg:text-xl font-bold text-white lg:border-r border-base-500 lg:h-full px-4">
              <div className="flex items-center gap-3 p-3 cursor-not-allowed hover:bg-base-700 rounded-xl hover:outline outline-1 outline-base-300 outline-offset-4">
                <BsTelephone className="shrink-0" />
                <span>: 0389423351</span>
              </div>
              <a
                href="https://wa.me/0389423351"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-white no-underline cursor-pointer hover:bg-base-700 rounded-xl hover:outline outline-1 outline-base-300 outline-offset-4"
              >
                <BsWhatsapp className="shrink-0" />
                <span>: 0389423351</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-niavo-39a541286/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-white no-underline cursor-pointer hover:bg-base-700 rounded-xl hover:outline outline-1 outline-base-300 outline-offset-4"
              >
                <FiLinkedin className="shrink-0" />
                <span>: Niavo Kevin</span>
              </a>
              <a
                href="https://web.facebook.com/niavo.kevin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-white no-underline cursor-pointer hover:bg-base-700 rounded-xl hover:outline outline-1 outline-base-300 outline-offset-4"
              >
                <CiFacebook className="shrink-0" />
                <span>: Niavo Kevin</span>
              </a>
              <a
                href="mailto:niavo.kevin9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 text-white no-underline cursor-pointer hover:bg-base-700 rounded-xl hover:outline outline-1 outline-base-300 outline-offset-4"
              >
                <AiOutlineMail className="shrink-0" />
                <span>: niavo.kevin9@gmail.com</span>
              </a>
            </div>

            {/* Côté droite */}
            <div className="flex flex-col items-center justify-between w-full border-t lg:border-t-0 border-base-500 lg:h-full py-6 lg:py-0">
              <div className="flex flex-col items-center justify-center w-full space-y-3 lg:space-y-5 text-base sm:text-lg lg:text-xl font-bold text-white py-4 lg:py-0 lg:h-1/2">
                <div className="flex items-center gap-3 px-4">
                  <AiOutlineUser className="shrink-0" />
                  <span>MAMINIRINA Niavo Kevin</span>
                </div>
                <div className="flex items-center gap-3 px-4">
                  <BiCodeAlt className="shrink-0" />
                  <span>Développeur fullstack JS Junior</span>
                </div>
                <div className="flex items-center gap-3 px-4">
                  <FaMapMarkerAlt className="shrink-0" />
                  <span>Itaosy Antananarivo Madagascar</span>
                </div>
              </div>

              {/* Map */}
              <div className="w-full px-4 lg:px-2 lg:h-1/2 flex items-stretch">
                <div className="w-full h-48 lg:h-full bg-white border border-base-500">
                  <iframe
                    title="Location de Niavo Kevin"
                    className="w-full h-full block"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=-18.90038,47.47462&z=18&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="w-full lg:w-1/2 border border-base-500 lg:h-full lg:mr-20 backdrop-blur-sm flex flex-col">
          <div className="p-3 text-2xl font-extrabold tracking-wider text-center text-white border-b border-base-500">
            Contactez-moi
          </div>

          <form
            className="w-full p-4 lg:p-2 flex flex-col space-y-3 flex-1 justify-center"
            onSubmit={onSubmit}
          >
            <label htmlFor="nom" className="text-lg font-bold text-white">
              Nom
            </label>
            <motion.input
              id="nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              title="Entrez votre nom"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.01 }}
              placeholder="Veuillez entrer votre nom"
              className="p-2 transition-opacity duration-300 border border-base-500 outline-none bg-white text-gray-900 rounded-md ring-cyan-600 focus:ring-4"
              required
            />

            <label htmlFor="email" className="text-lg font-bold text-white">
              Email
            </label>
            <motion.input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              title="Entrez votre Email"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.01 }}
              placeholder="Veuillez entrer votre Email"
              className="p-2 transition-opacity duration-300 border border-base-500 outline-none bg-white text-gray-900 rounded-md ring-cyan-600 focus:ring-4"
              required
            />

            <label htmlFor="message" className="text-lg font-bold text-white">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              title="Entrez votre message"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.01 }}
              placeholder="Veuillez entrer votre message"
              className="p-2 border border-base-500 outline-none min-h-[140px] resize-none transition-opacity duration-300 rounded-md ring-cyan-600 focus:ring-4 bg-white text-gray-900"
              required
            />

            <div className="w-full flex items-end pt-2">
              <motion.input
                type="submit"
                value="Envoyer"
                className="w-full p-3 text-lg font-bold text-white border border-base-500 rounded-2xl bg-base-900 hover:bg-base-700 hover:border-base-900 cursor-pointer"
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}