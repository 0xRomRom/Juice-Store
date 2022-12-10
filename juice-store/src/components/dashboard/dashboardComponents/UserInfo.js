import cl from "./UserInfo.module.css";
import { FaFolderPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import GegevensModal from "./GegevensModal";

const UserInfo = (props) => {
  const [gegevens, setGegevens] = useState(false);
  const [gegevensModal, setGegevensModal] = useState(false);

  const openGegevensModal = () => {
    setGegevensModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = await fetch(
        `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/${props.user}/postalInfo.json`
      );
      const result = await fetcher.json();
      if (result === null) {
        setGegevens(false);
      } else {
        setGegevens(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Gegevens</h1>
      {!gegevens ? (
        <button className={cl.addInfo} onClick={openGegevensModal}>
          Toevoegen <FaFolderPlus />
        </button>
      ) : (
        <button className={cl.addInfo} onClick={openGegevensModal}>
          Beheren <FaFolderPlus />
        </button>
      )}
      {gegevensModal ? (
        <GegevensModal closed={setGegevensModal} user={props.user} />
      ) : null}
    </div>
  );
};

export default UserInfo;
