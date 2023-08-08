import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to=".">Home</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
