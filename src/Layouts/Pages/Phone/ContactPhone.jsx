import { BiCodeAlt } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import React from "react";

export default function Contact() {
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

  const contacts = [
    { icon: <BsTelephone />, value: ": 0389423351", href: null },
    { icon: <BsWhatsapp />, value: ": 0389423351", href: "https://wa.me/0389423351" },
    { icon: <FiLinkedin />, value: ": Niavo Kevin", href: "https://www.linkedin.com/in/kevin-niavo-39a541286/" },
    { icon: <CiFacebook />, value: ": Niavo Kevin", href: "https://web.facebook.com/niavo.kevin" },
    { icon: <AiOutlineMail />, value: ": niavo.kevin9@gmail.com", href: "mailto:niavo.kevin9@gmail.com" },
  ];

  const identity = [
    { icon: <AiOutlineUser />, value: "MAMINIRINA Niavo Kevin" },
    { icon: <BiCodeAlt />, value: "Développeur fullstack JS Junior" },
    { icon: <FaMapMarkerAlt />, value: "Itaosy Antananarivo Madagascar" },
  ];

  const inputClass =
    "w-full p-2.5 text-sm lg:text-base text-white bg-transparent border border-white/40 outline-none rounded-md focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition-colors duration-200 placeholder:text-white/40";

  return (
    <section
      id="Contact"
      className="w-full bg-base-900 py-16 px-3 sm:px-4"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-5 lg:gap-6">
        <div className="w-full lg:w-1/2 border border-white/30 bg-base-900 flex flex-col">
          <div className="shrink-0 p-3 text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wider text-center text-white border-b border-white/30">
            Informations
          </div>

          <div className="flex flex-col lg:flex-row flex-1">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-2 p-4 text-sm sm:text-base lg:text-lg font-bold text-white lg:border-r border-white/30">
              {contacts.map((contact, index) => {
                const inner = (
                  <>
                    <span className="shrink-0 text-base lg:text-lg">{contact.icon}</span>
                    <span className="break-all">{contact.value}</span>
                  </>
                );
                return contact.href ? (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full p-3 text-white no-underline hover:bg-base-700 rounded-xl transition-colors duration-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 w-full p-3 cursor-not-allowed hover:bg-base-700 rounded-xl transition-colors duration-200"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col border-t lg:border-t-0 border-white/30">
              <div className="flex flex-col items-center justify-center gap-3 p-5 text-sm sm:text-base lg:text-lg font-bold text-white">
                {identity.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-center">
                    <span className="shrink-0">{item.icon}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="px-3 pb-3 mt-auto">
                <div className="w-full h-48 sm:h-56 border border-white/30 overflow-hidden">
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

        <div className="w-full lg:w-1/2 border border-white/30 bg-base-900 flex flex-col">
          <div className="shrink-0 p-3 text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wider text-center text-white border-b border-white/30">
            Contactez-moi
          </div>

          <form className="p-4 sm:p-5 flex flex-col gap-3 flex-1" onSubmit={onSubmit}>
            <label htmlFor="nom" className="text-base lg:text-lg font-bold text-white">
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
              whileTap={{ scale: 0.998 }}
              placeholder="Veuillez entrer votre nom"
              className={inputClass}
              required
            />

            <label htmlFor="email" className="text-base lg:text-lg font-bold text-white">
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
              whileTap={{ scale: 0.998 }}
              placeholder="Veuillez entrer votre Email"
              className={inputClass}
              required
            />

            <label htmlFor="message" className="text-base lg:text-lg font-bold text-white">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              title="Entrez votre message"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.998 }}
              placeholder="Veuillez entrer votre message"
              className={`${inputClass} min-h-[140px] resize-none`}
              required
            />

            <div className="pt-2 mt-auto">
              <motion.input
                type="submit"
                value="Envoyer"
                className="w-full p-3 text-base lg:text-lg font-bold text-white border border-base-500 rounded-2xl bg-base-900 hover:bg-base-700 hover:border-base-900 cursor-pointer transition-colors duration-200"
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}