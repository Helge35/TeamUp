import "./Menu.css";
import { Link, Outlet, MemoryRouter as Router } from "react-router-dom";

const Menu = () => {
  return (
      <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/member/1">User 1</Link>
        <div className="menu-log">
          <a href="#login">LOGIN</a>
        </div>
        <Outlet />
      </div>
  );
};

export default Menu;
