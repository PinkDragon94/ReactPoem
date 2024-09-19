import React from 'react';
import './Poem.css';

const Poem = () => {
  const haiku = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "Poppy blooms."
  ];
  return (
    <div className="card">
      <h2 className="poem-title">Haiku Poem</h2> {/* Poem title added */}
      {haiku.map((line, index) => (
        <React.Fragment key={index}>
          <p>{line}</p>
          {index < haiku.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Poem;

 

