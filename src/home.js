import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
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
                <div className='main-background'>
                    <div className="main-overlay">
                        <MDBContainer className="main-body">
                            <MDBRow className="main-content">
                                <MDBCol size="12" sm="6" className="order-last countdown">
                                    <MDBRow>
                                        <MDBCol size="12">
                                        <h1 className="font-weight-bold" id="month-unit">{this.state.months}</h1>
                                        <h1 id="countdown-month-header">Months</h1>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="3"><h2 className="units">{this.state.days}</h2><p>Days</p></MDBCol>
                                        <MDBCol size="3"><h2 className="units">{this.state.hours}</h2> <p>Hours</p></MDBCol> 
                                        <MDBCol size="3"><h2 className="units">{this.state.minutes}</h2> <p>Minutes</p></MDBCol> 
                                        <MDBCol size="3"><h2 className="units">{this.state.seconds}</h2> <p>Seconds</p></MDBCol> 
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol size="12" sm="6" className="order-md-last">
                                    <h1 className="font-weight-bold">Boulder Bike Tour</h1>
                                    <h3>1st April 2020</h3>
                                    <MDBRow>
                                        <MDBCol size="12">
                                        The Boulder Bike Tour is a multiple stage bicycle race
                                        held in Colorado, at the foot of the Rocky Mountains. The race will start on April 1st 2020 and like the other Grand 
                                        Tours (the Giro d'Italia and the Vuelta a España), it consists of 21 day-long stages over the 
                                        course of 23 days.
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                                <MDBRow className="social-links">
                                    <MDBCol size="12" className="">
                                        <MDBIcon className="m-4" size="2x" fab icon="facebook-square" />
                                        <MDBIcon className="m-4" size="2x" fab icon="instagram" />
                                        <MDBIcon className="m-4" size="2x" fab icon="twitter-square" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
        )
    }

}

export default Home;