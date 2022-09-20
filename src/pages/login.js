import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import userlogo from "../assets/icon/user.svg";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;
const Subcontainer = styled.div`
  position: absolute;
  top: 45vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-shadow: 0px 16px 30px #00000014;
`;
const Form = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
`;
const H2 = styled.h2`
  color: #e23428;
  line-height: 30px;
  cursor: default;
`;
const Label = styled.label`
  display: block;
  text-align: left;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  margin-bottom: 30px;
  border: none;
  outline: none;
  border-bottom: 2px solid #c5c5c5;
`;
const Button = styled.button`
  display: block;
  border: none;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  padding: 10px 40px;
  color: #135846;
  background: #ebf1ef 0% 0% no-repeat padding-box;
  margin: 0 auto;
  &:hover {
    color: #ebf1ef;
    background-color: #135846;
  }
`;
const P = styled.p`
  font-size: 12px;
`;

export const Login = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassord] = useState("");
  const isLogged = localStorage.getItem("isLogin");
  //const email = document.getElementById("email");
  //const password = document.getElementById("password")
  const navigate = useNavigate();
  const handleSubmit = () => {
    //if (email === "admin@example.com" && password === "example"){
    localStorage.setItem("isLogin", true);
    navigate("/dashboard");
    //}
  };

  /* if (isLogged) {
    navigate("/dashboard")
    }*/

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
    }
    else { document.title = "Dashboard | Login"; }
  });
  return (
    <Container>
      <Subcontainer>
        <Form onSubmit={handleSubmit}>
          <img src={userlogo} alt="" />
          <img src="src/assets/icon/user.svg" alt="" />
          <H2>Login</H2>
          <Label>Email:</Label>
          <Input type="email" name="email" id="email" placeholder="email" defaultValue="admin@example.com" required />
          <Label>Password:</Label>
          <Input type="password" name="password" id="password" placeholder="password" defaultValue="example" required />
          <Button type="submit">Login</Button>
          <P>*Just click "Login" to start.</P>
        </Form>
      </Subcontainer>
    </Container>
  );
};
