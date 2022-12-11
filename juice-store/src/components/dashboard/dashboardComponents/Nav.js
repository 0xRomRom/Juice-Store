import cl from "./Nav.module.css";
import logo from "../../img/moonjuice.png";
import { FaSignInAlt, FaCartPlus } from "react-icons/fa";

const Nav = (props) => {
  const logoutHandler = () => {
    props.setUser("");
  };

  const openCart = () => {
    props.cartOpen(true);
  };

  return (
    <ul className={cl.nav}>
      <li>
        <img src={logo} alt="Moon Juice Logo" className={cl.moonjuice} />
      </li>
      <li className={cl.contact}>Contact</li>
      <li className={cl.cart} onClick={openCart}>
        <FaCartPlus />
        {props.count}
      </li>
      <li className={cl.logout} onClick={logoutHandler}>
        <FaSignInAlt />
        <span className={cl.span}>Uitloggen</span>
      </li>
    </ul>
  );
};

export default Nav;
