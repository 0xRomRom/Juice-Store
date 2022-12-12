import cl from "./ContactModal.module.css";
import { FaTimesCircle } from "react-icons/fa";

const ContactModal = (props) => {
  const closeModal = () => {
    props.closeContact(false);
  };

  return (
    <div className={cl.contact}>
      <div className={cl.backdrop} onClick={closeModal}></div>
      <div className={cl.modal}>
        <div className={cl.closePosition}>
          <FaTimesCircle className={cl.close} onClick={closeModal} />
        </div>
        <h1 className={cl.hero}>Contact</h1>
      </div>
    </div>
  );
};

export default ContactModal;
