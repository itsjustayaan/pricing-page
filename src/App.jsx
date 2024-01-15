import "./App.css";
import "material-symbols";
import Duration from "./components/Duration";
import { agent1, agent2 } from "./Agents";
import React from "react";
import SchemeCards from "./components/SchemeCards";
import { useState, useEffect } from "react";

function App() {
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(agent1);
  useEffect(() => {
    if (selectedAgent === agent2 && selectedDuration === 3) {
      setSelectedDuration(2);
    }
  }, [selectedAgent, selectedDuration]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-products-container">
          <div className="hf-productbar__logo">
            <img
              id="hfTopbarlogo"
              src="//assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg"
              width="116"
              height="24"
              alt="happyfox logo"
            />
          </div>
          <div className="products-tag">
            Products
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
        <div className="login-container">
          <a className="login-tag">Log In</a>
        </div>
      </header>
      <section className="nav-bar">
        <div className="nav-bar-container">
          <div className="helpdesk-logo-container">
            <a className="hf-productnav__link">
              <img
                id="hfNavbarlogo"
                src="//assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg"
                alt="happyfox logo"
                width="32"
                height="32"
                className="hf-productnav__logo"
              />
              <span className="hf-productnav__logo-text">helpdesk</span>
            </a>
          </div>
          <div className="options-container">
            <div className="fea-button">
              Features
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div className="sol-button">
              Solutions
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div className="price-button">Pricing</div>
            <div className="res-button">
              Resources
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
          <div className="demo-button-container">
            <div className="demo-button">Get a Demo</div>
          </div>
        </div>
      </section>
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
                  onClick={() => setSelectedAgent(agent1)}
                >
                  <h4 className="pricing-explainer__heading">
                    Agent-based pricing
                  </h4>
                </div>
                <div
                  className={`agent-not-selected ${
                    selectedAgent === agent2 ? "agent-selected" : ""
                  }`}
                  onClick={() => setSelectedAgent(agent2)}
                >
                  <h4 className="pricing-explainer__heading">
                    Unlimited Agents
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-menu">
        <div className="pricing-menu-container">
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
            {selectedAgent
              .slice(0, selectedAgent.length - 1)
              .map((element, index) => (
                <SchemeCards
                  key={index}
                  element={element}
                  id={index}
                  selectedDuration={selectedDuration}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
