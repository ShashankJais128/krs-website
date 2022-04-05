import react from "react";

function Line({color}) {
    return (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      width: "50%"
    }}
  />
    );
}

export default Line;
