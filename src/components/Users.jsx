import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

import './Users.css';

const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <h1>Users</h1>
      <ul className="users">
        {users.map(({ id, name, username }) => (
          <li key={id}>
            <Link to={username}>
              <b>{username}</b>({name})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
