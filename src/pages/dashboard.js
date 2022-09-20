import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };
  useEffect(() => {
    document.title = "Dashboard | Home";
  }, []);
  return (
    <div>
      If you are seeing this, your authentificated
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
