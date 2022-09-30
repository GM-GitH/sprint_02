import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/icon/img";
import dashboard from "../../assets/icon/1dashboard.png";
import rooms from "../../assets/icon/2rooms.png";
import bookings from "../../assets/icon/3bookings.png";
import users from "../../assets/icon/4users.png";
import contact from "../../assets/icon/5guest.png";
import { ButtonRed } from "./StyledBtn";

const Styles = styled.div`
  .logo {
    box-sizing: border-box;
    max-width: 100%;
    padding: 9% 20% 18% 16%;
  }
  .leftbar {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: white;
    /* transition: left 300ms ease-out; */
  }
  .leftbar.inactive {
    left: -20%;
  }
  nav a {
    display: block;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    padding: 21px 0 21px 56px;
    color: #799283;
    &:hover {
      color: #e23428;
      border-left: 5px solid #e23428;
      & img {
        filter: brightness(0.55) hue-rotate(241deg) saturate(20);
      }
    }
    & img {
      width: 24px;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  .menu {
    position: absolute;
    border: none;
    vertical-align: top;
    background-color: inherit;
    cursor: pointer;
    background-image: url(${img.burger});
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
    padding: 30px;
    margin-left: -2px;
    margin-top: 11px;
  }
`;

const NavbarStyle = styled.div`
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
        filter: brightness(0.55) hue-rotate(241deg) saturate(20);
      }
    }
    & img {
      width: 24px;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  .left-active {
    margin-left: 20%;
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
    margin-left: 80px;
  }
  #logout {
    cursor: pointer;
    display: inline;
    vertical-align: bottom;
    margin-left: 50px;
  }
`;

function LeftbarAnimated({ logout, props }) {
  const [leftbar, setleftbar] = useState(false);
  const showleftbar = () => setleftbar(!leftbar);
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  function handleLocalStorage() {
    localStorage.removeItem("isLogin");
    navigate("/login");
  }
  return (
    <>
      <Styles>
        <nav className={leftbar ? "leftbar inactive" : "leftbar"}>
          <img className="logo" src={img.logo} alt="Hotel Admin Dashboard logo" />
          <button className="menu" onClick={showleftbar}></button>
          <Link to="/dashboard">
            <img src={dashboard} alt="" /> Dashboard
          </Link>
          <Link to="/rooms">
            <img src={rooms} alt="" /> Rooms
          </Link>
          <Link to="/bookings">
            <img src={bookings} alt="" /> Bookings
          </Link>
          <Link to="/users">
            <img src={users} alt="" /> Users
          </Link>
          <Link to="/contact">
            <img src={contact} alt="" /> Contact
          </Link>
        </nav>
      </Styles>
      <NavbarStyle>
        <div className={leftbar ? "" : "left-active"}>
          <div className="navbar-container">
            <div className="navbar-title">
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
          Contact is Empty
        </div>
      </NavbarStyle>
    </>
  );
}
export default LeftbarAnimated;
