import React from "react";
import './index.scss'


const SideNavigation =() => {
    return (
    <nav className="menu">
    <ul className="items">
      <li className="item">
        <i className="fa fa-home" aria-hidden="true"></i>
      </li>
      <li className="item">
        <i className="fa fa-user" aria-hidden="true"></i>
      </li>
      <li className="item">
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </li>
      <li className="item item-active">
        <i className="fa fa-commenting" aria-hidden="true"></i>
      </li>
      <li className="item">
        <i className="fa fa-file" aria-hidden="true"></i>
      </li>
      <li className="item">
        <i className="fa fa-cog" aria-hidden="true"></i>
      </li>
    </ul>
  </nav>
  );
}

export default SideNavigation;