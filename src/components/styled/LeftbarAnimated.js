import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/icon/img";
import dashboard from "../../assets/icon/1dashboard.png";
import rooms from "../../assets/icon/2rooms.png";
import bookings from "../../assets/icon/3bookings.png";
import users from "../../assets/icon/4users.png";
import contact from "../../assets/icon/5guest.png";
import { ButtonGreen } from "./StyledBtn";
import { NavbarContent } from "./NavbarContent";

const Styles = styled.div`
  .logo {
    box-sizing: border-box;
    max-width: 100%;
    padding: 9% 20% 9% 16%;
  }
  .leftbar {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: white;
    box-shadow: 13pt 3pt 40pt #00000005;
    transition: all 0.5s;
    /* transition: left 300ms ease-out; */
  }
  .inactive {
    left: -20%;
  }
  nav a {
    display: block;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    padding: 10px 0 21px 56px;
    color: #799283;
    &:hover {
      color: #e23428;
      border-left: 5px solid #e23428;
      transition: 0.3s;
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
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
  .card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 20px 30px #00000014;
    padding: 22px 22px 20px;
    margin: 50px 15%;
    &__photo {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: gray;
      margin: -50px auto 0 auto;
    }
    &__text {
      text-align: center;
      &__p1 {
        font-size: 14px;
      }
      &__p2 {
        font-size: 10px;
      }
      &__btn {
        font-size: 14px;
      }
    }
  }
  .footer {
    margin: 0 auto;
    text-align: center;
    &__p1 {
      font-size: 14px;
      font-weight: 700;
    }
    &__p2 {
      font-size: 10px;
      color: #799283;
    }
  }
`;

const NavbarStyle = styled.div`
  .left-active {
    margin-left: 20%;
    transition: all 0.5s;
  }
  .left-inactive {
    margin-left: 0%;
    transition: all 0.5s;
  }
`;

function LeftbarAnimated({ logout, props }) {
  const [leftbar, setleftbar] = useState(false);
  const showleftbar = () => setleftbar(!leftbar);
  return (
    <>
      <Styles>
        <nav className={leftbar ? "leftbar inactive" : "leftbar"}>
          <img className="logo" src={img.logo} alt="Hotel logo" />
          <button className="menu" onClick={showleftbar}></button>
          <Link to="/">
            <img id="dashboard" src={dashboard} alt="" /> Dashboard
          </Link>
          <Link to="/rooms">
            <img id="rooms" src={rooms} alt="" /> Rooms
          </Link>
          <Link to="/bookings">
            <img id="bookings" src={bookings} alt="" /> Bookings
          </Link>
          <Link to="/users">
            <img id="users" src={users} alt="" /> Users
          </Link>
          <Link to="/contact">
            <img id="contact" src={contact} alt="" /> Contact
          </Link>
          <div className="card">
            <div className="card__photo"></div>
            <div className="card__text">
              <p className="card__text__p1">William Johanson</p>
              <p className="card__text__p2">williamjphn@mail.com</p>
            </div>
            <ButtonGreen className="card__text__btn">Contact Us</ButtonGreen>
          </div>
          <div className="footer">
            <p className="footer__p1">Travl Hotel Admin Dashboard</p>
            <p className="footer__p2">© 2022 All Rights Reserved</p>
          </div>
        </nav>
      </Styles>
      <NavbarStyle>
        <div className={leftbar ? "left-inactive" : "left-active"}>
          <NavbarContent logout={logout} />
          Contact is Empty
        </div>
      </NavbarStyle>
    </>
  );
}
export default LeftbarAnimated;
