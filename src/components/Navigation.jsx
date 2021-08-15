import React from "react";
import "./navigation.css"
export default function Navigation(props) {
  return (
 
    <nav className="menu">
      <ul className="centre-text bold-text"></ul>
      <a href="/definition" className="card">
        <li>La naturopathie</li>
      </a>

      <a href="/aboutme" className="card">
        <li>Mon approche</li>
      </a>

      <a
        href="https://www.coraliebeguin.com/tarifs-et-rendez-vous/"
        className="card"
      >
        <li>Tarifs & rendez-vous</li>
      </a>
    </nav>
   
  );
}
