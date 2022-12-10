import cl from "./GegevensModal.module.css";
import React, { useState } from "react";
import { FaWindowClose, FaSave } from "react-icons/fa";

const GegevensModal = (props) => {
  const [naam, setNaam] = useState("");
  const [inputNaam, setInputNaam] = useState("");
  const [provincie, setProvincie] = useState("");
  const [inputProvincie, setInputProvincie] = useState("");
  const [woonplaats, setWoonplaats] = useState("");
  const [inputWoonplaats, setInputWoonplaats] = useState("");
  const [postcode, setPostcode] = useState("");
  const [inputPostcode, setInputPostcode] = useState("");
  const [straatnaam, setStraatnaam] = useState("");
  const [inputStraatnaam, setInputStraatnaam] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [inputHuisnummer, setInputHuisnummer] = useState("");
  const [telefoonnummer, setTelefoonnummer] = useState("");
  const [inputTelefoonnummer, setInputTelefoonnummer] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const infoObject = {
    naam: "",
    provincie: "",
    woonplaats: "",
    postcode: "",
    straatnaam: "",
    huisnummer: "",
    telefoonnummer: "",
    email: "",
  };

  const addNaam = () => {
    infoObject.naam = naam;
    console.log(infoObject);
    setNaam(inputNaam);
    setInputNaam("");
  };

  const closeHandler = () => {
    props.closed(false);
  };

  return (
    <>
      <div className={cl.backdrop} onClick={closeHandler}></div>
      <div className={cl.modal}>
        <div className={cl.closePosition}>
          <FaWindowClose className={cl.close} onClick={closeHandler} />
        </div>
        <div className={cl.infoBox}>
          <div className={cl.row}>
            <span
              style={{
                backgroundColor: naam ? "green" : "black",
              }}
            >
              *Naam
            </span>
            <input
              type="text"
              placeholder={naam || "?"}
              onChange={(e) => setInputNaam(e.target.value)}
            ></input>
            {inputNaam ? (
              <button onClick={addNaam}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Provincie</span>
            <input
              type="text"
              placeholder={provincie || "?"}
              onChange={(e) => setProvincie(e.target.value)}
            ></input>
            {provincie ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Woonplaats</span>
            <input
              type="text"
              placeholder={woonplaats || "?"}
              onChange={(e) => setWoonplaats(e.target.value)}
            ></input>
            {woonplaats ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Postcode</span>
            <input
              type="text"
              placeholder={postcode || "?"}
              onChange={(e) => setPostcode(e.target.value)}
            ></input>
            {postcode ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Straatnaam</span>
            <input
              type="text"
              placeholder={straatnaam || "?"}
              onChange={(e) => setStraatnaam(e.target.value)}
            ></input>
            {straatnaam ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Huisnummer</span>
            <input
              type="text"
              placeholder={huisnummer || "?"}
              onChange={(e) => setHuisnummer(e.target.value)}
            ></input>
            {huisnummer ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>*Telefoonnummer</span>
            <input
              type="text"
              placeholder={telefoonnummer || "?"}
              onChange={(e) => setTelefoonnummer(e.target.value)}
            ></input>
            {telefoonnummer ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
          <div className={cl.row}>
            <span>E-Mail</span>
            <input
              type="text"
              placeholder={email || "?"}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {email ? (
              <button>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default GegevensModal;
