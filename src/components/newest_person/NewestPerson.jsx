import React, { useEffect, useContext } from 'react';

import UserContext from '../../context/createContext';

import PeopleCount from '../people_count/PeopleCount';

import './newestPerson.css';

export default () => {
  const { users } = useContext(UserContext);
  const { firstName, lastName } = users[users.length - 1];

  useEffect(() => {
    const name = firstName + ' ' + lastName;
    document.title = name;
    console.log('useEffect =>');
    return () => {
      console.log('unmounted ');
    };
  }, [firstName, lastName]);

  return (
    <div className="newest-user-container">
      <h2 className="">
        Newest Person: <br /> {firstName + ' ' + lastName}
      </h2>
      <PeopleCount />
    </div>
  );
};
