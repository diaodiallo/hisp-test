import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

  
const NavBar: FunctionComponent = () => {

    const history = useHistory();

    const goToUsers = () => {
      history.push(`/users`);
    }
    const goToAccueil = () => {
        history.push(`/accueil`);
      }
    const goToLogout = () => {
        history.push(`/`);
      }
    
  return (
    <div className="col s6 m4">
     <nav>
          <div className="nav-wrapper teal">
            <div className="brand-logo center">
            <button className="btn" onClick={() => goToAccueil()}>Accueil</button>
            <button className="btn" onClick={() => goToUsers()}>Users</button>
            <button className="btn" onClick={() => goToLogout()}>Logout</button>
            </div>
          </div>
        </nav>
    </div>
  );
}
  
export default NavBar;
