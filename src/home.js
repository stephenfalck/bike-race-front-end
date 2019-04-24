import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";
import moment from 'moment';
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: moment().unix(),
            months: null,
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        }
    }
    
    timeRemaining() {
        
        const raceTime = moment('01-04-2020 09:00:00', 'DD-MM-YYYY HH:mm:ss').unix();
        let currentTime = this.state.currentTime;
        let timeDifference = raceTime - currentTime;
        let duration = moment.duration(timeDifference * 1000, 'milliseconds')
        //console.log(duration);
        let months = moment.duration(duration).months()
        let days = moment.duration(duration).days()
        let hours = moment.duration(duration).hours()
        let minutes = moment.duration(duration).minutes()
        let seconds = moment.duration(duration).seconds()

        months = months < 10 ? '0' + months : months;
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes; 
        seconds = seconds < 10 ? '0' + seconds : seconds; 
        
        this.setState({ 
            currentTime: moment().unix(),
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
           
    }
    componentDidMount() {
        this.interval = setInterval(() => this.timeRemaining(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
                <div id="home-page">
                    <div className='header'>
                        <div className="header-overlay">
                            <MDBContainer className="header-body">
                                <MDBAnimation duration="3s" type="fadeIn">
                                    <MDBRow className="header-content">
                                        <MDBCol size="12" sm="6" className="order-last" id="countdown">
                                            <MDBRow className="">
                                                <MDBAnimation duration="3s" delay="1s" type="fadeIn">
                                                    <MDBCol size="12" id="months">
                                                    <h1 className="font-weight-bold" id="month-unit">{this.state.months}</h1>
                                                    <h1 id="countdown-month-header">Months</h1>
                                                    </MDBCol>
                                                </MDBAnimation>
                                            </MDBRow>
                                            <MDBRow className="">
                                                <MDBAnimation duration="3s" delay="1.8s" type="fadeIn">
                                                    <MDBCol size="3" id="days"><h2 className="units">{this.state.days}</h2><p>Days</p></MDBCol>
                                                </MDBAnimation>
                                                <MDBAnimation duration="3s" delay="2.6s" type="fadeIn">
                                                    <MDBCol size="3" id="hours"><h2 className="units">{this.state.hours}</h2> <p>Hours</p></MDBCol> 
                                                </MDBAnimation>
                                                <MDBAnimation duration="3s" delay="3.4s" type="fadeIn">
                                                    <MDBCol size="3" id="minutes"><h2 className="units">{this.state.minutes}</h2><p className="full-text">Minutes</p><p className="short-text">Mins</p></MDBCol> 
                                                </MDBAnimation>
                                                <MDBAnimation duration="3s" delay="4.2s" type="fadeIn">
                                                    <MDBCol size="3" id="seconds"><h2 className="units">{this.state.seconds}</h2><p className="full-text">Seconds</p><p className="short-text">Secs</p></MDBCol> 
                                                </MDBAnimation>
                                            </MDBRow>
                                        </MDBCol>
                                        
                                        <MDBCol size="12" sm="6" className="order-md-last" id="title">
                                            <MDBAnimation duration="3s" type="fadeIn">
                                                <MDBRow>
                                                    <MDBCol>
                                                        <h1 className="font-weight-bold">Boulder Bike Tour</h1>
                                                        <h3>1st April 2020</h3>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol size="12">
                                                    The Boulder Bike Tour is a multiple stage bicycle race
                                                    held in Colorado, at the foot of the Rocky Mountains. The race will start on April 1st 2020 and like the other Grand 
                                                    Tours (the Giro d'Italia and the Vuelta a España), it consists of 21 day-long stages over the 
                                                    course of 23 days.
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBAnimation>
                                        </MDBCol>   
                                    </MDBRow>
                                </MDBAnimation>
                            </MDBContainer>
                        </div>
                    </div>
                    <div className="main">
                        <MDBContainer className="h-100 text-center">
                            <MDBRow>
                                <MDBCol size='12'>
                                    <p className="pt-5">This is your one stop shop when it comes to everything you need to 
                                    know about the Boulder Bike Tour. Meet the riders with our profiles page, track them on 
                                    race day with our interactive map, and view photos from this and previous races. There 
                                    is also an opportunity to have your slogan become the official race slogan, if you head 
                                    to our submission page and send us your entry!</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="social-links">
                                <MDBCol size="12">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="facebook-square" /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="instagram" /></a>
                                    <a href="https://twitter.com/?lang=en-gb" target="_blank" rel="noopener noreferrer"><MDBIcon className="m-4" size="2x" fab icon="twitter-square" /></a>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
        )
    }

}

export default Home;