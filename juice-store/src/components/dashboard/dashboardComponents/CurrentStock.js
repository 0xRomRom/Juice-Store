import cl from "./CurrentStock.module.css";
import logo1 from "../../img/modalimg.png";

const CurrentStock = () => {
  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Huidige Aanbod</h1>
      <div className={cl.modalContainer}>
        <div className={cl.item}>
          <div className={cl.itemInner}>
            <h1 className={cl.title}>Monkey Cream</h1>
            <img src={logo1} alt="Juice logo" className={cl.image} />
            <span className={cl.vgpg}>70% VG | 30% PG</span>
            <p className={cl.description}>Mildzoete cream juice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStock;
