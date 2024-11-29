import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <React.Fragment>
      <div id="sidebarBase">
        <div
          className={location === "/Admin-panel" ? "linkBoxActive" : "linkBox"}
        >
          <Link to="/Admin-panel" className="inside-link">
            User Data
          </Link>
        </div>
        <div
          className={location === "/Add-user" ? "linkBoxActive" : "linkBox"}
        >
          <Link to="/Add-user" className="inside-link">
            Add User
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
