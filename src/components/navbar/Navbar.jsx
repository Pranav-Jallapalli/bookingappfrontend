import "./navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Indiabooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
          <button className="navButton" onClick={handleHome}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
