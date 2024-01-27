import './App.css';

function Navbar() {
  return (
    <>
        <Nav>
          <NavLink to="/">
            <img src="" alt=""/>
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
            <NavLink to ="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
    </>
  );
}

export default Navbar;