import { NavLink } from 'react-router-dom';
import img from '../images/planet.png';

const Header = () => (
  <div className="container">
    <header className="header py-4 flex items-center justify-between px-12">
      <NavLink
        activeClassName="test"
        to="/"
        className={
          (isActive) =>
            `flex items-center gap-3 ${!isActive ? ' unselected' : ''}` // eslint-disable-line
        }
      >
        <img className="w-24" src={img} alt="logo" />
        <h1 className="text-2xl font-bold">Space Xplore</h1>
      </NavLink>
      <nav className="nav">
        <ul className="navLinks flex gap-3 text-blue-600 text-base text-bold">
          <li className="navLink">
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
