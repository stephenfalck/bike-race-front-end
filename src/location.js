import React from 'react';
import { MDBContainer} from 'mdbreact';
import RidersMapContainer from './riders_map_container'
import PageHeader from './page_header';
import Footer from './footer'
import './location.css'


class Location extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            riders: [],
            modal: false
        }
    }
       
    componentDidMount() {
        this.getRiders()
    }

    getRiders() {
        fetch('/riders')
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    riders: data
                });
                //console.log(data)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        let {riders} = this.state
        return (
            <div id="location-page">
                <PageHeader title="Location" />
                    <MDBContainer id="location-container">
                        <RidersMapContainer riders={riders}></RidersMapContainer>
                    </MDBContainer> 
                <Footer />
            </div>
        )
    }

}

export default Location;