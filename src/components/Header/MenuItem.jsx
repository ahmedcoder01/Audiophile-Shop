import React from "react";
import { Link, NavLink } from "react-router-dom";

const itemStyles = {
  active: { color: "#d87d4a" },
};

function MenuItem({ redirect, children, style, activeClass }) {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? activeClass : null;
  };

  return (
    <li className={`${style}`}>
      <NavLink to={redirect} className={navLinkClasses}>
        {children}
      </NavLink>
    </li>
  );
}

export default MenuItem;
