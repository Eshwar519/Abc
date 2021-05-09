import React, { Component } from "react";
import AdminService from "../services/AdminService";
import Navigation from "./Navigation";
import { Card} from "react-bootstrap"

class AddEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      engineerName: "",
      domain: "",
      engineers:[]
    };
  }

  addEngineer = (event) => {
    event.preventDefault();
    let engineer = {
      password: this.state.password,
      engineerName: this.state.engineerName,
      domain: this.state.domain,
    };
    console.log(engineer);

    AdminService.addEngineer(engineer).then((res) => {
      console.log(res);
      this.setState({ updatestatus: res.data });
      if (this.state.updatestatus === true) {
        alert("Engineer added succesfully");
        window.location.reload(false);
      }
    });
  };
  cancel = (event) => {
    event.preventDefault();
    this.props.history.push("/login");
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ engineerName: event.target.value });
  };
  changeDomainHandler = (event) => {
    this.setState({ domain: event.target.value });
  };
  engineerDomainHandler =(event) =>{
    event.preventDefault()
    
  }

  render() {
    return (
      <div>
        <Navigation/>
        <br></br>
        <div className="container">
          <div className="row">
            <Card className="col-md-6 offset-md-3 offset-md-3" border="dark">
              <h3 className="text-center">Add Engineer</h3>
              <div className="card-body">
                <form onSubmit={this.addEngineer}>
                  <div className="form-group">
                    <label className="font-weight-bold"> Engineer Name: </label>
                    <input
                      placeholder="Engineer name"
                      type="text"
                      name="engineerName"
                      className="form-control"
                      title="enter engineer name"
                      value={this.state.engineerName}
                      onChange={this.changeNameHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Domain: </label>
                    <select
                      placeholder="Domain"
                      name="domain"
                      className="form-control"
                      title="enter engineer domain"
                      value={this.state.domain}
                      onChange={this.engineerDomainHandler}
                      required
                    >
                      <option value=" " selected>Select Domain</option>
                      <option value="AC">AC</option>
                      <option value="Cooler">Cooler</option>
                      <option value="FAN">FAN</option>
                      <option value="Fridge">Fridge</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Mobile">Mobile</option>
                      <option value="TV">TV</option>
                    </select>
                  </div>

                  <button className="btn btn-outline-success align-self-center" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="container-fluid bg-dark my-3">
            <h2 className="text-white text-center">Engineers Details</h2>
        </div>
        <div className="container">
        <div className="form-group">
                    <label className="font-weight-bold"> Filter Engineers By Domain: </label>
                    <select
                      placeholder="Domain"
                      name="domain"
                      className="form-control"
                      title="enter engineer domain"
                      value={this.state.domain}
                      onChange={this.changeDomainHandler}
                      required
                    >
                      <option value=" " selected>Select Domain</option>
                      <option value="AC">AC</option>
                      <option value="Cooler">Cooler</option>
                      <option value="FAN">FAN</option>
                      <option value="Fridge">Fridge</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Mobile">Mobile</option>
                      <option value="TV">TV</option>
                    </select>
                  </div>
          <table className="table table-hover table-dark">
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
                {this.state.engineers.map((engineer) => (
                  <tr key={engineer.complaintId}>
                    <td> {engineer.complaintId} </td>
                    <td> {engineer.complaintName}</td>
                    <td> {engineer.status} </td>
                    <td> {engineer.engineerId}</td>
                    <td> {engineer.clientId}</td>
                    <td> {engineer.modelNumber}</td>
                    <td>
                      {engineer.status === "Open" ? (
                        <button
                          className="btn btn-danger px-3"
                          onClick={() => this.buttonHandler(engineer.complaintId)}
                          type="submit"
                        >
                          {" "}
                          &nbsp;Replace Engineer{" "}
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => this.buttonHandler(engineer.complaintId)}
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

export default AddEngineer;