import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, 
    MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, 
    } from "mdbreact";
import './navbar.css'

    class Navbar extends Component {
        constructor(props){
            super(props);
        
            this.state = {
              isTop: true,
              isOpen: false

            };
          }
        
          componentDidMount() {
            document.addEventListener('scroll', () => {
              const isTop = window.scrollY < 56;
              
              if (isTop !== this.state.isTop) {
                this.setState({isTop})
              }
            })
          }

          handleScroll = () => {
            return this.state.isTop ? "not-scrolled" : "scrolled"
          }

        

          toggleCollapse = () => {
            this.setState({ isOpen: !this.state.isOpen });
          }

          render() {
              return (
                <MDBNavbar color="transparent" dark expand="md" className={"fixed-top " + this.handleScroll()}>
                    <MDBContainer>
                    <MDBNavbarBrand>
                        {/*<MDBIcon icon="bicycle" size="1x" />*/}
                        <strong className="white-text">Boulder Bike Tour</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav className="pr-1"right>

                            <MDBNavItem active>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/location">Location</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/riders">Riders</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/submissions">Submissions</MDBNavLink>
                            </MDBNavItem>                       
                            
                        </MDBNavbarNav>
                    </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
              );
          }

    }

    export default Navbar;