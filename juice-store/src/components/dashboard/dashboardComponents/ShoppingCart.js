import cl from "./ShoppingCart.module.css";
import { FaTimesCircle } from "react-icons/fa";

const ShoppingCart = (props) => {
  const closeCart = () => {
    props.closeCart(false);
  };

  return (
    <>
      <div className={cl.cart}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeCart} />
        </div>
        <h1 className={cl.hero}>Winkelwagen</h1>
      </div>
      <div className={cl.backdrop} onClick={closeCart}></div>
    </>
  );
};

export default ShoppingCart;
