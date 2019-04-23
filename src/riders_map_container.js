import React from "react";
import RidersMap from './riders_map'

class RidersMapContainer extends React.Component {
    
    render() {
        const apiKey = 'AIzaSyB0R2_PPL1TyWO7zyGLYhpAX7XeeTxET4A'
        
        return(
            
            <RidersMap
                riders={this.props.riders}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}   
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `470px`, width: `auto` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default RidersMapContainer;