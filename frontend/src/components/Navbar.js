import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo } from './Elements';

function Navbar() {
  return (
    <>
        <Nav>
          <NavLink to="/">
            <Logo src="..//img/WizardDude.png" alt=""/>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to ="/about" activeStyle>
              About
            </NavLink>
            <NavLink to ="/services" activeStyle>
              Services
            </NavLink>
            <NavLink to ="/contact-us" activeStyle>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/sign-in'>
              Sign In
            </NavBtnLink>
          </NavBtn>
        </Nav>
    </>
  );
}

export default Navbar;