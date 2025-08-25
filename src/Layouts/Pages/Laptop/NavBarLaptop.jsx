import { FaBars } from "react-icons/fa";
import Kevin from '../../Assets/Kevin.jpg';
export default function NavBar()
{
  return(
    // Position du NavBar
    <div className="w-full h-20 mt-2 fixed flex justify-center items-center">
      {/* NavBar */}
      <div className="w-[98%] h-full bg-base-100 ombre rounded-3xl flex items-center justify-between">
        {/* Mon image */}
        <div className="w-16 h-16 rounded-full bg-fond ml-5 overflow-hidden">
          <img src={Kevin} alt="Mon aperçu" className="w-full h-full object-cover" />
        </div>

        {/* Bouton Contactez */}
        <div className="w-1/6 flex h-full justify-around items-center">
          <div className=" text-lg p-3 rounded-3xl bg-secondaire-500 text-white font-bold cursor-pointer shadow-md w-1/2">Contactez-moi</div>
          <div className="text-5xl text-base-900 cursor-pointer"><FaBars /></div>
        </div>
      </div>
    </div>
  )
}