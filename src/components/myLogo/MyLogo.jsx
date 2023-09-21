import React from "react";
import "./MyLogo.css"

const MyLogo = () => {
  return (
    <div>
      <div className="logo-container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p className="Lparaf" style={{ border: "2px solid blue", width: "50px", height: "50px", borderRadius: "50%", padding: "3rem", display: "flex", alignItems: "center", justifyContent: "center",textAlign: "center" }}>
          <span>My</span>
          <span>CODING</span>
        </p>
      </div>
    </div>
  );
};

export default MyLogo;
