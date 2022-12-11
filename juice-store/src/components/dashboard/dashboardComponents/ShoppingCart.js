import cl from "./ShoppingCart.module.css";
import { FaTimesCircle, FaTrash } from "react-icons/fa";

const ShoppingCart = (props) => {
  const closeCart = () => {
    props.closeCart(false);
    console.log(props.orders);
  };

  const deleteHandler = (target) => {
    props.setOrders(props.orders.filter((product, i) => i !== target));
    props.orderCount((prev) => prev - props.orders[target].hoeveelheid);
  };

  return (
    <>
      <div className={cl.cart}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeCart} />
        </div>
        <h1 className={cl.hero}>Winkelwagen</h1>
        <div className={cl.winkelInner}>
          <div className={cl.description}>
            <span>Flavor</span>
            <span>Nicotine</span>
            <span>Hoeveelheid</span>
          </div>
          <div className={cl.orderList}>
            {props.orders.map((item, i) => {
              return (
                <ul key={i} className={cl.listItem}>
                  <li>{item.naam}</li>
                  <li>{item.nicotine} MG</li>
                  <li>{item.hoeveelheid}x</li>
                  <li className={cl.end} onClick={() => deleteHandler(i)}>
                    <FaTrash />
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cl.backdrop} onClick={closeCart}></div>
    </>
  );
};

export default ShoppingCart;
