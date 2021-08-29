import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <ul className="nav">
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/Projects">Projects</a>
      </li>

      <li>
        <a href="/resume/">Resume</a>
      </li>
    </ul>
  );
}

export default Header;
