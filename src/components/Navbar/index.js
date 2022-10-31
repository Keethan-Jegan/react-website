import React from 'react';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/donor" activeStyle>
            Donor
          </NavLink>
          <NavLink to="/donation" activeStyle>
            Donation
          </NavLink>
          <NavLink to="/campaign" activeStyle>
            Campaign
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;