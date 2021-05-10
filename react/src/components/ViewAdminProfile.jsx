import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Navigation from './Navigation'

const divStyle = {
    paddingBottom:'80px',
    backgroundImage: "url(/bg-18.jpg)",
    backgroundSize: "cover",
  }

const cardalign={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%',
  opacity: 0.9,
  backgroundColor: '#04012b',
  fontWeight: 'bold'
}
const image={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
    width:230,
    height:230
}

export class ViewAdminProfile extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Navigation/>
                
                <Card  className="my-3 pt-2" style={cardalign} border="dark" text="light" >
                    <Card.Img variant="top" src="/profile.png" style={image}/>
                    <Card.Body>
                        <Card.Title><span className="pr-4">Name: </span>{sessionStorage.getItem('name')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush text-dark" > 
                       <ListGroupItem><span className="pr-4">{sessionStorage.getItem('role')} ID:</span>{sessionStorage.getItem('id')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-4">Email ID:</span>{sessionStorage.getItem('email')}</ListGroupItem>
                       <ListGroupItem><span className="pr-4">Mobile :</span>{sessionStorage.getItem('phone')}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ViewAdminProfile
