import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/Dashboard";
import Guest from "./pages/Guest";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import Concierge from "./pages/Concierge";

function App() {
  const [user, setUser] = useState(null);
  const login = () => {
    //My request in this line =>
    setUser({
      email: "admin@example.com",
      password: "example",
    });
  };
  const logout = () => setUser(null);

  return (
    <Router>
      <div style={{ display: "inline", width: "100px" }}>
        <Link to="login">Login </Link>
        <Link to="dashboard"> | Dashboard</Link>
      </div>

      {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/guest/:id" element={<h1>ID</h1>} />
          <Route path="/concierge" element={<Concierge />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
