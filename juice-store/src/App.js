import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <Routes>
      <Route index path="/" element={<Login setUser={setUser} />} />
      <Route path="dashboard" element={<Dashboard user={user} />} />
    </Routes>
  );
};

export default App;
