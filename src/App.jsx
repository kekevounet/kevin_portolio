import { Routes, Route } from "react-router-dom";
import Index from "./Layouts/Components/Index";
import NavBar from "./Layouts/Components/NavBar";
import Swal from 'sweetalert2'
import { useEffect } from "react";
export default function App()
{
  // Comportement
useEffect(() => {
  const showTermsAndConditions = async () => {
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree sir.";
      }
    });

    if (accept) {
      Swal.fire("You agreed, thanks you. ");
    }
  };

  showTermsAndConditions();
}, []);
  // Affichage
  return(
    <div className="">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Index /> }  />
      </Routes>
    </div>
  )
}