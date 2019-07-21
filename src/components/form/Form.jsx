import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import UserContext from '../../context/createContext';

import useFormInput from '../../hooks/useFormInput';
import './form.css';

export default () => {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const { addUser } = useContext(UserContext);

  function _addUser(e) {
    e.preventDefault();
    const newUser = { firstName: firstName.value, lastName: lastName.value };
    console.log('On add user-->', newUser);
    addUser(newUser);
  }
  return (
    <div className="form-container">
      <Form className="form text-center" onSubmit={_addUser}>
        <Form.Group>
          <Form.Control {...firstName} type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control {...lastName} type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Add user</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
