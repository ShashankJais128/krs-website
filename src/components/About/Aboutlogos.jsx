import react from "react";
import krslogo from "../../pages/krslogo.jpg";
import kiitlogo from "../../pages/kiitlogo.jpg";
import ksaclogo from "../../pages/ksaclogo.png";

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