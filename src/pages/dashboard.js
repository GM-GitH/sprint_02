import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRed } from "../components/styled/StyledBtn";
import img from "../assets/icon/img";
import dashboard from "../assets/icon/1dashboard.png"
import rooms from "../assets/icon/2rooms.png"
import bookings from "../assets/icon/3bookings.png"
import users from "../assets/icon/4users.png"
import contact from "../assets/icon/5guest.png"
// import image from "../assets/img/image";
import Home from "../components/Home";

const leftOpen = () => {
  document.getElementById("navbar").style.marginLeft = "20%";
  document.getElementById("leftbar").style.width = "20%";
  document.getElementById("leftbar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "inline-block";
};
const leftClose = () => {
  document.getElementById("navbar").style.marginLeft = "0%";
  document.getElementById("leftbar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("closeNav").style.display = "none";
};
const DashboardStyle = styled.div`
  .navbar-container {
    display: flex;
    position: sticky;
    justify-content: space-between;
    top: 0;
    background-color: #ffffff;
    z-index: 2;
    padding: 0.01em 16px;
    box-shadow: 0pt 3pt 10pt #00000005;
    user-select: none;
    cursor: default;
  }
  .navbar-buttons {
    display: inline-block;
    margin-top: 15px;
  }
  .material-symbols-outlined {
    margin-right: 30px;
    color: #135846;
  }
  .logo {
    box-sizing: border-box;
    max-width: 100%;
    padding: 9% 20% 18% 16%;
  }
  a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    padding: 21px 0 21px 56px;
    width: 100%;
    color: #799283;
    &:hover {
      color: #e23428;
      border-left: 5px solid #e23428;
      & img {
        filter: brightness(.55) hue-rotate(241deg) saturate(20);
      }
    }
    & img {
      width: 24px;
      vertical-align: middle;
      margin-right: 20px
    }
  }
  #leftbar {
    display: block;
    position: fixed;
    height: 100%;
    background-color: #ffffff;
    color: #799283;
    font-family: "Poppins", sans-serif;
    width: 20%;
    box-shadow: 13pt 3pt 40pt #00000005;
  }
  #navbar {
    margin-left: 20%;
  }
  .close,
  .open {
    border: none;
    display: inline-block;
    vertical-align: top;
    background-color: inherit;
    cursor: pointer;
    background-image: url(${img.burger});
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
  #logout {
    cursor: pointer;
    display: inline;
    vertical-align: bottom;
    margin-left: 50px
  }
`;

const Dashboard = ({logout}) => {
  const isLogin = localStorage.getItem("isLogin")
  const navigate = useNavigate()
  
  function handleLocalStorage() {
    localStorage.removeItem("isLogin")
    navigate("/login")
  }

  useEffect(() => {
    document.title = "Dashboard | Home";
  }, []);

  return (
    <div>
      <DashboardStyle>
        <div className="left-panel"></div>
        <div id="leftbar">
          <img className="logo" src={img.logo} alt="Hotel Admin Dashboard logo" />
          <Link to="/dashboard"><img src={dashboard} alt="" /> Dashboard</Link>
          <Link to="/rooms"><img src={rooms} alt="" /> Rooms</Link>
          <Link to="/bookings"><img src={bookings} alt="" /> Bookings</Link>
          <Link to="/users"><img src={users} alt="" /> Users</Link>
          <Link to="/contact"><img src={contact} alt="" /> Contact</Link>
        </div>
        <div className="navbar" id="navbar">
          <div className="navbar-container">
            <div className="navbar-title">
              <button id="closeNav" className="close" onClick={leftClose}></button>
              <button id="openNav" className="open" onClick={leftOpen}></button>
              <h1>Dashboard</h1>
            </div>
            <div className="navbar-buttons">
              <span className="material-symbols-outlined">search</span>
              <span className="material-symbols-outlined">favorite</span>
              <span className="material-symbols-outlined">mail</span>
              <span className="material-symbols-outlined">notifications</span>
              <span className="material-symbols-outlined">chat</span>
              {/******************************* MUST CLICK TWICE TEMPORARILY BY LOCAL STORAGE AND STATE ********************************/}
              <ButtonRed id="logout" onClick={isLogin ? handleLocalStorage : logout}>
                {isLogin ? "Logout" : "Confirm"}
                {/* Logout */}
              </ButtonRed>
            </div>
          </div>
          <Home />
        </div>
      </DashboardStyle>
    </div>
  );
};
export default Dashboard