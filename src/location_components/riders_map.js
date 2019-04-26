import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RiderMarker from './rider_marker_info_box'


const RidersMap = withScriptjs(withGoogleMap((props) => {

       const markers = props.riders.map( rider => 
            <RiderMarker rider={rider} key={rider.id} />
        );

    return(
        <GoogleMap
            defaultZoom={12}
            center={ { lat: 40.01, lng: -105.265 } }
        >
            {markers}
        </GoogleMap>
        ) 
    }
))


export default RidersMap;