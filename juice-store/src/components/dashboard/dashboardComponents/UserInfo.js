import cl from "./UserInfo.module.css";
import { FaFolderPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import GegevensModal from "./GegevensModal";

const UserInfo = (props) => {
  const [gegevens, setGegevens] = useState(false);
  const [gegevensModal, setGegevensModal] = useState(false);
  const [fetching, setFetching] = useState(false);

  const openGegevensModal = () => {
    setGegevensModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setFetching(false);
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
  }, [fetching]);

  return (
    <div className={cl.modal}>
      <h1 className={cl.hero}>Gegevens</h1>
      {!gegevens ? (
        <>
          <span className={cl.geen}>Geen gegevens gevonden</span>
          <button className={cl.addInfo} onClick={openGegevensModal}>
            Toevoegen <FaFolderPlus />
          </button>
        </>
      ) : (
        <button className={cl.addInfo} onClick={openGegevensModal}>
          Beheren <FaFolderPlus />
        </button>
      )}
      {gegevensModal ? (
        <GegevensModal
          closed={setGegevensModal}
          user={props.user}
          gegevens={setGegevens}
        />
      ) : null}
    </div>
  );
};

export default UserInfo;
