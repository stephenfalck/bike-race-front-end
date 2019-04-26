import React  from 'react';
import image from './assets/img/46533490675_d40ef53a17.jpg';

class Image extends React.Component {
    image = () => {
        if(this.props.photo.farm !== 0 ) {
            return <img src={`https://farm${this.props.photo.farm}.staticflickr.com/${this.props.photo.server}/${this.props.photo.id}_${this.props.photo.secret}.jpg`} 
            className="img-fluid z-depth-2 gallery-photo" alt=""  />
        } else {
            return <img src={image} className="img-fluid z-depth-2 gallery-photo" alt="" />
            //return <p>hello</p>
        }
    }

    render() {
        return (
            this.image()
        )
    }
}

export default Image;
