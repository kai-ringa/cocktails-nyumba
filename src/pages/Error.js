import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className="section error-section">
      <div className="error-container">
        <h2 className="section-title">
          oops! we could not find what you're looking for.
        </h2>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
}

export default Error;
