import React from "react";
const Header = function () {
  const headerStyle = {
    background: "black",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    padding: 20
  };
  return <div style={headerStyle}>Phone Directory</div>;
};

export default Header;
