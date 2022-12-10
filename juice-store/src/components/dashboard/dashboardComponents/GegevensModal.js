import cl from "./GegevensModal.module.css";
import React, { useState, useEffect } from "react";
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
  const [email, setEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [infoObject, setInfoObject] = useState({
    naam: "",
    provincie: "",
    woonplaats: "",
    postcode: "",
    straatnaam: "",
    huisnummer: "",
    telefoonnummer: "",
    email: "",
  });

  useEffect(() => {
    console.log(infoObject);
  }, [infoObject]);

  const addNaam = () => {
    setNaam(inputNaam);
    setInfoObject({ ...infoObject, naam: inputNaam });
    setInputNaam("");
  };

  const addProvincie = () => {
    setProvincie(inputProvincie);
    setInfoObject({ ...infoObject, provincie: inputProvincie });
    setInputProvincie("");
  };

  const addWoonplaats = () => {
    setWoonplaats(inputWoonplaats);
    setInfoObject({ ...infoObject, woonplaats: inputWoonplaats });
    setInputWoonplaats("");
  };

  const addPostcode = () => {
    setPostcode(inputPostcode);
    setInfoObject({ ...infoObject, postcode: inputPostcode });
    setInputPostcode("");
  };

  const addStraatnaam = () => {
    setStraatnaam(inputStraatnaam);
    setInfoObject({ ...infoObject, straatnaam: inputStraatnaam });
    setInputStraatnaam("");
  };

  const addHuisnummer = () => {
    setHuisnummer(inputHuisnummer);
    setInfoObject({ ...infoObject, huisnummer: inputHuisnummer });
    setInputHuisnummer("");
  };

  const addTelefoonnummer = () => {
    setTelefoonnummer(inputTelefoonnummer);
    setInfoObject({ ...infoObject, telefoonnummer: inputTelefoonnummer });
    setInputTelefoonnummer("");
  };

  const addEmail = () => {
    setEmail(inputEmail);
    setInfoObject({ ...infoObject, email: inputEmail });
    setInputEmail("");
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
            <span
              style={{
                backgroundColor: provincie ? "green" : "black",
              }}
            >
              *Provincie
            </span>
            <input
              type="text"
              placeholder={provincie || "?"}
              onChange={(e) => setInputProvincie(e.target.value)}
            ></input>
            {inputProvincie ? (
              <button onClick={addProvincie}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: woonplaats ? "green" : "black",
              }}
            >
              *Woonplaats
            </span>
            <input
              type="text"
              placeholder={woonplaats || "?"}
              onChange={(e) => setInputWoonplaats(e.target.value)}
            ></input>
            {inputWoonplaats ? (
              <button onClick={addWoonplaats}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: postcode ? "green" : "black",
              }}
            >
              *Postcode
            </span>
            <input
              type="text"
              placeholder={postcode || "?"}
              onChange={(e) => setInputPostcode(e.target.value)}
            ></input>
            {inputPostcode ? (
              <button onClick={addPostcode}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: straatnaam ? "green" : "black",
              }}
            >
              *Straatnaam
            </span>
            <input
              type="text"
              placeholder={straatnaam || "?"}
              onChange={(e) => setInputStraatnaam(e.target.value)}
            ></input>
            {inputStraatnaam ? (
              <button onClick={addStraatnaam}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: huisnummer ? "green" : "black",
              }}
            >
              *Huisnummer
            </span>
            <input
              type="text"
              placeholder={huisnummer || "?"}
              onChange={(e) => setInputHuisnummer(e.target.value)}
            ></input>
            {inputHuisnummer ? (
              <button onClick={addHuisnummer}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: telefoonnummer ? "green" : "black",
              }}
            >
              *Telefoonnummer
            </span>
            <input
              type="text"
              placeholder={telefoonnummer || "?"}
              onChange={(e) => setInputTelefoonnummer(e.target.value)}
            ></input>
            {inputTelefoonnummer ? (
              <button onClick={addTelefoonnummer}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>

          <div className={cl.row}>
            <span
              style={{
                backgroundColor: email ? "green" : "black",
              }}
            >
              E-Mail
            </span>
            <input
              type="text"
              placeholder={email || "?"}
              onChange={(e) => setInputEmail(e.target.value)}
            ></input>
            {inputEmail ? (
              <button onClick={addEmail}>
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
