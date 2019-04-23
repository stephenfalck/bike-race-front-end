import React from "react";

class InfoWindowBody extends React.Component {
    render() {
        return (
            <div className='text-center'>
                <h3>{this.props.rider.first_name} {this.props.rider.last_name}</h3>
                <p>{this.props.rider.city_of_origin}, {this.props.rider.state_of_origin}</p>
            </div>
        )
    }
}

export default InfoWindowBody;
