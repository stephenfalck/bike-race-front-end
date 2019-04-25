import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import './submissions.css';
import PageHeader from './page_header';
import Footer from './footer';

const RESET_VALUES = {first_name: '', last_name: '', email: '', slogan: ''};

class Submissions extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            message: Object.assign({}, RESET_VALUES)
        };
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.message[name] = value;
            console.log(this.state.message[name])

            return {message: prevState.message}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let url = '/submissions';
        let data = this.state.message;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

        this.setState({
            message: Object.assign({}, RESET_VALUES)
        })

    }

    render() {
        return (
            <div id="submissions-page">
            <PageHeader title="Submissions" />
            <MDBContainer>
                <MDBRow id="submit-form">
                    <MDBCol>
                        <form>
                            <div className="grey-text">
                                <MDBInput
                                    label="First name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="first_name"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Last name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="last_name"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                
                                <MDBInput
                                    type="textarea"
                                    rows="2"
                                    label="Your slogan"
                                    icon="pencil-alt"
                                    name="slogan"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="text-center">
                            <MDBBtn
                                color="light-blue"
                                className="mb-3"
                                type="submit"
                                onClick={this.handleSubmit}
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