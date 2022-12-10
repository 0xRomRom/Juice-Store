import cl from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./dashboardComponents/Nav";
import UserInfo from "./dashboardComponents/UserInfo";

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
      <UserInfo />
    </div>
  );
};

export default Dashboard;
