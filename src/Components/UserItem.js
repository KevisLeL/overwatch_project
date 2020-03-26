import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = props => {
    return (
      <li class="card">
          <Link to={`/${props.id}/partidas`}>
            <div class="card-body">
              <h2>{props.name} </h2>
              <h3>
                {props.alias}
              </h3>
            </div>
          </Link>
      </li>
    );
};

export default UserItem;