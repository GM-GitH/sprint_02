import { useEffect } from "react";
import LeftbarAnimated from "../components/styled/LeftbarAnimated";
// import image from "../assets/img/image";



const Contact = () => {
  useEffect(() => {
    document.title = "Dashboard | Contact";
  }, []);
  return (
    <>
        <LeftbarAnimated />
    </>
  );
};
export default Contact;
