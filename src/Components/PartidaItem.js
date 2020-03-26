import React from 'react';
import { Link } from 'react-router-dom';

const PartidaItem = props => {
    
    return (
      <div class="card">
        <div class="card-body">
          <ul>
          <Link to={`/partidas/${props.id}`}>
            <h5 class="card-title">{props.id}</h5>
            <p>Mapa: {props.map}</p>
            <p>{props.date}</p>
            </Link>
          </ul>
        </div>
      </div>
    );
};
export default PartidaItem;