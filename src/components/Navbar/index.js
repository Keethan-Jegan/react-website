import React from 'react';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About-Donation
          </NavLink>
          <NavLink to="/donor" activeStyle>
            Blood-Donor
          </NavLink>
          <NavLink to="/donation" activeStyle>
            Blood-Donation
          </NavLink>
          <NavLink to="/campaign" activeStyle>
            Donation-Campaign
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;