import { NavLink } from 'react-router-dom';
import img from '../images/planet.png';

const Header = () => (
  <div>
    <header className="header py-4 shadow-xl flex items-center lg:justify-around sm:justify-between justify-center">
      <NavLink
        to="/"
        className={(isActive) => `${!isActive ? ' unselected' : ''} hidden sm:flex items-center gap-3`}
      >
        <img className="w-[60px]" src={img} alt="logo" />
        <h1 className="text-2xl font-bold">Space Xplore</h1>
      </NavLink>
      <nav className="nav">
        <ul className="navLinks flex gap-4 text-[gray] text-xl font-medium">
          <li className="navLink hover:text-black">
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li className="navLink hover:text-black">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="navLink hover:text-black">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
