import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Navigation from './Navigation'

const divStyle = {
    paddingBottom:'80px',
    backgroundImage: "url(/bg-6.jpg)",
    backgroundSize: "cover",
  }

const cardalign={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#000117',
  width: '30%',
  fontWeight: 'bold',
  opacity: 0.8
}
const image={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
    width:230,
    height:230
}

const alignm={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}
export class ViewProfile extends Component {
    render() {
        return (
            
            <div style={divStyle}>
                <Navigation/>
                <Card className="my-3" style={cardalign} border="dark" text="dark" >
                    <Card.Img variant="top" src="/profile.png" style={image}/>
                    <Card.Body>
                        <Card.Title className="text-white"><span className="pr-4 text-white">Name: </span>{sessionStorage.getItem('name')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" > 
                       <ListGroupItem><span className="pr-4">{sessionStorage.getItem('role')} ID:</span>{sessionStorage.getItem('id')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-4">Address:</span>{sessionStorage.getItem('address')}</ListGroupItem>
                       <ListGroupItem><span className="pr-4">Mobile:&nbsp;</span> {sessionStorage.getItem('phone')}</ListGroupItem>
                       <ListGroupItem><Button href="/client-update" style={alignm}>Update Profile</Button></ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ViewProfile
