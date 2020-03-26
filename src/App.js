import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link} from "react-router-dom";

import CreateUser from './Pages/create-user';
import Login from './Pages/login';
import PartidasPage from './Pages/partidasPage';
import MainPage from './Pages/MainPage';
import PartidasInfo from './Pages/PartidasInfo';
import './App.css';

const App = (props) => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">
            Overwatch matches
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/partidas">
                  Partidas <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>

            <Link type="button" class="btn btn-light" to="/auth">
              LOGIN{" "}
            </Link>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/:userId/partidas" exact component={PartidasPage}></Route>
          <Route path="/partidas/:partidaId" exact component={PartidasInfo}></Route>
          <Route path="/auth" component={Login}></Route>
          <Route path="/create-user" component={CreateUser}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
  }

export default App;
