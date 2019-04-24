import React  from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './page_header.css'

class PageHeader extends React.Component {
    render() {
        return (
            <div className="page-header mb-5">
                <div className="page-header-overlay">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="text-center text-white pt-5">
                            <h1 className="pt-5">{this.props.title}</h1>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </div>
            </div>
        )
    }
}

export default PageHeader