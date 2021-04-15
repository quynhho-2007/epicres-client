import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "../../../src/data/Epicres-logo.png";
import MyProfile from "../../pages/MyProfile";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <Link to="/">
          <img
            alt=""
            src={Logo}
            width="200"
            height="180"
            className="d-inline-block align-top"
          />
        </Link>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Shoppable Recipes" />
          <NavbarItem path="/cart" linkText="Cart" />
          <NavbarItem path="/signup" linkText="SignUp" />
          {token ? (
            <NavbarItem path="/myprofile" linkText=" My Profile" />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
