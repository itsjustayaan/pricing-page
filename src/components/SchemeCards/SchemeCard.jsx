import React from "react";
import "material-symbols";
import { agent2 } from "../../structure/agents";
import "./SchemeCard.css";

function SchemeCards({ element, id, selectedDuration, selectedAgent }) {
  const price =
    selectedAgent[selectedAgent.length - 1][selectedDuration].prices;
  const saving =
    selectedAgent[selectedAgent.length - 1][selectedDuration].savings;
  return (
    <div className={`scheme-container-common scheme-container-${id}`}>
      {element.sp ? <p className="sp-container">{element.sp}</p> : ""}
      <h3 className="scheme-name">{element.offername}</h3>
      <div className="pricing-container">
        <div className="price-container">
          <span class="material-symbols-outlined">attach_money</span>
          <span className="price-both">
            <span className={`price price-${id}`}>{price[id]} </span>
            <span className="price-du">
              {selectedAgent === agent2 ? "/ month" : "Per agent/mo"}
            </span>
          </span>
        </div>
        {saving ? (
          <div className="saving-container">
            {saving[id]}% Savings<sup>*</sup>
          </div>
        ) : (
          <div className="saving-container"></div>
        )}
      </div>
      <div className={`list-container list-container-${id}`}>
        <ul className={`benefit-list-common benefits-lists-${id}`}>
          {element.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`get-demo-button get-demo-button${id}`}>
        <span>Get a demo</span>
        <span class="material-symbols-outlined">navigate_next</span>
      </div>
    </div>
  );
}

export default SchemeCards;
