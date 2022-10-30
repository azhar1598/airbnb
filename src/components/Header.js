import React, { useState } from "react";
import * as icon from "@mui/icons-material";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const accountMenu = () => {
    return (
      <div className="header__right__account-menu">
        {showMenu && (
          <ul>
            <li>Sign up</li>
            <li>Log in</li>
            <hr />
            <li>Host your home</li>
            <li>Host an experience</li>
            <li>Help</li>
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="/airbnb_logo.png" width={100} alt="logo here" />
      </div>
      <div className="header__right">
        <p style={{ fontWeight: 500 }}>Become a host</p>
        <icon.Language style={{ fontSize: "20px" }} />
        <div
          className="header__right__menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <icon.Menu
            style={{ color: "black", fontSize: "20px", marginLeft: "10px" }}
          />
          <icon.AccountCircle style={{ color: "gray", fontSize: "35px" }} />
        </div>
        {accountMenu()}
      </div>
    </div>
  );
}

export default Header;
