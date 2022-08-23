import React from 'react';
import Loading from './Loading';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktails march your search criteria</h2>
    );
  }

  return (
    <section>
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
