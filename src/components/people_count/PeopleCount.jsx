import React, { useContext } from 'react';
import UserContext from '../../context/createContext';

export default () => {
  const context = useContext(UserContext);
  const { users } = context;
  return <h2 className="text-center"> {users.length} </h2>;
};
