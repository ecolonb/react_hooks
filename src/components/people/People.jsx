import React, { useContext } from 'react';
import UserContext from '../../context/createContext';

import './people.css';
export default () => {
  const { users } = useContext(UserContext);

  return (
    <div className="people-component">
      <h1>Users</h1>
      <ul className="text-left">
        {users.map((user, index) => (
          <li key={index}> {user.firstName + ' ' + user.lastName} </li>
        ))}
      </ul>
    </div>
  );
};
