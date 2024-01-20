import React from "react";
import "material-symbols";
import "./Table.css";

// StatusIndicator component
function StatusIndicator({ value }) {
  switch (value) {
    case true:
      return (
        <span
          className="table-col material-symbols-outlined"
          style={{
            color: "#56b67d",
          }}
        >
          check
        </span>
      );
    case false:
      return (
        <span className="table-col material-symbols-outlined">
          horizontal_rule
        </span>
      );
    default:
      return <span className="table-col">{value}</span>;
  }
}

function Table({ element, id, selectedTable }) {
  return (
    <>
      <div className={`table-row table-row-${id}`}>
        <h4>{element.title}</h4>
        {element.content.map((value, index) => (
          <div
            key={index}
            className={`row-common row-common-${index} ${
              index % 2 === 0 ? "" : "dark"
            }`}
          >
            <p>
              <a href="dsfs">{value.label}</a>
            </p>
            <div className="ticks-grid">
              <StatusIndicator value={value.card1} />
              <StatusIndicator value={value.card2} />
              <StatusIndicator value={value.card3} />
              <StatusIndicator value={value.card4} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Table;
