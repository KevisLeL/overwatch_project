import React from 'react';

import PartidasList from '../Components/PartidaList';
import DATA from "../data";

const PartidasPage = (props) => {

  const readUser = (alias) => {
    const result = DATA.filter(user => {
      return user.alias === alias;
    });
    // console.log('Despues del filtro tenemos un array');
    // console.log(result);
    // console.log('Solo nos importa el primero');
    // console.log(result[0]);
    return result[0];
  };

  const userCelada = readUser('Celada182');

  // const todasPartidas = [];
  // for (let index = 0; index < userCelada.partidas.length; index++) {
  //   console.log(userCelada.partidas[index]);
  // }

  // userCelada.partidas.forEach((match) => {
  //   todasPartidas.push(match);
  // });
  //
  // userKevis.partidas.forEach(match => todasPartidas.push(match));

  const user = props.location.state.user;

  return <PartidasList items={user.partidas}/>

};

export default PartidasPage;