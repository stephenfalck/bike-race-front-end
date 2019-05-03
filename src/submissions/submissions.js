import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import './submissions.css';
import PageHeader from '../page_header/page_header';
import Footer from '../footer/footer';

const RESET_VALUES = {first_name: '', last_name: '', email: '', slogan: ''};

class Submissions extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            message: Object.assign({}, RESET_VALUES),
            length: 0,
            response: {}
        };
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.characterCount(target);

        this.setState((prevState) => {
            prevState.message[name] = value;
            //console.log(this.state.message[name])

            return {message: prevState.message, length: value.length}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.className += " was-validated";

        let url = '/submissions';
        //let url = 'https://ancient-cove-95094.herokuapp.com/submissions'
        let data = this.state.message;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            this.setState({
                response: response
            })

            if (response.status !== 201) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
    
            response.json().then((submission) => {
                console.log("Success", JSON.stringify(submission));
              });
              this.checkResponseStatus();
        })
        .catch(error => console.error('Error:', error));        
       
    }

    checkResponseStatus = () => {
        if (this.state.response.status === 201) {
            const success = document.createElement('h3');
            success.id ="success-message"
            success.innerHTML = "Thank you for your entry!"
            document.getElementById('form-container').replaceChild(success, document.getElementById('submit-form'))
        }
    }

    characterCount = (target) => {
        if ((target.value.length > 50) && (target.name === 'slogan')) {
            document.getElementById('character-count').className = "invalid-input";
        } else if ((target.value.length < 1) && (target.name === 'slogan')) {
            document.getElementById('character-count').className = "";
        } else if ((target.value.length) && (target.name === 'slogan')) {
            document.getElementById('character-count').className = "valid-input";
        }
    }

    render() {
        return (
            <div id="submissions-page">
            <PageHeader title="Submissions" />
            <MDBContainer id="form-container">
                <MDBRow id="submit-form">
                    <MDBCol>
                        <form 
                            onSubmit={this.handleSubmit}  
                            noValidate 
                        >
                            <div className="grey-text">
                                <MDBInput
                                    label="First name"
                                    icon="user"
                                    group
                                    type="text"
                                    required
                                    error="wrong"
                                    success="right"
                                    name="first_name"
                                    onChange={this.handleChange}
                                >
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please provide a first name.</div>
                                </MDBInput>
                                <MDBInput
                                    label="Last name"
                                    icon="user"
                                    group
                                    type="text"
                                    required
                                    error="wrong"
                                    success="right"
                                    name="last_name"
                                    onChange={this.handleChange}
                                >
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please provide a last name.</div>
                                </MDBInput>
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    required
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    onChange={this.handleChange}
                                >
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please provide a valid email address.</div>
                                </MDBInput>
                                <MDBInput
                                    type="textarea"
                                    rows="2"
                                    label="Slogan (50 characters max)"
                                    icon="pencil-alt"
                                    name="slogan"
                                    maxLength="50"
                                    required
                                    onChange={this.handleChange}
                                >
                                <div id="character-count">Characters: {this.state.message.slogan.length}</div>
                                <div className="invalid-feedback">Please provide a slogan.</div>
                                </MDBInput>
                            </div>
                            
                            <div className="text-center">
                            <MDBBtn
                                color="light-blue"
                                className="mb-3"
                                type="submit"
                            >
                                Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
            </div>
        )
    };

}

export default Submissions;