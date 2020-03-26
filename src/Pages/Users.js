import React from 'react';

import UsersList from '../Components/UsersList'

const Users = () => {
    const USERS = [
      {
        id: "u1",
        name: "Kevin Robles",
        alias: "KevisLeL"
      },
      {
        id: "u2",
        name: "Javier Celada",
        alias: "Celada182"
      }
    ];
    
    return <UsersList items={USERS}/>;

};

export default Users;