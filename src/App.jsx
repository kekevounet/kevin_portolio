import { Routes, Route } from "react-router-dom";
import Index from "./Layouts/Pages/Index";
import NavBar from "./Layouts/Components/NavBar";
import Swal from 'sweetalert2';
import ProfilPhone from './Layouts/Pages/Phone/ProfilPhone';
import CompetencePhone from './Layouts/Pages/Phone/CompetencePhone';
import ContactPhone from './Layouts/Pages/Phone/ContactPhone';
import { useEffect, useState } from "react";
export default function App()
{
  // Etat
  const [ navHoverFlou, setNavHoverFlou ] = useState(false);

  // Comportement
useEffect(() => {
  const showTermsAndConditions = async () => {
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        Acceptez-vous de d'acceptez que ce site est encore en cours de prodution ?
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "Vous devez acceptez afin de pouvoir continuer";
      }
    });

    if (accept) {
      Swal.fire("Je vous remercie pour votre comprehension.");
    }
  };

  showTermsAndConditions();
}, []);
  // Affichage
  return(
    <div className="">
      <NavBar navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} />
      <Routes>
        <Route path='/' element={ <Index navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} /> }  />
        <Route path='/Profil' element={ <ProfilPhone navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} /> }  />
        <Route path='/Competence' element={ <CompetencePhone navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} /> }  />
        <Route path='/Contact' element={ <ContactPhone navHoverFlou={navHoverFlou} setNavHoverFlou={setNavHoverFlou} /> }  />
      </Routes>
    </div>
  )
}