import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/icon/logo.png";
import bg from "../assets/img/delete.png";
import bg1 from "../assets/img/delete1.png";

const leftOpen = () => {
  document.getElementById("main").style.marginLeft = "20%";
  document.getElementById("leftbar").style.width = "20%";
  document.getElementById("leftbar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "inline-block";
};
const leftClose = () => {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("leftbar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("closeNav").style.display = "none";
};
const DashboardStyle = styled.div`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
  main {
    display: block;
  }
  .navbar-container {
    position: relative;
    z-index: 2;
    padding: 0.01em 16px;
    box-shadow: 0pt 3pt 10pt #00000005;
  }
  .logo {
    box-sizing: border-box;
    max-width: 100%;
    padding: 9% 20% 18% 16%;
  }
  a {
    border: none;
    padding: 8px 16px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;

    box-sizing: border-box;
    padding: 21px 16px;
    width: 100%;
    display: block;
    color: #799283;
  }
  #main {
    margin-left: 20%;
  }
  #leftbar {
    display: block;
    position: fixed;
    height: 100%;
    background-color: #ffffff;
    color: #799283;
    width: 20%;
    box-shadow: 13pt 3pt 40pt #00000005;
  }
  .close,
  .open {
    border: none;
    display: inline-block;
    vertical-align: top;
    background-color: inherit;
    cursor: pointer;
    background-image: url("src/assets/icon/burger.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;

    padding: 30px;
    margin: 12px 30px 0 0;
  }
  .open {
    display: none;
  }
  img {
    position: relative;
    z-index: 0;
    width: 100%;
  }
  h1 {
    display: inline-block;
    color: #262626;
    font-family: "Poppins", sans-serif;
    font-size: 28;
    line-height: 42px;
  }
`;

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
      If you are seeing this, you are authenticated and this is the Dashboard
      <button onClick={handleLogout}>Logout</button> <div className="left-panel"></div>
      <DashboardStyle>
        <div id="leftbar">
          <img className="logo" src={logo} alt="Hotel Admin Dashboard logo" />
          <a href="./">Dashboard</a>
          <a href="./">Room</a>
          <a href="./">Bookings</a>
          <a href="./">Guest</a>
          <a href="./">Concierge</a>
        </div>
        <div id="main">
          <div className="navbar">
            <div className="navbar-container">
              <button id="closeNav" className="close" onClick={leftClose}></button>
              <button id="openNav" className="open" onClick={leftOpen}></button>
              <h1>Dashboard</h1>
            </div>
          </div>
          <img src={bg} alt="background" />
          <img src={bg1} alt="background" style={{ margin: "-8px -2px" }} />

          <div>
            <p>Don't worry. It's just a bg</p>
          </div>
        </div>
      </DashboardStyle>
    </div>
  );
};
