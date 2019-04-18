import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './gallery.css';

class Gallery extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h1>Gallery</h1>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}

export default Gallery;