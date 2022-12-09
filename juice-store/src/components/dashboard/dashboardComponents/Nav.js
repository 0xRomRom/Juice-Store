import cl from "./Nav.module.css";
import logo from "../../img/moonjuice.png";
import { FaSignInAlt, FaCartPlus } from "react-icons/fa";
import React, { useState } from "react";

const Nav = (props) => {
  const [orderCount, setOrderCount] = useState(0);

  const logoutHandler = () => {
    props.setUser("");
    setOrderCount((prevCount) => (prevCount = 0));
  };

  return (
    <ul className={cl.nav}>
      <li>
        <img src={logo} alt="Moon Juice Logo" className={cl.moonjuice} />
      </li>
      <li className={cl.contact}>Contact</li>
      <li className={cl.cart}>
        <FaCartPlus />
        {orderCount}
      </li>
      <li className={cl.logout} onClick={logoutHandler}>
        <FaSignInAlt />
        <span className={cl.span}>Uitloggen</span>
      </li>
    </ul>
  );
};

export default Nav;
