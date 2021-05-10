import React, { Component } from "react";
import AdminService from "../services/AdminService";
import Navigation from "./Navigation";
import { Card, CardDeck, Form } from "react-bootstrap";
import ComplaintService from "../services/ComplaintService";

const divStyle = {
  paddingBottom:'80px',
  backgroundImage: "url(/bg-12.jpg)",
  backgroundSize: "contain",
  backgroundAttached: "fixed"
};

const cardStyle={ opacity: 0.8, fontWeight: "bold", fontSize: 18, backgroundColor:'black', color:'white'}

class HomePageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem("id"),
      admin: "",
      complaints:[],
      openc:[],
      prods:[]
    };
    this.componentDidMount=this.componentDidMount.bind(this);
    console.log("constructor")
    
  }

  componentDidMount() {
    console.log("didMount")
    AdminService.getAdmin(this.state.id).then((res) => {
      let admin = res.data;
      sessionStorage.setItem("phone", admin.contactNumber);
      sessionStorage.setItem("name", `Admin ${this.state.id}`);
      sessionStorage.setItem("email", admin.emailId);
    });
    AdminService.getComplaints().then((res) => {
      this.setState({complaints:res.data});
    });
    AdminService.getOpenComplaints().then((res) => {
      this.setState({openc:res.data});
    });
    AdminService.getProducts().then((res) => {
      this.setState({prods:res.data});
    });
  }
  buttonHandler(complaintId){
    AdminService.changeEngineer(complaintId).then((res) =>{
      alert("Engineer replaced Successfully");
    })
    window.location.reload(false)
  }

  logout = (e) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      
      <div style={divStyle}> 
        <Navigation />
        
          <Form.Row className="d-flex bd-highlight example-parent mt-4">
            <CardDeck className="mx-auto">
               
              <Card style={cardStyle} border="danger" className="p-2 flex-fill bd-highlight col-example">
                <Card.Body>
                  <Card.Title className="text-center">
                  <p  style={{fontSize:25,  fontWeight: 'bold'}}>&nbsp;Total Complaints</p><p className="mt-2" style={{fontSize:80, color: 'red'}}>{this.state.complaints.length}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
               
              <Card style={cardStyle} border="warning" className="p-2 flex-fill bd-highlight col-example">
                <Card.Body>
                  <Card.Title className="text-center">
                  <p  style={{fontSize:25,  fontWeight: 'bold'}}>&nbsp;Open Complaints&nbsp;</p><p className="mt-2" style={{fontSize:80, color: '#edd900'}}>{this.state.openc.length}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
               
              <Card style={cardStyle} border="success" className="p-2 flex-fill bd-highlight col-example">
                <Card.Body>
                  <Card.Title className="text-center">
                  <p  style={{fontSize:25,  fontWeight: 'bold'}}>Closed Complaints</p><p className="mt-2" style={{fontSize:80, color: 'green'}}>{this.state.complaints.length-this.state.openc.length}</p>
                    </Card.Title>
                </Card.Body>
              </Card>
               
              <Card style={cardStyle} border="primary" className="p-2 flex-fill bd-highlight col-example">
                <Card.Body>
                  <Card.Title className="text-center">
                  <p  style={{fontSize:25,  fontWeight: 'bold'}}>&nbsp;&nbsp;&nbsp;Total Products&nbsp;&nbsp;</p> <p className="mt-2" style={{fontSize:80, color: 'blue'}}>{this.state.prods.length}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Form.Row>
          <Form.Row>
            <CardDeck className="mx-auto pt-3">
              <a href="/addEngineer"><button className="btn btn-dark mx-2"><Card className="bg-dark px-auto border-0">
              <Card.Body><Card.Title>
              <p  style={{fontSize:20, color: ' white', fontWeight: 'bold'}}>Manage Engineers</p></Card.Title></Card.Body>
              </Card></button></a>
              <a href="/addProduct"><button className="btn btn-dark mx-2"><Card className="bg-dark px-auto  border-0">
              <Card.Body><Card.Title>
              <p  style={{fontSize:20, color: ' white', fontWeight: 'bold'}}>Manage Products</p></Card.Title></Card.Body>
              </Card></button></a>
              <a href="/addProduct"><button className="btn btn-dark mx-2"><Card className="bg-dark px-auto  border-0">
              <Card.Body><Card.Title>
              <p  style={{fontSize:20, color: ' white', fontWeight: 'bold'}}>Manage Products</p></Card.Title></Card.Body>
              </Card></button></a>
            </CardDeck>
          </Form.Row>

          <div style={{ opacity: 0.9, fontWeight: "bold", fontSize: 18, backgroundColor:'black', color:'white'}} className="card col-md-12 mx-auto my-4">
            <h2 className="text- black text-center py-2">Complaints Registered</h2>
          </div>
          <div className="container-fluid">
          <table className="table table-hover table-primary table-bordered ml-2 mr-5">
              <thead>
                <tr>
                  <th>complaint_id</th>
                  <th>Complaintname</th>
                  <th>Status</th>
                  <th>Engineerid</th>
                  <th>Clientid</th>
                  <th>Model number</th>
                  <th>Change Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.complaints.map((c) => (
                  <tr key={c.complaintId}>
                    <td> {c.complaintId} </td>
                    <td> {c.complaintName}</td>
                    <td> {c.status} </td>
                    <td> {c.engineerId}</td>
                    <td> {c.clientId}</td>
                    <td> {c.modelNumber}</td>
                    <td>
                      {c.status === "Open" ? (
                        <button
                          className="btn btn-danger px-3"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                        >
                          {" "}
                          &nbsp;Replace Engineer{" "}
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                          disabled
                        >
                          Complaint Closed
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default HomePageAdmin;
