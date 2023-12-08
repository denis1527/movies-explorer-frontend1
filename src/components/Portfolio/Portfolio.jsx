import React from 'react';
import Projects from '../Projects/Projects';
import './portfolio.css';

const Portfolio = () => {
  return (
      <main className='portfolio'>
        <div className="portfolio__wrapper">
          <h2 className="portfolio__heading">
            Портфолио
          </h2>
          <div className="portfolio__projects">
            <Projects />
          </div>
        </div>
      </main>
  );
};

export default Portfolio;

