import cl from "./GegevensModal.module.css";
import React, { useState, useEffect } from "react";
import {
  FaTimesCircle,
  FaSave,
  FaCloudDownloadAlt,
  FaTrashAlt,
} from "react-icons/fa";

const GegevensModal = (props) => {
  const [inputNaam, setInputNaam] = useState("");
  const [inputProvincie, setInputProvincie] = useState("");
  const [inputWoonplaats, setInputWoonplaats] = useState("");
  const [inputPostcode, setInputPostcode] = useState("");
  const [inputStraatnaam, setInputStraatnaam] = useState("");
  const [inputHuisnummer, setInputHuisnummer] = useState("");
  const [inputTelefoonnummer, setInputTelefoonnummer] = useState("");
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
  }, [props.user]);

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
    let totalLength = 0;
    for (const res of Object.entries(infoObject)) {
      totalLength += res[1].length;
    }
    if (totalLength === 0) {
      props.gegevens(false);
      return;
    }
    if (totalLength !== 0) {
      props.gegevens(true);
      return;
    }
  };

  const addNaam = () => {
    setInfoObject({ ...infoObject, naam: inputNaam });
    setInputNaam("");
  };

  const deleteNaam = () => {
    setInfoObject({ ...infoObject, naam: "" });
    setInputNaam("");
  };

  const addProvincie = () => {
    setInfoObject({ ...infoObject, provincie: inputProvincie });
    setInputProvincie("");
  };

  const deleteProvincie = () => {
    setInfoObject({ ...infoObject, provincie: "" });
    setInputProvincie("");
  };

  const addWoonplaats = () => {
    setInfoObject({ ...infoObject, woonplaats: inputWoonplaats });
    setInputWoonplaats("");
  };

  const deleteWoonplaats = () => {
    setInfoObject({ ...infoObject, woonplaats: "" });
    setInputWoonplaats("");
  };

  const addPostcode = () => {
    setInfoObject({ ...infoObject, postcode: inputPostcode });
    setInputPostcode("");
  };

  const deletePostcode = () => {
    setInfoObject({ ...infoObject, postcode: "" });
    setInputPostcode("");
  };

  const addStraatnaam = () => {
    setInfoObject({ ...infoObject, straatnaam: inputStraatnaam });
    setInputStraatnaam("");
  };

  const deleteStraatnaam = () => {
    setInfoObject({ ...infoObject, straatnaam: "" });
    setInputStraatnaam("");
  };

  const addHuisnummer = () => {
    setInfoObject({ ...infoObject, huisnummer: inputHuisnummer });
    setInputHuisnummer("");
  };

  const deleteHuisnummer = () => {
    setInfoObject({ ...infoObject, huisnummer: "" });
    setInputStraatnaam("");
  };

  const addTelefoonnummer = () => {
    setInfoObject({ ...infoObject, telefoonnummer: inputTelefoonnummer });
    setInputTelefoonnummer("");
  };

  const deleteTelefoonnummer = () => {
    setInfoObject({ ...infoObject, telefoonnummer: "" });
    setInputTelefoonnummer("");
  };

  const addEmail = () => {
    setInfoObject({ ...infoObject, email: inputEmail });
    setInputEmail("");
  };

  const deleteEmail = () => {
    setInfoObject({ ...infoObject, email: "" });
    setInputEmail("");
  };

  const closeHandler = () => {
    props.closed(false);
  };

  return (
    <>
      <div className={cl.backdrop} onClick={closeHandler}></div>
      <div className={cl.outerModal}>
        <div className={cl.modal}>
          <div className={cl.closePosition}>
            <FaTimesCircle className={cl.close} onClick={closeHandler} />
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
                value={inputNaam}
              ></input>
              {inputNaam ? (
                <button onClick={addNaam}>
                  <FaSave className={cl.saveIcon} />
                </button>
              ) : (
                <button
                  onClick={deleteNaam}
                  style={{
                    display: infoObject.naam === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deleteProvincie}
                  style={{
                    display: infoObject.provincie === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deleteWoonplaats}
                  style={{
                    display: infoObject.woonplaats === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deletePostcode}
                  style={{
                    display: infoObject.postcode === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deleteStraatnaam}
                  style={{
                    display: infoObject.straatnaam === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deleteHuisnummer}
                  style={{
                    display: infoObject.huisnummer === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
            </div>

            <div className={cl.row}>
              <span
                style={{
                  backgroundColor: infoObject.telefoonnummer
                    ? "green"
                    : "black",
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
              ) : (
                <button
                  onClick={deleteTelefoonnummer}
                  style={{
                    display: infoObject.telefoonnummer === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
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
              ) : (
                <button
                  onClick={deleteEmail}
                  style={{
                    display: infoObject.email === "" ? "none" : "flex",
                  }}
                >
                  <FaTrashAlt className={cl.saveIcon} />
                </button>
              )}
            </div>
          </div>
          <div className={cl.submitBox}>
            <button className={cl.bijwerken} onClick={bijwerkenHandler}>
              Bijwerken <FaCloudDownloadAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GegevensModal;
