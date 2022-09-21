import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./pages/login";
import PrivateRoute from "./components/privateRoute";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div style={{ display: "inline", width: "100px" }}>
        <Link to="login">Login </Link>
        <Link to="dashboard"> | Dashboard</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
