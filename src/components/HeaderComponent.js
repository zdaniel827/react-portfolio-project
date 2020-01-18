import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faDoorOpen,
  faHome,
  faBuilding,
  faMapMarkedAlt,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    return (
      <header>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faMountain} />
                <span>
                  The Hills <br /> Apartments
                </span>
              </div>
              <Navbar sticky="top" expand="md">
                <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink className="nav-link" to="/home">
                          <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/home">
                          <FontAwesomeIcon icon={faDoorOpen} /> Floor Plans
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to="/home">
                          <FontAwesomeIcon icon={faBuilding} /> Amenities
                        </NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink className="nav-link" to="/home">
                          <FontAwesomeIcon icon={faMapMarkedAlt} /> Map
                        </NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink className="nav-link" to="/home">
                          <FontAwesomeIcon icon={faMobileAlt} /> Contact Us
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </div>
              </Navbar>
            </div>
          </div>
        </Jumbotron>
      </header>
    );
  }
}

export default Header;
