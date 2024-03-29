import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Header from './Header';
import {Card} from 'react-bootstrap'

const divStyle = {
  paddingBottom:'80px',
  backgroundImage: "url(/bg-8.jpg)",
  backgroundSize: "cover",
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            client: '',
            loginres:'',
            id:'',
            password:'',
            choice:'client'
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
          this.props.login(username, password);
        }
    }

    loginUser = (e) => {
        e.preventDefault();
        sessionStorage.setItem('role',this.state.choice)
        if (this.state.choice === 'client') {
          LoginService.loginUser(this.state.id, this.state.password, 1).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
             //this.props.history.push("/homepage-client");
             sessionStorage.setItem('id',this.state.id);
             
            this.props.history.push(`/homepage-client/${this.state.id}`);
            } else {
                
              alert(this.state.loginres);
               window.location.reload(false);
            }
          });//.catch(console.log(this.state.loginres));
        }
        if (this.state.choice === 'engineer') {
          LoginService.loginUser(this.state.id, this.state.password, 2).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
              this.props.history.push(`/homepage-engineer/${this.state.id}`);
              sessionStorage.setItem('id',this.state.id);
            } else {
              alert(this.state.loginres);
              window.location.reload(false);
            }
          });
        }
    
        if (this.state.choice === 'admin') {
          LoginService.loginUser(this.state.id, this.state.password, 3).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
              sessionStorage.setItem('id',this.state.id);
              console.log(this.state.loginres);
              this.props.history.push(`/homepage-admin/${this.state.id}`);
            } else {
              alert(this.state.loginres);
              window.location.reload(false);
            }
            console.log(this.state.loginres);
          });
        }
        
      }

      register = (event) => {
        event.preventDefault();
        if (this.state.choice === 'client') {
          this.props.history.push('/registerClient');
        }
        
      };
    
      changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
      };
    
      changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
      };
      changeChoiceHandler = (event) => {
        this.setState({ choice: event.target.value });
      };


    render() { 
        return ( 
            <div className="pt-5" style={divStyle}>
              <Header />
              <div className="container pt-5 mt-3">
          <div className="row ">
            <Card border="primary" style={{ backgroundColor: 'white', opacity: 0.8 }} className="card col-md-6 mx-auto text-dark">
              <h2 className="text-center font-weight-bold">Login</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form" >
                  <div className="form-group">
                    <label className="font-weight-bold">Login/Register as a&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="users" value={this.state.choice} onChange={this.changeChoiceHandler}>
                      <option value="client">Client</option>
                      <option value="engineer">Engineer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Id</label>
                    <input type="text" placeholder="Id" className="form-control" name="id" value={this.state.id} onChange={this.changeIdHandler}/>
                    <p id="validation"></p>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" placeholder="Password" className="form-control" minlength="5" title="Password should be minimum 8 characters" name="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                  </div>

                  <div className="">
                    <button className="btn btn-outline-primary btn btn-lg btn-block" type="submit" onClick={this.loginUser}>
                      Login
                    </button>
                  </div>
                  <div className="">
                    <Link to="/forgotPassword" className="btn btn-link  ">
                      Forgot Password ?
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-primary">
                      Not a Member?&nbsp;&nbsp;
                      <button className="btn btn-outline-success" onClick={this.register}>
                        Register
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
            </div>
         );
    }
}
 
export default LoginPage;