export const ADD_USER = 'ADD_USER';

const addUser = (user, state) => {
  const newUsers = [...state.users, user];
  return {
    users: newUsers
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(action.payload, state);

    default:
      break;
  }
};
