import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="pink-linear-gradient">
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h1>Expandable Content</h1>
      <div/>
    </header>
  );
};

export default Header;
