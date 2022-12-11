import cl from "./CurrentStock.module.css";
import logo1 from "../../img/modalimg.png";
import React, { useState } from "react";

const CurrentStock = () => {
  const [counter1, setCounter1] = useState(0);

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
                <select id="nicotine" className={cl.select}>
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
                <span className={cl.label}>Hoeveelheid</span>
                <span className={cl.count}>{counter1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStock;
