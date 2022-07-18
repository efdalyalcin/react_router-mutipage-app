const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getUsers = async () => {
  const users = await fetch(`${BASE_URL}users/`)
    .then(response => response.json());

  return users;
};

export const getTodos = async (userId: number) => {
  const todos = await fetch(`${BASE_URL}users/${userId}/todos`)
    .then(response => response.json());

  return todos;
};
