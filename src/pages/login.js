import userlogo from "../assets/icon/user.svg"; 
import { useEffect, useState } from "react";
import { ButtonGreen } from "../components/styled/StyledBtn";
import { Container, Form, H2, Label, P, Subcontainer } from "../components/styled/StyledLogin";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

let Input = styled.input`
font-size: 18px;
padding: 5px;
margin-bottom: 30px;
border: none;
outline: none;
border-bottom: 2px solid #c5c5c5;
`;

const Login = ({user, setUser}) => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("example");
  // const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "example") {
      setUser({"email": email, "password": password})
      localStorage.setItem("isLogin", true);
    } return
    // else {Input = styled.input`
    // font-size: 18px;
    // padding: 5px;
    // margin-bottom: 30px;
    // border: none;
    // outline: none;
    // border-bottom: 2px solid red;`}
    // return navigate("/login")
  };
  
  useEffect(() => {
    document.title = "Dashboard | Login";
  }, []);

  return (
    <Container>
      <Subcontainer>
        <Form onSubmit={handleSubmit}>
          <img src={userlogo} alt="" />
          <H2>Login</H2>
          <Label>Email:</Label>
          <Input type="email" name="email" id="email" placeholder="email" defaultValue="admin@example.com" required onChange={(e) => setEmail(e.target.value)} />
          <Label>Password:</Label>
          <Input type="password" name="password" id="password" placeholder="password" defaultValue="example" required onChange={(e) => setPassword(e.target.value)} />
          <ButtonGreen type="submit" name="submit" id="submit">Login</ButtonGreen>
          <P>*Just click "Login" to start.</P>
        </Form>
      </Subcontainer>
    </Container>
  );
};

export default Login