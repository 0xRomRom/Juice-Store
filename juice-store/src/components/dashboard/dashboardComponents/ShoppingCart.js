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
  const [orderType, setOrderType] = useState("verzenden");
  const [noPhone, setNoPhone] = useState(false);
  const [payBy, setPayBy] = useState("");
  const [cryptoType, setCryptoType] = useState("leeg");

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

  const pickUpOrderHandler = () => {
    console.log(props.userInfo);
    if (props.userInfo.telefoonnummer === "") {
      setNoPhone(true);
      return;
    }
    setNoPhone(false);
    let finalPrice = 0;
    props.orders.map((item) => {
      console.log(item.prijs);
      finalPrice += item.prijs;
    });

    const finalOrder = {
      order: props.orders,
      gegevens: props.userInfo,
      totalPrice: finalPrice,
    };

    fetch(
      `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/orders.json`,
      {
        method: "POST",
        body: JSON.stringify(finalOrder),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.setOrders([]);
    props.orderCount(0);
    setOrderType("finished");
  };

  return (
    <>
      <div className={cl.cart}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeCart} />
        </div>
        {selectDelivery && (
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
        {orderType === "verzenden" && (
          <div className={cl.verzendenBox}>
            <div className={cl.payWithBox}>
              <span>Betaal via</span>
              <div className={cl.payButtons}>
                <button
                  className={cl.payBtns}
                  onClick={() => setPayBy("crypto")}
                  style={{
                    backgroundColor:
                      payBy === "crypto" && payBy !== "" ? "blue" : "black",
                  }}
                >
                  Crypto
                </button>
                <button
                  className={cl.payBtns}
                  onClick={() => setPayBy("overschrijving")}
                  style={{
                    backgroundColor:
                      payBy === "overschrijving" && payBy !== ""
                        ? "blue"
                        : "black",
                  }}
                >
                  Overschrijving
                </button>
              </div>
            </div>
          </div>
        )}
        {payBy === "crypto" && (
          <div className={cl.cryptoPay}>
            <div className={cl.row1}>
              <span>Stap 1: Kies soort crypto</span>
              <select
                id="crypto"
                className={cl.cryptoSelect}
                onChange={(e) => {
                  setCryptoType(e.target.value);
                }}
              >
                <option value="leeg">Maak keuze</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="solana">Solana</option>
                <option value="usdc">USDC</option>
                <option value="usdt">USDT</option>
              </select>
            </div>
            <hr className={cl.hrs}></hr>
            {cryptoType !== "leeg" && (
              <div className={cl.row1}>
                Stap 2: Maak 34
                {" " +
                  cryptoType.charAt(0).toUpperCase() +
                  cryptoType.slice(1)}{" "}
                over naar
              </div>
            )}
          </div>
        )}
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
                {noPhone && (
                  <span className={cl.phoneWarning}>
                    Voeg een telefoonnummer toe
                  </span>
                )}
              </div>
              <div className={cl.submitBox}>
                <button className={cl.submit} onClick={pickUpOrderHandler}>
                  Bestellen <FaTruck />
                </button>
              </div>
            </div>
          </div>
        )}
        {orderType === "finished" && (
          <div className={cl.finishedBox}>
            <h2>Uw bestelling wordt bereid!</h2>
          </div>
        )}
      </div>
      <div className={cl.backdrop} onClick={closeCart}></div>
    </>
  );
};

export default ShoppingCart;
