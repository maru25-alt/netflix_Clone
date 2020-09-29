import React, { useEffect, useState } from "react";
import "../css/nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll", handleShow(false));
    // };
  });
  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
        alt="netflix logo"
      />
      <img
        className="nav__icon"
        src=" https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="netflix logo"
      />
    </div>
  );
}

export default Navbar;
