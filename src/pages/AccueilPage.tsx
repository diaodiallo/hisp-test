import React, { FunctionComponent } from 'react';
import NavBar from '../components/nav-bar';
  
const AccueilPage: FunctionComponent = () => {
  
  return (
    <div className="center">
      <NavBar />
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page d'accueil"/>
      <h1>Hey, bienvenue a la page d'accueil !</h1> 
    </div>
  );
}
  
export default AccueilPage;