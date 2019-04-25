import React  from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PageHeader from './page_header'
import './gallery.css';
import Image from './gallery_image'
//import { func } from '../../../../../../Library/Caches/typescript/3.3/node_modules/@types/prop-types';

class Gallery extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoading: true,
            page: 0,
            photos: []
        }
    }

    componentDidMount() {
        this.getPhotos();
        window.addEventListener('scroll', this.handleScroll);
        return () => window.removeEventListener('scroll', this.handleScroll); 
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        if (!this.state.isLoading) return;
        this.getPhotos();
        //console.log(this.state.isLoading)
    }

    getPhotos() {
        //const apiKey = da5fa78acd55e27f8f6fbf03176f8790;
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=da5fa78acd55e27f8f6fbf03176f8790&tags=bikerace%2C+boulderbiketour&per_page=40&page=${(this.state.page) + 1}&format=json&nojsoncallback=1`

        fetch(url, {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(
            (data) => {
                this.setState((prevState) => {

                    let arr = prevState.photos.concat(data.photos.photo)
                    let filtered = this.unique(arr)

                    prevState.page = data.photos.page;
                    return {photos: filtered, page: prevState.page, isLoading: false}
                });
            },
            (error) => {
                this.setState({
                    error
                })

            }
        )
    }

    unique = (data) => {
       return Array.from(new Set(data.map(i => i.id)))
                .map(id => {
                    return data.find(i => i.id === id)
                })
     }

    handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        //console.log('fetch more pics')
        this.setState({
            isLoading: true
        })
        //console.log(this.state.isLoading)
    }

    handleLoading = () => {
        if (this.state.isLoading) {
            return (<div className="spinner-border text-primary m-4" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>)
        }
    }

    render() {
        let {photos} = this.state
        //console.log(photos)
        
        return (
            <div id="gallery-page">
                <PageHeader title="Gallery"></PageHeader>
                    <MDBContainer>
                        <MDBRow className="justify-content-center">
                        {photos.map(photo => (
                            <MDBCol size="12" sm="6" lg="4" key={photo.id} className="gallery-photos mb-3">
                                <Image photo={photo} />
                            </MDBCol>
                            ))
                        }
                        </MDBRow>
                        <div id="loading">{this.handleLoading()}</div>
                    </MDBContainer>
            </div>
        )
    }

}

export default Gallery;