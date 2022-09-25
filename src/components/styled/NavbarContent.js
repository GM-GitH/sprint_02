import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/icon/img";
import { ButtonRed } from "./StyledBtn";

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
const NavbarStyle = styled.div`
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
  #navbar {
    margin-left: 20%;
  }
`;
export const NavbarContent = (logout) => {
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  function handleLocalStorage() {
    localStorage.removeItem("isLogin");
    navigate("/login");
  }
  return (
    <>
      <NavbarStyle>
        <div className="navbar-container">
          <button id="closeNav" className="close" onClick={leftClose}></button>
          <button id="openNav" className="open" onClick={leftOpen}></button>
          <h1>Dashboard</h1>
          {/******************************* MUST CLICK TWICE TEMPORARILY BY LOCAL STORAGE AND STATE ********************************/}
          <ButtonRed id="logout" onClick={isLogin ? handleLocalStorage : logout}>
            {isLogin ? "Logout" : "Confirm"}
            {/* Logout */}
          </ButtonRed>
        </div>
      </NavbarStyle>
    </>
  );
};
