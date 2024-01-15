import React from "react";
import "material-symbols";
import { agent1 } from "../Agents";

function SchemeCards({ element, id, selectedDuration }) {
  const price = agent1[4][selectedDuration].prices;
  const saving = agent1[4][selectedDuration].savings;
  return (
    <div className={`scheme-container-common scheme-container-${id}`}>
      {element.sp && <div className="sp-container">{element.sp}</div>}
      <div>{element.offername}</div>
      <div className="price-container">${price[id]} Per agent/mo</div>
      {saving && (
        <div className="saving-container">{saving[id]}% Savings* </div>
      )}
      <ul>
        {element.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        Get a demo <span class="material-symbols-outlined">navigate_next</span>
      </div>
    </div>
  );
}

export default SchemeCards;
