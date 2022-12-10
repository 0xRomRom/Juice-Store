import cl from "./GegevensModal.module.css";
import React, { useState, useEffect } from "react";
import { FaWindowClose, FaSave, FaCloudDownloadAlt } from "react-icons/fa";

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
    const fetchData = async () => {
      const fetcher = await fetch(
        `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/${props.user}/postalInfo.json`
      );
      const result = await fetcher.json();
      if (result === null) {
        setInfoObject({
          naam: "",
          provincie: "",
          woonplaats: "",
          postcode: "",
          straatnaam: "",
          huisnummer: "",
          telefoonnummer: "",
          email: "",
        });
      } else {
        setInfoObject(result);
      }
    };
    fetchData();
  }, []);

  const bijwerkenHandler = async () => {
    fetch(
      `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/${props.user}/postalInfo.json`,
      {
        method: "PUT",
        body: JSON.stringify(infoObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.closed(false);
  };

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
                backgroundColor: infoObject.naam ? "green" : "black",
              }}
            >
              *Naam
            </span>
            <input
              type="text"
              placeholder={infoObject.naam || "?"}
              onChange={(e) => setInputNaam(e.target.value)}
              value={inputNaam || ""}
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
                backgroundColor: infoObject.provincie ? "green" : "black",
              }}
            >
              *Provincie
            </span>
            <input
              type="text"
              placeholder={infoObject.provincie || "?"}
              onChange={(e) => setInputProvincie(e.target.value)}
              value={inputProvincie || ""}
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
                backgroundColor: infoObject.woonplaats ? "green" : "black",
              }}
            >
              *Woonplaats
            </span>
            <input
              type="text"
              placeholder={infoObject.woonplaats || "?"}
              onChange={(e) => setInputWoonplaats(e.target.value)}
              value={inputWoonplaats || ""}
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
                backgroundColor: infoObject.postcode ? "green" : "black",
              }}
            >
              *Postcode
            </span>
            <input
              type="text"
              placeholder={infoObject.postcode || "?"}
              onChange={(e) => setInputPostcode(e.target.value)}
              value={inputPostcode || ""}
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
                backgroundColor: infoObject.straatnaam ? "green" : "black",
              }}
            >
              *Straatnaam
            </span>
            <input
              type="text"
              placeholder={infoObject.straatnaam || "?"}
              onChange={(e) => setInputStraatnaam(e.target.value)}
              value={inputStraatnaam || ""}
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
                backgroundColor: infoObject.huisnummer ? "green" : "black",
              }}
            >
              *Huisnummer
            </span>
            <input
              type="text"
              placeholder={infoObject.huisnummer || "?"}
              onChange={(e) => setInputHuisnummer(e.target.value)}
              value={inputHuisnummer || ""}
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
                backgroundColor: infoObject.telefoonnummer ? "green" : "black",
              }}
            >
              *Telefoonnummer
            </span>
            <input
              type="text"
              placeholder={infoObject.telefoonnummer || "?"}
              onChange={(e) => setInputTelefoonnummer(e.target.value)}
              value={inputTelefoonnummer || ""}
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
                backgroundColor: infoObject.email ? "green" : "black",
              }}
            >
              E-Mail
            </span>
            <input
              type="text"
              placeholder={infoObject.email || "?"}
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail || ""}
            ></input>
            {inputEmail ? (
              <button onClick={addEmail}>
                <FaSave className={cl.saveIcon} />
              </button>
            ) : null}
          </div>
        </div>
        <div className={cl.submitBox}>
          <button className={cl.bijwerken} onClick={bijwerkenHandler}>
            Bijwerken <FaCloudDownloadAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default GegevensModal;
