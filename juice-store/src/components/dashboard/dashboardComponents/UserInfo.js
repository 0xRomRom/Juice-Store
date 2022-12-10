import cl from "./UserInfo.module.css";
import { FaFolderPlus } from "react-icons/fa";
import React, { useState } from "react";
import GegevensModal from "./GegevensModal";

const UserInfo = (props) => {
  const [gegevens, setGegevens] = useState(false);
  const [gegevensModal, setGegevensModal] = useState(false);
  const [fetchResults, setFetchResults] = useState({});

  const openGegevensModal = () => {
    setGegevensModal(true);
    const fetchData = async () => {
      const fetcher = await fetch(
        `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/${props.user}/postalInfo.json`
      );
      const result = await fetcher.json();
      console.log(result);
      setFetchResults(result);
    };
    fetchData();
  };

  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Gegevens</h1>
      {!gegevens ? (
        <button className={cl.addInfo} onClick={openGegevensModal}>
          Toevoegen <FaFolderPlus />
        </button>
      ) : null}
      {gegevensModal ? (
        <GegevensModal
          closed={setGegevensModal}
          user={props.user}
          userData={fetchResults}
        />
      ) : null}
    </div>
  );
};

export default UserInfo;
