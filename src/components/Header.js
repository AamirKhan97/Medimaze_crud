import React from "react";
import Person from "../assets/person.svg";
import Logout from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {

const navigate = useNavigate();
const handleLogout = () => {
  navigate("/")
}
  return (
    <React.Fragment>
      <div id="headerbase">
        <h1 className="header">CRUD</h1>
        <div className="leftBox">
          <div className="userIcon">
            <img src={Person} alt="Profile" title="Profile" />
          </div>
          <div className="userIcon">
            <img src={Logout} onClick={handleLogout} alt="Logout" title="Logout"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
