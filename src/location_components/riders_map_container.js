import React from "react";
import RidersMap from './riders_map'

class RidersMapContainer extends React.Component {
    
    render() {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        
        return(
            
            <RidersMap
                riders={this.props.riders}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}   
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `520px`, width: `auto` }} className="map-container p-2" />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default RidersMapContainer;