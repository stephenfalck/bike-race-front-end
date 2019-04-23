import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import RidersMapContainer from './riders_map_container'


class Location extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            riders: [],
            modal: false
        }
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
                //console.log(data)
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
        let {riders} = this.state
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                    <h1 className="text-center">Location</h1>
                    </MDBCol>
                </MDBRow>
                <RidersMapContainer riders={riders}></RidersMapContainer>
            </MDBContainer> 
        )
    }

}

export default Location;