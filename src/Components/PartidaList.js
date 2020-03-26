import React from 'react';


import PartidaItem from './PartidaItem';


const PartidasList = props => {
    return (
        <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PARTIDAS</h5>
              <div class="card-body">
                <ul>
                  {props.items.map(partida => (
                      <li value={partida.id} class="list-group-item" >
                      <PartidaItem
                        key={partida.id}
                        id={partida.id}
                        map={partida.map}
                        date={partida.date}
                      />
                      </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default PartidasList;