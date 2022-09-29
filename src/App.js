import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  const [user, setUser] = useState(null);
  const login = () => {
    //My request in this line =>
    setUser({
      email: "admin@example.com",
      password: "example",
    });
    localStorage.setItem("isLogin", true);
    return <Navigate to="/"/>
  };
  const logout = () => {setUser(null); localStorage.removeItem("isLogin");};

  return (
    <Router>


      <Routes>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login setUser={setUser} />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard user={user} logout={logout} />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<h1>ID: </h1>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
