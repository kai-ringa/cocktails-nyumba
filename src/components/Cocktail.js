import React from 'react';
import { Link } from 'react-router-dom';

function Cocktail({ image, id, name, contents, glass }) {
  return (
    <article className="cocktail">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{contents}</p>
        <Link to={`cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;
