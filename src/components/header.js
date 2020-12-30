import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="pink-linear-gradient">
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>Expandable Content</div>
      <div/>
    </header>
  );
};

export default Header;
