import React, { Component } from 'react'
import ClientService from '../services/ClientService.js';

import ComplaintService from '../services/ComplaintService.js';
import Navigation from './Navigation.jsx';


const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: "url(/sad-customer.png)",
    backgroundColor: "#99ccff",
    backgroundSize: 'cover',
    float: 'right'
  };

const s={
    width: '40rem',
    backgroundColor: "#99ccff",
    fontSize: 60,
    fontFamily: 'Georgia'
}

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:sessionStorage.getItem('id'),
             client:[]
        }
        this.bookComplaintHandler=this.bookComplaintHandler.bind(this)
        this.homeHandler=this.homeHandler.bind(this)
    }
    componentDidMount()
    {
        ClientService.getClient(this.state.id).then((res) =>{
            let client=res.data
            sessionStorage.setItem('address',client.address)
            sessionStorage.setItem('phone',client.phoneNumber)
            sessionStorage.setItem('name',`Client ${this.state.id}`)
            })

    }

    bookComplaintHandler=()=>{
        this.props.history.push(`/bookComplaint/`)
    }

    homeHandler=()=>{
        console.log("clicked")
        this.props.history.push(`/homepage-client/`)
    }

    myComplaintsHander=()=>{
        console.log("clicked")
        this.props.history.push(`/change-status`)
    }

    render() {
        return (
            <div style={divStyle}>
                <Navigation/>
                <div className="alert alert-secondary alert-dismissible fade show text-center" role="alert">
                    In accordance with the latest Government guidelines on <strong>COVID-19</strong>, our services will be restricted in some locations
                    <button type="button" className="close" data-dismiss="alert" aria-label="close"   >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p></p>
                <div className="card align-self-center border-0 float-left pt-3 pl-5" style={s} >
                    <p className="card-title"><b>Not Happy With The Product or Service Received?</b></p>
                    <p className="py-4"></p>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.bookComplaintHandler}>Book Complaint</button>
                </div>
            </div>
        )
    }
}

export default Home
