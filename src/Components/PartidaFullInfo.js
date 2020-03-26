import React from 'react';

const PartidaFullInfo = props => {
    
    return (
      <div class="card">
        <div class="card-body">
          <ul>
            <h5 class="card-title">{props.id}</h5>
            <p>Map: {props.map}</p>
            <p>Role: {props.role}</p>
            <p>Player: {props.player}</p>
            <p>Damage: {props.damage}</p>
            <p>Heal: {props.heal}</p>
            <p>Kills: {props.kills}</p>
          </ul>
        </div>
      </div>
    );
};
export default PartidaFullInfo;