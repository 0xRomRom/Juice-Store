import cl from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./dashboardComponents/Nav";
import UserInfo from "./dashboardComponents/UserInfo";
import CurrentStock from "./dashboardComponents/CurrentStock";

const Dashboard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.user === "") {
      navigate("/");
    }
  }, [navigate, props.user]);

  return (
    <div className={cl.dashboard}>
      <Nav setUser={props.setUser} />
      <UserInfo user={props.user} />
      <CurrentStock />
    </div>
  );
};

export default Dashboard;
