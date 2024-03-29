import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Navigation from './Navigation'
const cardalign={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%'
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
export class ViewEngineerProfile extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <p className="pt-2"></p>
                <Card  style={cardalign} border="dark" bg="light" text="dark" >
                    <Card.Img variant="top" src="/profile.png" style={image}/>
                    <Card.Body>
                        <Card.Title><span className="pr-5">Name: </span>{sessionStorage.getItem('name')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" > 
                       <ListGroupItem><span className="pr-4">Engineer ID:</span>{sessionStorage.getItem('id')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-5">Domain:</span>{sessionStorage.getItem('domain')}</ListGroupItem>
                       <ListGroupItem><Button style={alignm}>Update Profile</Button></ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ViewEngineerProfile
