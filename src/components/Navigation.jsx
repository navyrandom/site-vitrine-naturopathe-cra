import React from "react";

export default function Navigation(props) {
  return (
    <div className='grid'>
      <a href="/description" className='card'>
        <h2>Pourquoi la naturopathie? </h2>
      </a>

      <a href="/about-me" className='card'>
        <h2>Mon approche </h2>
      </a>

      <a href="/consultation" className='card'>
        <h2>Consultation </h2>
      </a>

      <a
        href="https://www.coraliebeguin.com/tarifs-et-rendez-vous/"
        className='card'
      >
        <h2>Tarifs & rendez-vous </h2>
      </a>
    </div>
  );
}


