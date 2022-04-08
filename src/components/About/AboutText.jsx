import Line from "./Line";
function AboutText(props) {
  return (
    // <div className="border-solid border-black border ">
    <div>
      
      <div className="container flex flex-col items-center text-left md px-30  bg-slate 50 ">
      <text className="font-serif text-3xl">About KIIT Robotics Society</text>
      <br></br>
        <Line color="black" width="50%"/>
        <br></br>
        <p className="px-0.5">
          {" "}
          The concept and creation of manual and autonomous machines dated way
          back to the early centuries. However credible research into the
          effective functionality and potential usage of these machines did not
          grow substantially until the 20th century.Toady robotics is a rapidly
          growing field and as we continue to research, design and build new
          machines that serve a major role in eminent areas like domestic ,
          commercial and military, it’s presence has become quite inevitable in
          almost everybody’s life.
        </p>
        <br></br>
        <p>
          Established in 2011, KIIT ROBOTICS SOCIETY is one of the oldest
          functional society at KIIT University,and is registered under KSAC .
          The society mainly aims at promoting research and development in
          robotics and almost all other trending technical fields . So that we
          can encourage, instill an interest and guide young minds from all the
          branches of the university towards development and innovation .
        </p>
        <br></br>
        <p>
          {" "}
          The society essentially serves as a platform where knowledge is
          channeled to the students who take interest in learning and
          implementing it into their creative ideas. Guided by knowledgeable
          seniors and super-seniors, who are extremely proficient in their
          respective field , here at KIIT ROBOTICS SOCIETY , no problem gets
          unsolved.
        </p>
        <br></br>
        <p>
          {" "}
          Apart from conducting regular weekly class on different technical
          domains , we also conduct various technical workshops and events and
          also assist students to effectively take part in numerous
          inter-college competitions across the country.{" "}
        </p>
      </div>

      <br></br>

      <div className="container flex flex-col items-center md px-56 bg-slate-100 ">
        <br></br>
        <Line color="black" width="70%" />
        <br></br>
        <p>
          The primary objective of the society is to promote and empower
          research and development in robotics and all other trending technical
          fields.
        </p>
        <br></br>
        <p>
          {" "}
          Robotics is an inter disciplinary field , so also ,we at KIIT ROBOTICS
          SOCIETY believe in innovation through teamwork. One can be a part of
          this enriching voyage either by volunteering into the team or as an
          external member bonded by the urge to develop through technology.
        </p>
        <br></br>
        <p>
          The aim is to build a community and technical hub where teaching ,
          training and research bind tech enthusiasts, to create a better
          tomorrow. So come let’s innovate together !
        </p>
        <br></br>
      </div>
    </div>
  );
}

export default AboutText;
