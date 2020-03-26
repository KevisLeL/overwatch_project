import React from 'react';
import { useParams } from 'react-router-dom';

import PartidaFullInfo from '../Components/PartidaFullInfo';


const DUMMY_PARTIDAS = [
  {
      id: 'Partida 1',
      date: '20/03/2020',
      map: 'Junkertown',
      role: 'Support',
      player: 'Moira',
      damage: 7500,
      heal: 13750,
      kills: 21,

  },
  {
      id: 'Partida 2',
      date: '21/03/2020',
      map: 'Habana',
      role: 'DPS',
      player: 'Junkrat',
      damage: 17500,
      heal: 0,
      kills: 43,

  },
  {
      id: 'Partida 3',
      date: '23/03/2020',
      map: 'Ilios',
      role: 'Tank',
      player: 'Roadhog',
      damage: 12300,
      heal: 6350,
      kills: 28,

  }
]
const PartidasInfo = () => {

    const partidaId = useParams().partidaId;
    const fullpartida = DUMMY_PARTIDAS.filter(partida => partida.id === partidaId);

    return (
      <div class="card">
      <div class="card-body">
        <ul>
          <h5 class="card-title">{fullpartida.id}</h5>
          <p>Map: {fullpartida.map}</p>
          <p>Role: {fullpartida.role}</p>
          <p>Player: {fullpartida.player}</p>
          <p>Damage: {fullpartida.damage}</p>
          <p>Heal: {fullpartida.heal}</p>
          <p>Kills: {fullpartida.kills}</p>
        </ul>
      </div>
    </div>
    );
}

export default PartidasInfo;