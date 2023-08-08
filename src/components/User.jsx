import { useContext, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './User.css';

const User = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const user = users.find((user) => user.username === params.username);

  useEffect(() => {
    if (!user) {
      navigate('..', { relative: 'path' });
    }
  }, [user, navigate]);

  return (
    <>
      <h1>User</h1>
      <table className="user">
        <tbody>
          <tr>
            <th scope="row">Username:</th>
            <td>{user?.username}</td>
          </tr>
          <tr>
            <th scope="row">Name:</th>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <th scope="row">E-mail:</th>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <th scope="row">Tel:</th>
            <td>{user?.phone}</td>
          </tr>
          <tr>
            <th scope="row">Website:</th>
            <td>{user?.website}</td>
          </tr>
        </tbody>
      </table>

      <Link to=".." relative="path">
        All users
      </Link>
    </>
  );
};

export default User;
