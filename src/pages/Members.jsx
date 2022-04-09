import React from "react";
import { Link } from "react-router-dom";
import PP from './pp.jpeg'
import Linkedin from './linkedin.png'

const memberCard = [
  {
    name: "Shashank Jaiswal",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: "https://www.linkedin.com/in/shashank-jaiswal-1208/"
  },
  {
    name: "Shashank",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: ""    
  },
  {
    name: "Shashank",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: ""    
  },
  {
    name: "Shashank",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: ""    
  },
  {
    name: "Shashank",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: ""    
  },
  {
    name: "Shashank",
    year: "2nd",
    domain: "web dev",
    about: "bla bla bla bla",
    branch: "CSE",
    designation: "Member",
    linkedin: ""    
  }
]

function Members() {
  return (
    <div className="">
      <h1 className="mx-10 sm:mx-24 pt-16 font-bold text-4xl text-center">
        KIIT ROBOTICS SOCIETY
      </h1>
      <hr className="mx-10 sm:mx-24 mt-2 border-t-2 border-black" />
      <p className="mx-10 sm:mx-24 pt-4 font-semibold text-2xl text-center">
        Presents the Family
      </p>

      <div className="py-16 mx-5 sm:mx-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center">

          {memberCard.map(memberCard => {
            return (
              <div class="h-[420px] bg-transparent cursor-pointer group perspective my-8 mx-4">
            <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 flex flex-col items-center border-2">
              {/* card-fron */}
              <div class=" backface-hidden mt-10">
                <img className="rounded-full w-52 h-52" src={PP}/>
              </div>
              <h1 className="pt-10 text-2xl">{memberCard.name}</h1>
              <h2 className="text-lg">{memberCard.domain}</h2>
              {/* card-back */}
              <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-24">
                  <h1 class="text-3xl font-semibold">{memberCard.name}</h1>
                  <p class="my-1"><b>Branch:</b> {memberCard.branch}</p>
                  <p class="my-1"><b>Designation:</b> {memberCard.designation}</p>
                  <p class="my-1"><b>About:</b> {memberCard.about}</p>
                  <p class="my-1"><b>Domain:</b> {memberCard.domain}</p>
                  <Link target="_blank" to={memberCard.linkedin} class="px-6 py-2 font-semibold absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"><img className="w-10" src={Linkedin} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
            )
          })}     

        </div>
      </div>
    </div>
  );
}

export default Members;
