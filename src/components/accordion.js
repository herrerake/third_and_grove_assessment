import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ data }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `80px`
    );

    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }

  return (
    <div className="accordion-section">
      <div className="accordion-top">
        <div>
          <img
            src={data.picture.thumbnail}
            alt={`${data.name.first} ${data.name.last} Profile Picture`}
          />
        </div>
        <div>
          <h3>
            {data.name.first} {data.name.last}
          </h3>
          <h4>
            {data.location.city}, {data.location.country}
          </h4>
        </div>
        <div className={`accordion-icon ${setActive}`} onClick={toggleAccordion}>
          <FontAwesomeIcon className={`${setRotate}`} icon={faChevronDown} />
        </div>
      </div>
      <div className="accordion-bottom pink-linear-gradient" style={{ maxHeight: `${setHeight}` }}>
        <div>
          <h5>Phone</h5>
          <p>{data.phone}</p>
        </div>
        <div>
          <h5>Email</h5>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
