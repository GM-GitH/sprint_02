import { useEffect } from "react";
import styled from "styled-components";
// import image from "../assets/img/image";
// import GuestList from "../components/GuestList";
import { LeftBar } from "../components/styled/StyledLeftbar";
import { NavbarContent } from "../components/styled/NavbarContent";

const DashboardStyle = styled.div`

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
}
img {
  position: relative;
  z-index: 0;
  width: 100%;
}
`;

const Users = () => {
  useEffect(() => {
    document.title = "Dashboard | Guest";
  }, []);
  return (
    <div>
      <DashboardStyle>
        <div className="left-panel"></div>
        <LeftBar />
        <div className="navbar" id="navbar">
          <NavbarContent />
          Users is empty
          {/* <GuestList /> */}
        </div>
      </DashboardStyle>
    </div>
  );
};
export default Users;
