import cl from "./ContactModal.module.css";
import { FaTimesCircle, FaRegEnvelope } from "react-icons/fa";
import React, { useState } from "react";

const ContactModal = (props) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const closeModal = () => {
    props.closeContact(false);
    setEmailSent(false);
  };

  const submitMessage = () => {
    const messageObj = {
      message: message,
      email: email,
    };
    if (message.length < 10) return;

    fetch(
      `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/berichten.json`,
      {
        method: "POST",
        body: JSON.stringify(messageObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setEmailSent(true);
  };

  return (
    <div className={cl.contact}>
      <div className={cl.backdrop} onClick={closeModal}></div>

      <div className={cl.modal}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeModal} />
        </div>
        {!emailSent && (
          <>
            <h1 className={cl.hero}>Contact</h1>
            <div className={cl.textBox}>
              <textarea
                className={cl.message}
                spellCheck="false"
                maxLength="750"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className={cl.emailBox}>
                <span className={cl.espan}>E-Mail</span>
                <input
                  type="email"
                  className={cl.emailInput}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={cl.submitPosition}>
              <button className={cl.submit} onClick={submitMessage}>
                Bevestigen <FaRegEnvelope />
              </button>
            </div>
          </>
        )}
        {emailSent && <span className={cl.received}>Bericht ontvangen</span>}
      </div>
    </div>
  );
};

export default ContactModal;
