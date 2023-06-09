import Group from "../images/Group 8.png";
import { Link } from "react-router-dom";
import {
  Heading,
  Center,
  Text,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AppContext } from "../context/ContextUse";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LogIn() {
  const value = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [submitEmail, setSubmitEmail] = useState(true);
  const [submitPass, setSubmitPass] = useState(true);
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [wrongCredencials, setWrongCredencials] = useState(true);


  const navigateHome = useNavigate();

  function fetchData() {
    fetch(`https://mock-api-templete-downhill.onrender.com/login`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkCredencials() {
    let flag = false;
    let userName = ""
    data.map((e) => {
      if (e.email == email && e.password == password) {
        userName= e.name
        flag = true;
      }
    });

    if (flag == true) {
      value.loginHandle(userName);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successfull',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigateHome("/"); 
      }, 1500);
      
    } 
    else {
      setWrongCredencials(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ width: "50%", height: "100%" }}>
        <Link to="/">
          <img
            src={Group}
            alt=""
            style={{
              width: "120px",
              position: "fixed",
              zIndex: "11",
              margin: "20px 0px 0px 45px",
            }}
          />
        </Link>

        <Center>
          <Heading
            position="fixed"
            zIndex="11"
            fontSize="50px"
            fontWeight="normal"
            m="1100px 0px 0px 0px"
            color="#fff"
          >
            Welcome to <span style={{ color: "#FFC42D" }}>Downhill</span>
          </Heading>
        </Center>

        <div style={{ width: "100%", height: "100%", background: "black" }}>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: "60%",
            }}
            src="https://images.unsplash.com/photo-1547442991-a51706bf3a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
            alt="image"
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
        <div style={{ margin: "auto", width: "500px" }}>
          <Center>
            <Heading fontWeight="medium" margin="0px 0px 50px 0px">
              Log <span style={{ color: "#FFC42D" }}>in</span>
            </Heading>
          </Center>

          {
            wrongCredencials?<Text m="0px 0px 30px 0px" fontSize="18px" fontWeight="medium">
            Login to your Account
          </Text> :<Text m="0px 0px 30px 0px" fontSize="18px" color="red" fontWeight="medium">
          Wrong credentials! Please enter valid credentials
          </Text>
          }
          

          <Text marginBottom="6px">Enter your E-mail</Text>
          <Input
            placeholder="example@gmail.com"
            type="email"
            fontSize="18px"
            width="500px"
            border= {submitEmail? "2px solid #dedede": "2px solid red"}
            height="50px"
            borderRadius="none"
            m="0px 0px 20px 0px"
            onChange={(e) => {
              setEmail(e.target.value);
            }}

          />

          <Text marginBottom="6px">Enter your Password</Text>
          <Input
            placeholder="Enter your password"
            fontSize="18px"
            type="password"
            width="500px"
            border= {submitPass? "2px solid #dedede": "2px solid red"}
            height="50px"
            borderRadius="none"
            m="0px 0px 50px 0px"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            colorScheme="yellow"
            borderRadius="none"
            w="500px"
            h="50px"
            m="auto"
            diplay="block"
            fontSize="20px"
            onClick={() => {
              checkCredencials();

              if(email==""){
                setSubmitEmail(false)
              }
              if(password==""){
                setSubmitPass(false)
              }
            }}
          >
            Log in
          </Button>

          <Text m="50px 0px 0px 0px">
            If you dont have an account you can{" "}
            <Link to="/register">
              <span style={{ color: "#FFC42D", fontWeight: "bold" }}>
                Register here
              </span>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
