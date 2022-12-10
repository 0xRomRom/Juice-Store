import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  // const [user, setUser] = useState("mz3Zhwq2ZaRHo0XlliCClqwF32v2");

  return (
    <Routes>
      <Route index path="/" element={<Login setUser={setUser} />} />
      <Route
        path="dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
    </Routes>
  );
};

export default App;
