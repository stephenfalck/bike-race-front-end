import React  from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './gallery.css';
//import { func } from '../../../../../../Library/Caches/typescript/3.3/node_modules/@types/prop-types';

class Gallery extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoading: false,
            photos: []
        }
    }

    componentDidMount() {
        this.getPhotos();
        //window.addEventListener('scroll', this.handleScroll);
        //return () => window.removeEventListener('scroll', this.handleScroll); 
        
    }

    /*componentDidUpdate() {
        if (!this.state.isLoading) return;
        this.getPhotos();
    }*/

    getPhotos() {
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=da5fa78acd55e27f8f6fbf03176f8790&tags=bikerace%2C+boulderbiketour&per_page=40&format=json&nojsoncallback=1', {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(
            (data) => {
                this.setState((prevState) => {
                    //photos: data
                    //photos: data.photos.photo
                    prevState.photos = data.photos.photo;
                    return {photos: prevState.photos, isLoading: false}
                    
                });
                //console.log(data);
            },
            (error) => {
                this.setState({
                    error
                })

            }
        )
    }


    /*handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        this.setState({
            isLoading: true
        })
    }*/

    render() {
        let {photos} = this.state
        console.log(photos)
        
        
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="text-center">
                        <h1>Gallery</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                {photos.map(photo => (
                    <MDBCol size="12" sm="6" lg="4" key={photo.id} className="gallery-photos">
                        <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                        className="img-fluid" alt="" />
                    </MDBCol>
                    ))
                }
                </MDBRow>
            </MDBContainer>
        )
    }

}

export default Gallery;