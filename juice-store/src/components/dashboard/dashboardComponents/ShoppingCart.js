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
import React, { useState, useEffect } from "react";

const ShoppingCart = (props) => {
  const [selectDelivery, setSelectDelivery] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [noPhone, setNoPhone] = useState(false);
  const [payBy, setPayBy] = useState("");
  const [cryptoType, setCryptoType] = useState("leeg");
  const [currentPrices, setCurrentPrices] = useState({});
  const [validUser, setValidUser] = useState(true);
  const [finalCryptoPrice, setFinalCryptoPrice] = useState(0);
  const [receiveWallet, setReceiveWallet] = useState("");
  const [userAddy, setUserAddy] = useState("");
  const [cryptoOrderComplete, setCryptoOrderComplete] = useState(false);

  useEffect(() => {
    console.log(props.userInfo);
    const userdata = Object.entries(props.userInfo);
    let count = 0;
    userdata.map((item) => {
      if (item[1] !== "") {
        count++;
      }
      if (count > 5) {
        setValidUser(true);
      }
      if (count < 5) {
        setValidUser(false);
      }
    });
    console.log(userdata);
    if (cryptoType === "solana") {
      setFinalCryptoPrice(
        (((props.totalCount * 25) / currentPrices.solana.eur) * 1.01).toFixed(3)
      );
      setReceiveWallet("GU5qcerL6UbiMbgNCGp7E79hvk1PCdU1yqy7U5dWj2Nw");
    }
    if (cryptoType === "bitcoin") {
      setFinalCryptoPrice(
        (
          ((props.totalCount * 25 + 6.75) / currentPrices.bitcoin.eur) *
          1.01
        ).toFixed(8)
      );
      setReceiveWallet("1MHVEKUXPEj5YafF6Lx13u9jgcAvLBuwnQ");
    }
    if (cryptoType === "ethereum") {
      setFinalCryptoPrice(
        (
          ((props.totalCount * 25 + 6.75) / currentPrices.ethereum.eur) *
          1.01
        ).toFixed(4)
      );
      setReceiveWallet("0xee207af9EBA4d77d832e3139464848ce84a620d9");
    }
    if (cryptoType === "usdc") {
      setFinalCryptoPrice((props.totalCount * 25 * 1.02 + 6.75).toFixed(4));
      setReceiveWallet("GU5qcerL6UbiMbgNCGp7E79hvk1PCdU1yqy7U5dWj2Nw");
    }
    if (cryptoType === "usdt") {
      setFinalCryptoPrice((props.totalCount * 25 * 1.02 + 6.75).toFixed(4));
      setReceiveWallet("GU5qcerL6UbiMbgNCGp7E79hvk1PCdU1yqy7U5dWj2Nw");
    }
  }, [cryptoType, validUser]);

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

  const selectShipping = async () => {
    setOrderType("verzenden");
    const fetchin = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=eur`
    );
    const data = await fetchin.json();
    setCurrentPrices(data);
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
    setCryptoOrderComplete(true);
    setCryptoType("leeg");
  };

  const cryptoOrderHandler = () => {
    const finalOrder = {
      order: props.orders,
      gegevens: props.userInfo,
      totalPrice: finalCryptoPrice,
      userAddy: userAddy,
      method: payBy,
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
    setSelectDelivery(false);
    setOrderType("finished");
    setPayBy("");
    setCryptoOrderComplete(true);
  };

  return (
    <>
      <div className={cl.cart}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeCart} />
        </div>
        {!selectDelivery && !cryptoOrderComplete && (
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
        {!validUser && orderType === "verzenden" && selectDelivery && (
          <div className={cl.geenGegevens}>Voeg verzend gegevens toe</div>
        )}
        {orderType === "verzenden" && selectDelivery && validUser && (
          <div className={cl.verzendenBox}>
            <FaRegArrowAltCircleLeft
              className={cl.cryptoBack}
              onClick={() => {
                setOrderType("");
                setPayBy("");
              }}
            />
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

        {payBy === "crypto" && selectDelivery && orderType !== "" && (
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
              <>
                <div className={cl.row2}>
                  Stap 2: Maak {finalCryptoPrice}
                  {" " +
                    cryptoType.charAt(0).toUpperCase() +
                    cryptoType.slice(1)}{" "}
                  over naar {receiveWallet}
                  <span className={cl.verzendkosten}>
                    Incl. €6.75,- verzend kosten{" "}
                  </span>
                </div>
                <hr className={cl.hrs}></hr>
                <div className={cl.row1}>
                  <span>Stap 3: Verstuurd vanaf wallet: </span>
                  <input
                    type="text"
                    className={cl.addyInput}
                    placeholder="0x43123"
                    onChange={(e) => setUserAddy(e.target.value)}
                  ></input>
                </div>
                <hr className={cl.hrs}></hr>
                <div className={cl.submitBox2}>
                  <button className={cl.submit} onClick={cryptoOrderHandler}>
                    Bestellen <FaTruck />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        {orderType === "ophalen" && selectDelivery && (
          <div className={cl.ophalenBox}>
            <FaRegArrowAltCircleLeft
              className={cl.back2}
              onClick={() => {
                setOrderType("");
                setPayBy("");
              }}
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
        {orderType === "finished" && cryptoOrderComplete && (
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
