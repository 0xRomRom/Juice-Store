import cl from "./CurrentStock.module.css";
import logo1 from "../../img/modalimg.png";
import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaCartPlus } from "react-icons/fa";

const CurrentStock = (props) => {
  const [counter1, setCounter1] = useState(0);
  const [nicotine1, setNicotine1] = useState(0);

  const incrementCount1 = () => {
    setCounter1((prevCount) => prevCount + 1);
  };
  const decrementCount1 = () => {
    if (counter1 === 0) return;
    setCounter1((prevCount) => prevCount - 1);
  };
  const submitOrder1 = () => {
    if (counter1 === 0) return;

    const values = {
      naam: "Monkey Juice",
      nicotine: nicotine1,
      hoeveelheid: counter1,
      id: props.ordered.length + nicotine1 + counter1,
      prijs: counter1 * 25,
    };
    props.orders((prev) => [...prev, values]);
    props.counter((prevCount) => prevCount + counter1);
    setCounter1(0);
    setNicotine1(0);
  };

  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Huidige Aanbod</h1>
      <div className={cl.modalContainer}>
        <div className={cl.item}>
          <div className={cl.itemInner}>
            <h1 className={cl.title}>Monkey Cream</h1>
            <img src={logo1} alt="Juice logo" className={cl.image} />
            <span className={cl.vgpg}>70% VG | 30% PG</span>
            <p className={cl.description}>
              Ingrediënten: VG, PG, Bananas Foster, Milk, Toasted Almond,
              Vanilla Swirl. <br /> <br />
              Mildzoete cream juice met almond en melk accent. Licht op de keel
              en mooie wolk productie.
            </p>
            <div className={cl.orderBox}>
              <div className={cl.nicotineBox}>
                <span htmlFor="nicotine" className={cl.label}>
                  Nicotine
                </span>
                <select
                  id="nicotine"
                  className={cl.select}
                  value={nicotine1}
                  onChange={(e) => setNicotine1(e.target.value)}
                >
                  <option value="0">0 MG</option>
                  <option value="3">3 MG</option>
                  <option value="6">6 MG</option>
                  <option value="9">9 MG</option>
                  <option value="12">12 MG</option>
                  <option value="15">15 MG</option>
                  <option value="18">18 MG</option>
                </select>
              </div>
              <div className={cl.hoeveelheidBox}>
                <span className={cl.label}>Aantal</span>
                <span className={cl.count}>{counter1}</span>
                <FaMinusSquare className={cl.icon} onClick={decrementCount1} />
                <FaPlusSquare className={cl.icon} onClick={incrementCount1} />
              </div>
              <div className={cl.submitBox}>
                <div className={cl.priceBox}>
                  <span>€25</span>
                  <span>100ml</span>
                </div>
                <button className={cl.submitButton} onClick={submitOrder1}>
                  Toevoegen <FaCartPlus className={cl.fa} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStock;
