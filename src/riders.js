import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, } from "mdbreact";
import './riders.css';
import placeholder from './assets/img/placeholder-person.jpeg';
//import { isThisTypeNode } from 'typescript';

class Riders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            riders: []
        }

        //this.getRiders = this.getRiders.bind(this)
    }

  
    componentDidMount() {
        this.getRiders()
    }

    getRiders() {
        fetch('/riders')
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    riders: data
                });
                console.log(data)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }
   
    

    render() {
        let {riders} = this.state;
            //console.log(riders)
            //console.log(error)
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol>
                                <h1 className='text-center'>Riders</h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="justify-content-center">
                            {riders.map(rider => (
                                <MDBCol size="12" sm="6" lg="4" key={rider.id}>
                                    <MDBCard testimonial>
                                        <div className="card-up"></div>
                                        <div className="avatar mx-auto">
                                            <img src={placeholder} className="img-fluid" alt="placeholder silhouette"/>
                                        </div>
                                        <MDBCardBody>
                                            <h4 className="font-weight-bold mb-4">{rider.first_name} {rider.last_name}</h4>
                                            <hr />
                                            <p className="dark-grey-text mt-4">{rider.city_of_origin}, {rider.state_of_origin}</p>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            ))}
                        </MDBRow>
                        {/*<ul>
                            {riders.map(rider => (
                                <li key={rider.id}>
                                    {rider.first_name} {rider.last_name}
                                </li>
                            ))}
                            </ul>*/}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        )
    }

}

export default Riders;