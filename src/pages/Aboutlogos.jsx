import react from "react";
import krslogo from "./krslogo.jpg";
import kiitlogo from "./kiitlogo.jpg";
import ksaclogo from "./ksaclogo.png";
import Navbar from "./Navbar";

function Aboutlogos(){

    return(
        <div className="flex items-center">
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