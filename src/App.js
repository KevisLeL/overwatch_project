import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link} from "react-router-dom";

import CreateUser from './Pages/create-user';
import Login from './Pages/login';
import PartidasPage from './Pages/partidasPage';
import MainNavbar from './Components/MainNavbar';
import PartidasInfo from './Pages/PartidasInfo';
import './App.css';

const USERS = [
  {
    id: "u1",
    name: "Kevin Robles",
    alias: "KevisLeL",
    email: "kevinrobleses@gmail.com",
    password: "123456",
    partidas: [
      {
        id: "Partida1",
        date: "20/03/2020",
        map: "Junkertown",
        role: "Support",
        player: "Moira",
        damage: 7500,
        heal: 13750,
        kills: 21
      },
      {
        id: "Partida2",
        date: "21/03/2020",
        map: "Habana",
        role: "DPS",
        player: "Junkrat",
        damage: 17500,
        heal: 0,
        kills: 43
      }
    ]
  },
  {
    id: "u2",
    name: "Javier Celada",
    alias: "Celada182",
    email: "celada182@gmail.com",
    password: "182182182",
    partidas: [
      {
        id: "Partida 1",
        date: "23/03/2020",
        map: "Ilios",
        role: "Tank",
        player: "Roadhog",
        damage: 12300,
        heal: 6350,
        kills: 28,
        creator: "u2"
      },
      {
        id: "Partida 2",
        date: "24/03/2020",
        map: "Estación Lunar",
        role: "Support",
        player: "Baptiste",
        damage: 5300,
        heal: 16350,
        kills: 12,
        creator: "u2"
      }
    ]
  }
];

const App = (props) => {
 
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainNavbar />
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/partidas" exact component={PartidasPage}></Route>
          <Route path="/partidas/:partidaId" exact component={PartidasInfo}></Route>
          <Route path="/create-user" component={CreateUser}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
  }

export default App;
