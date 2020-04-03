import React from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";

import CreateUser from './Pages/create-user';
import Login from './Pages/login';
import PartidasPage from './Pages/partidasPage';
import MainNavbar from './Components/MainNavbar';
import PartidasInfo from './Pages/PartidasInfo';
import './App.css';
import TestComponentsPage from "./Pages/TestComponentsPage";

const App = (props) => {

  return (
      <React.Fragment>
        <BrowserRouter>
          <MainNavbar/>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/partidas" exact component={PartidasPage}></Route>
            <Route path="/partidas/:partidaId" exact
                   component={PartidasInfo}></Route>
            <Route path="/create-user" component={CreateUser}></Route>
            <Route path="/test" component={TestComponentsPage}></Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
};

export default App;
