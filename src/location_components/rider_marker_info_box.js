import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import InfoWindowBody from './info_window_body'

class RiderMarker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleOpen = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <Marker
                position={{ lat: this.props.rider.latitude, lng: this.props.rider.longitude }}
                onClick={() => this.toggleOpen()}
                >

                {
                    this.state.isOpen &&
                <InfoWindow onCloseClick={this.toggleOpen}>
                    <InfoWindowBody rider={this.props.rider}></InfoWindowBody>
                </InfoWindow>
                }
            </Marker>
        )
    }

}

export default RiderMarker;