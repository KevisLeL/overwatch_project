import React from 'react';

import UserItem from './UserItem';

const UsersList = props => {
   
    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem
                key={user.id}
                id={user.id}
                name={user.name}
                alias={user.alias}
                />
            ))}
        </ul>
    );    
};

export default UsersList;