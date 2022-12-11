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

  const navigate = useNavigate();
  useEffect(() => {
    if (props.user === "") {
      navigate("/");
    }
  }, [navigate, props.user]);

  return (
    <div className={cl.dashboard}>
      <Nav setUser={props.setUser} count={orderCount} cartOpen={setCartOpen} />
      <UserInfo user={props.user} />
      <CurrentStock counter={setOrderCount} />
      {cartOpen ? <ShoppingCart closeCart={setCartOpen} /> : null}
    </div>
  );
};

export default Dashboard;
