import react from "react";

function Line({color,width}) {
    return (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      width: width,

    }}
  />
    );
}

export default Line;
