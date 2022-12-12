import cl from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./dashboardComponents/Nav";
import UserInfo from "./dashboardComponents/UserInfo";
import CurrentStock from "./dashboardComponents/CurrentStock";
import ShoppingCart from "./dashboardComponents/ShoppingCart";

const Dashboard = (props) => {
  const [orderCount, setOrderCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (props.user === "") {
      navigate("/");
    }
    const fetchData = async () => {
      const fetcher = await fetch(
        `https://moon-juice-default-rtdb.europe-west1.firebasedatabase.app/${props.user}/postalInfo.json`
      );
      const result = await fetcher.json();
      let totalLength = 0;
      for (const res of Object.entries(result)) {
        totalLength += res[1].length;
      }
      if (totalLength !== 0) {
        setUserInfo({
          naam: "",
          provincie: "",
          woonplaats: "",
          postcode: "",
          straatnaam: "",
          huisnummer: "",
          telefoonnummer: "",
          email: "",
        });
        return;
      }
      if (totalLength === 0) {
        setUserInfo(result);
        return;
      }
    };
    fetchData();
  }, [navigate, props.user]);

  return (
    <div className={cl.dashboard}>
      <Nav setUser={props.setUser} count={orderCount} cartOpen={setCartOpen} />
      <UserInfo user={props.user} userInfo={setUserInfo} />
      <CurrentStock
        counter={setOrderCount}
        orders={setCurrentOrders}
        ordered={currentOrders}
      />
      {cartOpen ? (
        <ShoppingCart
          closeCart={setCartOpen}
          orders={currentOrders}
          setOrders={setCurrentOrders}
          orderCount={setOrderCount}
          totalCount={orderCount}
          userInfo={userInfo}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
