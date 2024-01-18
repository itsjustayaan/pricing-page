import React from "react";
import "./Duration.css";
function Duration({ element, id, setSelectedDuration, selectedDuration }) {
  return (
    <div
      className={`dur-container-common ${
        id === selectedDuration
          ? "dur-container-selected"
          : `dur-container-${id}`
      }`}
      onClick={() => setSelectedDuration(id)}
    >
      {element.name1}
      {element.name2 && <span>{element.name2}</span>}
    </div>
  );
}

export default Duration;
