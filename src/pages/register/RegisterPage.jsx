import React, { useReducer } from 'react';

import NewestPerson from '../../components/newest_person/NewestPerson';
import People from '../../components/people/People';
import Form from '../../components/form/Form';
import './register_page.css';

import UserContext from '../../context/createContext';
import UserReducer, { ADD_USER } from '../../reducers/userReducer';

export default () => {
  const initialState = {
    users: [
      {
        firstName: 'Edd ',
        lastName: 'Colbar'
      },
      {
        firstName: 'Rimse',
        lastName: 'Colbar'
      }
    ]
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const addUser = user => {
    dispatch({
      type: ADD_USER,
      payload: user
    });
  };

  return (
    <UserContext.Provider value={{ users: state.users, addUser }}>
      <div className="register-container text-center">
        <Form />
        <div className="status-container">
          <People />
          <NewestPerson />
        </div>
      </div>
    </UserContext.Provider>
  );
};
