import { LOGO_URL } from "../utils/constant";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contacts</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
