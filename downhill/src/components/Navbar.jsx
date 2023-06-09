import { NavLink } from "react-router-dom";
import Group from "../images/Group 8.png";
import { color } from "framer-motion";
import "../App.css";
import { useContext } from "react";
import { AppContext } from "../context/ContextUse";
import { Text } from "@chakra-ui/react";

function Navbar() {
  const value = useContext(AppContext);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        background: "#313131",
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 45px 6px 45px",
        alignItems: "center",
        color: "#ffffff",
        width: "100%",
        opacity: "96%",
        margin: "0px",
      }}
      className="NavBar"
    >
      <NavLink to="/">
        <img src={Group} alt="logo" style={{ height: "50px" }} />
      </NavLink>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "34%",
        }}
      >
        <NavLink
          to="/products"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
            };
          }}
        >
          SURFCATES
        </NavLink>

        <NavLink
          to="/extras"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
            };
          }}
        >
          EXTRAS
        </NavLink>

        <NavLink
          to="/acessories"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
            };
          }}
        >
          CLOTHS AND ACCESSORIES
        </NavLink>

        <NavLink
          to="/sales"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
            };
          }}
        >
          SALES
        </NavLink>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          width: "25%",
        }}
      >
        {value.login ? (
          <Text fontSize={"18px"} color="#ffdd88">Hello {value.name}</Text>
        ) : (
          <NavLink
            to="/login"
            className="navLinks"
            style={({ isActive }) => {
              return {
                fontWeight: isActive && "bold",
                color: isActive && "#FFC42D",
                textDecoration: !isActive && "none",
                margin: "0px 20px 0px 20px",
              };
            }}
          >
            LOGIN
          </NavLink>
        )}

        <NavLink
          to="/wishlist"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
              margin: "0px 20px 0px 20px",
            };
          }}
        >
          WISHLIST
        </NavLink>

        <NavLink
          to="/bag"
          className="navLinks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive && "#FFC42D",
              textDecoration: !isActive && "none",
              margin: "0px 20px 0px 20px",
            };
          }}
        >
          BAGs
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
