import cl from "./ShoppingCart.module.css";
import {
  FaTimesCircle,
  FaTrash,
  FaTruck,
  FaHandshake,
  FaPlane,
  FaCheck,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import React, { useState } from "react";

const ShoppingCart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectDelivery, setSelectDelivery] = useState(false);
  const [orderType, setOrderType] = useState("");

  const closeCart = () => {
    props.closeCart(false);
    setOrderType("");
  };

  const deleteHandler = (target) => {
    props.setOrders(props.orders.filter((product, i) => i !== target));
    props.orderCount((prev) => prev - props.orders[target].hoeveelheid);
  };

  const submitOrder = () => {
    if (props.totalCount === 0) return;
    setSelectDelivery(true);
  };

  const selectShipping = () => {
    setOrderType("verzenden");
  };

  const selectPickUp = () => {
    setOrderType("ophalen");
  };

  return (
    <>
      <div className={cl.cart}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeCart} />
        </div>
        {!selectDelivery && (
          <>
            <h1 className={cl.hero}>Winkelwagen</h1>
            <div className={cl.winkelInner}>
              <div className={cl.description}>
                <span>Flavor</span>
                <span>Nicotine</span>
                <span>Aantal</span>
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
              <div className={cl.totalBox}>Totaal €{props.totalCount * 25}</div>
              <div className={cl.submitBox}>
                <button className={cl.submit} onClick={submitOrder}>
                  Bevestigen <FaCheck />
                </button>
              </div>
            </div>
          </>
        )}
        {orderType === "" && selectDelivery && (
          <div className={cl.selectionBox}>
            <FaRegArrowAltCircleLeft
              className={cl.back}
              onClick={() => setSelectDelivery(false)}
            />
            <div className={cl.btnBorder}>
              <button className={cl.cta} onClick={selectShipping}>
                Verzenden <FaPlane />
              </button>
            </div>
            <div className={cl.btnBorder}>
              <button className={cl.cta} onClick={selectPickUp}>
                Ophalen <FaHandshake />
              </button>
            </div>
          </div>
        )}
        {orderType === "verzenden" && <div></div>}
        {orderType === "ophalen" && (
          <div className={cl.ophalenBox}>
            <FaRegArrowAltCircleLeft
              className={cl.back2}
              onClick={() => setOrderType("")}
            />
            <div className={cl.orderList2}>
              <div className={cl.description}>
                <span>Flavor</span>
                <span>Nicotine</span>
                <span>Aantal</span>
              </div>
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
              <div className={cl.totalBox}>Totaal €{props.totalCount * 25}</div>
            </div>
            <div className={cl.pickupOrderBox}>
              <div className={cl.submitBox}>
                <button className={cl.submit}>
                  Bestellen <FaTruck />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={cl.backdrop} onClick={closeCart}></div>
    </>
  );
};

export default ShoppingCart;
