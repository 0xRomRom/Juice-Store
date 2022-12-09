import cl from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.user === "") {
      navigate("/");
    }
  }, [navigate, props.user]);

  return <div className={cl.dashboard}></div>;
};

export default Dashboard;
