import { useState, React } from "react";
import "material-symbols";
import "./Table.css";

// StatusIndicator component
function StatusIndicator({ value }) {
  switch (value) {
    case true:
      return <p className="table-col tick"></p>;
    case false:
      return <p className="table-col dash"></p>;
    default:
      return <span className="table-col">{value}</span>;
  }
}

function Table({ element, id, selectedTable }) {
  const [viewAll, setViewAll] = useState(false);

  const isThirdPartyIntegrations = element.title === "Third Party Integrations";
  const numberOfRowsToShow =
    viewAll || !isThirdPartyIntegrations ? element.content.length : 5;
  const displayedRows = element.content.slice(0, numberOfRowsToShow);

  return (
    <>
      <div className={`table-row table-row-${id}`}>
        <h4>{element.title}</h4>
        {displayedRows.map((value, index) => (
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
        {isThirdPartyIntegrations && !viewAll && (
          <div className="view-all" onClick={() => setViewAll(true)}>
            VIEW ALL +
          </div>
        )}
      </div>
    </>
  );
}
export default Table;
