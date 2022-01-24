import { NavLink } from 'react-router-dom';
import img from '../images/planet.png';

const Header = () => (
  <div className="container">
    <header className="header">
      <NavLink to="/" className="logo">
        Logo
        <img src={img} alt="logo" />
      </NavLink>
      <nav className="nav">
        <ul className="navLinks">
          <li className="navLink">
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/missions">Missions</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
