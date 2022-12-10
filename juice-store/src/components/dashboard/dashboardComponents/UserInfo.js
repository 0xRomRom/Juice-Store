import cl from "./UserInfo.module.css";
import { FaFolderPlus } from "react-icons/fa";
import React, { useState } from "react";
import GegevensModal from "./GegevensModal";

const UserInfo = () => {
  const [gegevens, setGegevens] = useState(false);
  const [gegevensModal, setGegevensModal] = useState(false);

  const openGegevensModal = () => {
    setGegevensModal(true);
  };

  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Gegevens</h1>
      {!gegevens ? (
        <button className={cl.addInfo} onClick={openGegevensModal}>
          Toevoegen <FaFolderPlus />
        </button>
      ) : null}
      {gegevensModal ? <GegevensModal closed={setGegevensModal} /> : null}
    </div>
  );
};

export default UserInfo;
