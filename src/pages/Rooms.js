import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRed } from "../components/styled/StyledBtn";
import img from "../assets/icon/img";
// import image from "../assets/img/image";

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
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 2;
    padding: 0.01em 16px;
    box-shadow: 0pt 3pt 10pt #00000005;
    user-select: none;
    cursor: default;
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
    }
  }
  #navbar {
    margin-left: 20%;
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
    position: absolute;
    right: 10px;
    top: 20px;
    cursor: pointer;
  }
`;

const Rooms = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };
  useEffect(() => {
    document.title = "Dashboard | Rooms";
  }, []);
  return (
    <div>
      <DashboardStyle>
        <div className="left-panel"></div>
        <div id="leftbar">
          <img className="logo" src={img.logo} alt="Hotel Admin Dashboard logo" />
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/rooms">Room</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/guest">Guest</Link>
          <Link to="/concierge">Concierge</Link>
        </div>
        <div className="navbar" id="navbar">
          <div className="navbar-container">
            <button id="closeNav" className="close" onClick={leftClose}></button>
            <button id="openNav" className="open" onClick={leftOpen}></button>
            <h1>Dashboard</h1>
            <ButtonRed id="logout" onClick={handleLogout}>
              Logout
            </ButtonRed>
          </div>
          Rooms is Empty
        </div>
      </DashboardStyle>
    </div>
  );
};
export default Rooms;
