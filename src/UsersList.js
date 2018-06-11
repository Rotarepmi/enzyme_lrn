import React from 'react';

const UsersList = ({ users }) => {
  if(users.length) {
      return (
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}  
        </ul> 
      );
    }

  return ( 
    <p>No Results!</p> 
  );
}

export default UsersList;