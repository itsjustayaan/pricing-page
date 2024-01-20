import { useState, React } from "react";
import "./App.css";
import "material-symbols";

import Duration from "./components/Durations/Duration";
import SchemeCards from "./components/SchemeCards/SchemeCard";
import ProductBox from "./components/ProductBoxes/ProductBox";
import Question from "./components/Questions/Question";
import Table from "./components/Tables/Table";

import { agent1, agent2 } from "./structure/agents";
import { ques } from "./structure/faq";
import { product } from "./structure/products";
import { table1, table2 } from "./structure/table";

function App() {
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(agent1);
  const [selectedTable, setSelectedTable] = useState(table1);
  const handleAgentChange = (newAgent) => {
    if (newAgent === agent2 && selectedDuration > 0) {
      setSelectedDuration(selectedDuration - 1);
    }
    if (newAgent === agent1) {
      setSelectedDuration(selectedDuration + 1);
      setSelectedTable(table1);
    } else {
      setSelectedTable(table2);
    }
    setSelectedAgent(newAgent);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="logo-products-container">
            <div className="hf-productbar-logo">
              <img
                id="hfTopbarlogo"
                src="//assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg"
                width="116"
                height="24"
                alt="happyfox logo"
              />
            </div>
            <div className="products-tag">
              <p>Products</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
          <div className="login-container">
            <a href="dgdbd" className="login-tag">
              Log In
            </a>
          </div>
        </div>
      </header>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="helpdesk-logo-container">
            <span
              className="material-symbols-outlined burger-menu"
              style={{
                fontWeight: "600",
                padding: "0 10px 0 0",
              }}
            >
              menu
            </span>
            <a href="sfadsa" className="hf-productnav-link">
              <img
                id="hfNavbarlogo"
                src="//assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg"
                alt="happyfox logo"
                className="hf-productnav-logo"
              />
              <span className="hf-productnav-logo-text">helpdesk</span>
            </a>
          </div>
          <div className="options-container">
            <div className="fea-button">
              Features
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div className="sol-button">
              Solutions
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div className="price-button">Pricing</div>
            <div className="res-button">
              Resources
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
          <div className="demo-button-container">
            <div className="demo-button">Get a Demo</div>
          </div>
        </div>
      </div>
      <section className="plans-menu">
        <div class="back-banner ">
          <div class="outer-container">
            <div className="plans-pricing-container">
              <h1>Plans &amp; Pricing</h1>
            </div>
            <div className="outer-agent-container">
              <div className="agents-container">
                <div
                  className={`agent-not-selected ${
                    selectedAgent === agent1 ? "agent-selected" : ""
                  }`}
                  onClick={() => handleAgentChange(agent1)}
                >
                  <h4 className="pricing-explainer-heading">
                    Agent-based pricing
                  </h4>
                </div>
                <div
                  className={`agent-not-selected ${
                    selectedAgent === agent2 ? "agent-selected" : ""
                  }`}
                  onClick={() => handleAgentChange(agent2)}
                >
                  <h4 className="pricing-explainer-heading">
                    Unlimited Agents
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-menu">
        <div className="duration-container">
          {selectedAgent[selectedAgent.length - 1].map((element, index) => (
            <Duration
              key={index}
              element={element}
              id={index}
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
            />
          ))}
        </div>
        <div className="scheme-container">
          <div className="scheme-inner-container">
            {selectedAgent
              .slice(0, selectedAgent.length - 1)
              .map((element, index) => (
                <SchemeCards
                  key={index}
                  element={element}
                  id={index}
                  selectedDuration={selectedDuration}
                  selectedAgent={selectedAgent}
                />
              ))}
          </div>
          <p className="scheme-p">
            All plans require a minimum of 5 help desk agents. Non-profit and
            educational organizations are eligible for a discount.
          </p>
        </div>
      </section>
      <h3 className="table-section-h3">Compare Help Desk Plans</h3>
      <div className="table-container">
        <div className="col-name-header">
          <h4>{selectedAgent[0].offername}</h4>
          <h4>{selectedAgent[1].offername}</h4>
          <h4>{selectedAgent[2].offername}</h4>
          <h4>{selectedAgent[3].offername}</h4>
        </div>
        <div className="table-inner-container">
          {selectedTable.map((element, index) => (
            <Table key={index} element={element} id={index} />
          ))}
        </div>
        <p className="table-bottom">
          <sup>*</sup> Planned <br /># Only with custom domain
        </p>
      </div>
      <section className="faq-section">
        <div className="faq-container">
          <h3>Frequently Asked Question</h3>
          <div className="ques-container">
            {ques.map((element, index) => (
              <Question key={index} element={element} id={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="not-footer-section">
        <div className="not-footer">
          <p className="not-footer-p">More From HappyFox</p>
          <div className="products-box">
            {product.map((element, index) => (
              <ProductBox key={index} element={element} id={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
