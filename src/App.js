import React, { Component } from 'react'
import axios from "axios";
import { decode } from "jsonwebtoken";
import { Alert, NavDropdown, Nav, Navbar, Form, FormControl, Button, Container} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./user/Register";
import Profile from "./user/Profile";
import Login from "./user/Login";
import PetIndex from './pet/PetIndex';
import Ann from './Announcement/Ann';
import './App.css';
import Home from './Home';
import logo from './Assets/logo.png'


export default class App extends Component {
  state = {
    isAuth: false,
    user: null,
    message: null,
    successMessage: null,
    profileInfo: null,
  };
  componentDidMount() {
    let token = localStorage.getItem("token");

    if (token != null) { //if there is token in local storge
      let user = decode(token); // then try to  decode the token to get user's information

      if (user) {
        this.setState({
          isAuth: true,
          user: user, // if the token decoded without any problem that mean the user is authenticate
        });
        this.getProfile(user.sub)
      } else if (!user) {
        localStorage.removeItem("token"); // if the token decoded and there is a problem remove the token and change isAuth state to false
        this.setState({
          isAuth: false,
        });
      }
    }
  }


  registerHandler = (user) => {
    axios
      .post("/happinessadopter/user/registration", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  loginHandler = (user) => {
    axios
      .post("/happinessadopter/user/authenticate", user)
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        //to store token in the local storge 
        if (response.data.token != null) {
          localStorage.setItem("token", response.data.token);
          let user = decode(response.data.token);
          console.log(user.sub)
          this.setState({
            isAuth: true,
            user: user,
            successMessage: "Welcome back sweetheart 💕",
            message: null
          });
          localStorage.setItem("email", user.sub)

        } else {


          this.setState({
            isAuth: false,
            user: null,
            message: "Incorrect username or password 😼",
          });
        }
      })




      .catch((error) => {
        console.log(error);
        this.setState({
          isAuth: false,
          message: "Error Occured. Please try again later 😿",
        });
      });
  };


  onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({
      isAuth: false,
      user: null,
    });
  };


  getProfile = (email) => {

    axios
      .get(`/happinessadopter/user/profile?email=${email}`)
      .then((response) => {
        console.log(response);
        this.setState({ //here we will save the pet date its will be array of object
          profileInfo: response.data,
        });
      })
      .catch((error) => {
        console.log("Error retreiving Profile !!");
        console.log(error);
      });


  };


  render() {

    const { isAuth } = this.state; // to bring the data inside the state if the user authenticate or not 
    const message = this.state.message ? (
      <Alert variant="danger">{this.state.message}</Alert>
    ) : null;

    const successMessage = this.state.successMessage ? (
      <Alert variant="success">{this.state.successMessage}</Alert>
    ) : null;

    console.log(this.state.user)
    
    return (
      <div className="home">
        
        <Router>


       
          <Navbar className="NavBar" bg="dark" variant="dark">

        

            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="80"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Nav className="mr-auto">


              <Nav.Link as={Link}   to="/">Home</Nav.Link>
              <Nav.Link as={Link}   to="/pet/PetIndex">Pets</Nav.Link>
              <Nav.Link as={Link}   to="/announcement/Announcement">Announcement</Nav.Link>
              



            </Nav>
            <Nav inline>
              {message} {successMessage}

              {isAuth ? (
                <Nav className="NavBar">
              
                <div className="hello">
                  {this.state.user ? "Hello Sweetie ❤️ " + this.state.user.sub : null} {"  "}
                  </div>
                  <Nav.Link as={Link}   to="/user/profile">Profile</Nav.Link>
                  <Nav.Link as={Link}   to="/logout" onClick={this.onLogoutHandler}> Logout</Nav.Link>{" "}
                </Nav>
              ) : (
                  <Nav className="NavBar">
                    <Nav.Link as={Link}   to="/register">Register</Nav.Link>
                    <Nav.Link as={Link}   to="/login">Login</Nav.Link>

                  </Nav>
                )}

            </Nav>
            
          </Navbar>
       

            <div>
            <Route  exact path ="/" component={Home} ></Route>
              <Route path="/user/profile" component={() => <Profile />}></Route>

            <Route exact path="/pet/PetIndex" component={() => <PetIndex profileInfo={this.state.profileInfo} />}></Route>
              <Route exact path="/announcement/Announcement" component={Ann}></Route>
              <Route
                path="/login"
                component={() =>
                  <Login login={this.loginHandler} />}></Route>
              <Route
                path="/register"
                component={() => <Register register={this.registerHandler} />}
              ></Route>
            </div>
       



        </Router>
        


      </div>
    )
  }
}


