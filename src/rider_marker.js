import React from "react";
import { Marker } from "react-google-maps";

class RiderMarker extends React.Component {


    render() {
        
        return(
            <Marker position={this.props.location}></Marker>
        )
    }
}

export default RiderMarker;