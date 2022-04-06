import React from "react";

const roboticsRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  }
];

const embeddeRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const mlRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const iotRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const webdevRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

function Recruitment() {
  return (
    <div>
      <h1 className="mx-24 pt-16 font-bold text-4xl ">Recruitment 2021</h1>
      <hr className="mx-24 mt-2 border-t-2 border-black" />
      <p className="mx-24 pt-4 font-semibold text-xl">We extend our heartliest welcome to all our new members!!!</p>

      <div className="py-16 mx-28 px-24">
        {/* robotics */}
        <h2 className="font-bold text-xl pt-8 pb-2">Robotics</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {roboticsRecruit.map((roboticsRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] odd:bg-gray-400 even:bg-gray-300">
                  <td className="">{roboticsRecruit.name}</td>
                  <td className="">{roboticsRecruit.roll}</td>
                  <td className="">{roboticsRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Embedded */}
        <h2 className="font-bold text-xl pt-8 pb-2">Embedded</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr>
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {embeddeRecruit.map((embeddeRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] odd:bg-gray-400 even:bg-gray-300">
                  <td className="">{embeddeRecruit.name}</td>
                  <td className="">{embeddeRecruit.roll}</td>
                  <td className="">{embeddeRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ML */}
        <h2 className="font-bold text-xl pt-8 pb-2">ML</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr>
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {mlRecruit.map((mlRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] odd:bg-gray-400 even:bg-gray-300">
                  <td className="">{mlRecruit.name}</td>
                  <td className="">{mlRecruit.roll}</td>
                  <td className="">{mlRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* IoT */}
        <h2 className="font-bold text-xl pt-8 pb-2">IoT</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr>
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {iotRecruit.map((iotRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] odd:bg-gray-400 even:bg-gray-300">
                  <td className="">{iotRecruit.name}</td>
                  <td className="">{iotRecruit.roll}</td>
                  <td className="">{iotRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Web-Dev */}
        <h2 className="font-bold text-xl pt-8 pb-2">Web Development</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr>
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {webdevRecruit.map((webdevRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] odd:bg-gray-400 even:bg-gray-300">
                  <td className="">{webdevRecruit.name}</td>
                  <td className="">{webdevRecruit.roll}</td>
                  <td className="">{webdevRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Recruitment;
