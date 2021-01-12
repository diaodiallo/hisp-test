import React, { FunctionComponent } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AccueilPage from './pages/AccueilPage';
import UsersList from './pages/UsersList';
import LoginPage from './pages/LoginPage';
import UserForm from './pages/userForm';

const App: FunctionComponent = () => {
  
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <div className="brand-logo center">HISP Africa test App</div>
          </div>
        </nav>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/accueil" component={AccueilPage}/>
        <Route exact path="/users" component={UsersList}/>
        <Route path="/user/add" component={UserForm}/>
        {/* <Route component={PageNotFound}/> */}
      </Switch>
      </div>
    </Router>
  )
}

export default App;