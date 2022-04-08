import react from "react";
import krslogo from "../public/images/krslogo.jpg";
import kiitlogo from "../public/images/kiitlogo.jpg";
import ksaclogo from "../public/images/ksaclogo.png";

function Aboutlogos(){

    return(
        <div className="flex items-center py-5">
        <img
          className="w-10 rounded-full ml-4 cursor-pointer"
          src={krslogo}
          alt="KRS"
        />
        <img
          className="w-10 rounded-full ml-4 cursor-pointer"
          src={kiitlogo}
          alt="KRS"
        />
        <img
          className="w-10 rounded-full ml-4 cursor-pointer"
          src={ksaclogo}
          alt="KRS"
        />
      </div>
    )

}

export default Aboutlogos;