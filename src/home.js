import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import './home.css'

class Home extends React.Component {

    render() {
        return (
           
                <div className='main-background'>
                    <div className="main-overlay">
                        <MDBContainer className="main-body">
                            
                            <MDBRow className="main-content">
                                
                                <MDBCol size="12" sm="6" className="order-last countdown">
                                    <h1>Days</h1>
                                    <MDBRow>
                                        <MDBCol size="12">Hours Minutes Seconds</MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                
                                <MDBCol size="12" sm="6" className="order-md-last">
                                    <h1>Boulder Bike Tour</h1>
                                    <h3>All you need to know about the upcoming race</h3>
                                    <MDBRow>
                                        <MDBCol size="12">
                                        The Boulder Bike Tour is a multiple stage bicycle race
                                        held in Colorado, at the foot of the Rocky Mountains. The race will start on April 1st 2020 and like the other Grand 
                                        Tours (the Giro d'Italia and the Vuelta a España), it consists of 21 day-long stages over the 
                                        course of 23 days.
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                                <MDBRow className="social-links">
                                    <MDBCol size="12" className="">
                                        <MDBIcon className="m-4" size="2x" fab icon="facebook-square" />
                                        <MDBIcon className="m-4" size="2x" fab icon="instagram" />
                                        <MDBIcon className="m-4" size="2x" fab icon="twitter-square" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                
            
        )
    }

}

export default Home;