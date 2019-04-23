import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RiderMarker from './rider_marker';

const RidersMap = withScriptjs(withGoogleMap((props) => {
    

    const markers = props.riders.map( rider => 
        <RiderMarker
        key={rider.id}
        firstName={rider.first_name}
        lastName={rider.last_name}
        city={rider.city_of_origin}
        state={rider.state_of_origin}
        location={{ lat: rider.latitude, lng: rider.longitude }}
        />);

    return (
        <GoogleMap
            defaultZoom={12}
            center={ { lat: 40.01, lng: -105.265 } }
        >
            {markers}
        </GoogleMap>
    )
}))

export default RidersMap;