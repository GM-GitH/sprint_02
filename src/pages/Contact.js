import { useEffect } from "react";
import styled from "styled-components";
import { NavbarContent } from "../components/styled/NavbarContent";
import { LeftBar } from "../components/styled/StyledLeftbar";
// import image from "../assets/img/image";

const DashboardStyle = styled.div`
.logo {
  box-sizing: border-box;
  max-width: 100%;
  padding: 9% 20% 18% 16%;
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
img {
  position: relative;
  z-index: 0;
  width: 100%;
}
`;

const Contact = () => {
  useEffect(() => {
    document.title = "Dashboard | Concierge";
  }, []);
  return (
    <div>
      <DashboardStyle>
        <div className="left-panel"></div>
        <LeftBar />
        <div className="navbar" id="navbar">
          <NavbarContent />
          Contact is Empty
        </div>
      </DashboardStyle>
    </div>
  );
};
export default Contact;
