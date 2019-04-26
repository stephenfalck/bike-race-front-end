import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12" className="py-3 text-center footer-social">
                        
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="facebook-square" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="instagram" /></a>
                            <a href="https://twitter.com/?lang=en-gb" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="twitter-square" /></a>
                        
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright py-3 text-center">
                    <p className="m-0">© 2019 Copyright: Stephen Falck</p>
                </div>
            </footer>
        );
    }
}

export default Footer;