import React, { useState } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  LogoGroup,
  MobileIcon,
  Nav,
  NavBrand,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
} from "./NavbarStyles";
import { data } from "../../data/NavbarData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <IconContext.Provider value={{ color: "white"}}>
      <Nav>
        <NavContainer>
         <LogoGroup>
            <NavLogo src="./assets/logo.png"></NavLogo>
            <NavBrand>Delta</NavBrand>
          </LogoGroup> 

          <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>

          <NavMenu show={show}>
            {data.map((item, index) => {
              return <Link key={index} style={{textDecoration:'none'}} to='/'><NavItem >{item.text}</NavItem></Link>;
            })}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
