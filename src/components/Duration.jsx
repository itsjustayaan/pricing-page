import React from "react";
import "./Duration.css";
function Duration({ element, id }) {
  return (
    <div className={`dur-container-common dur-container-${id}`}>
      {element.name1}
      <br />
      {element.name2 && <span>{element.name2}</span>}
    </div>
  );
}

export default Duration;
