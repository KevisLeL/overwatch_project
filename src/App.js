import React, {useState} from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";

import CreateUser from './Pages/create-user';
import Login from './Pages/login';
import PartidasPage from './Pages/partidasPage';
import MainNavbar from './Components/MainNavbar';
import PartidasInfo from './Pages/PartidasInfo';
import './App.css';

const App = () => {

  const [loggedUser, setLoggedUser] = useState(null);

  return (
      <React.Fragment>
        <BrowserRouter>
          <MainNavbar isUserLogged={loggedUser != null}/>
          <Switch>
            <Route path="/" exact component={routerProps =>
                <Login loginUser={setLoggedUser} {...routerProps}/>}/>
            <Route path="/partidas" exact component={PartidasPage}></Route>
            <Route path="/partidas/:partidaId" exact
                   component={PartidasInfo}></Route>
            <Route path="/create-user" component={CreateUser}></Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
};

export default App;
