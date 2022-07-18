import { useCallback, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { getTodos, getUsers } from "../api/fetchData";
import { UserTodos } from "./UserTodos";

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedUserId, setSelectedUserId] = useState(0);

  const loadUsers = useCallback(
    async () => {
      try {
        const usersFromServer = await getUsers();

        setUsers(usersFromServer);
      } catch {
        setUsers([]);
      }
    },
    [],
  );

  useEffect(
    () => {
      loadUsers()
    },
    [],
  );

  const loadTodos = useCallback(
    async (userId: number) => {
      try {
        const todosFromServer = await getTodos(userId);

        setTodos(todosFromServer);
      } catch {
        setTodos([]);
      }
    },
    [selectedUserId],
  );

  const clickHandler = (userId: number) => {
    setSelectedUserId(userId);
    loadTodos(userId);
  }

  return (
    <>
      <ul>
        {users.map(user => (
          <li 
            key={user.id}
            onClick={() => clickHandler(user.id)}
          >
            <NavLink to={`/users/${user.id}`}> {user.name} </NavLink>

            <Routes>
              <Route
                path={`/${user.id}`}
                element={<UserTodos todos={todos} />}
              />
            </Routes>
          </li>
        ))}
      </ul>
    </>
  );
};