import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import './user.css'

export default class Register extends Component {
    state = {}
    registerHandler = () => {
        if (this.state.password == this.state.confirmPassword)
            this.props.register(this.state);
        else alert("Passwords do not match!")

    }
    changeHandler = (e) => {
        let temp = { ...this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(temp);
    }

    render() {
        return (
            <div className="LoginCont">
              
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstName" type="text" placeholder="John"
                            required="" oninvalid="this.setCustomValidity('Please fill out the field')"
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastName" type="text" placeholder="Smith" required
                            oninvalid="this.setCustomValidity('Please fill out the field')"
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="emailAddress" type="email" placeholder="Johnsmith@example.com"
                            required="" oninvalid="this.setCustomValidity('please enter a valid email address')"
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="******" required
                            oninvalid="this.setCustomValidity('Please fill out the field')"
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="******" required
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Phone Number </Form.Label>
                        <Form.Control name="phoneNumber" type="tel" placeholder="0523456789" required
                            oninvalid="this.setCustomValidity('Please fill out the field')" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    

                    <Form.Group>
                        <Form.Label>Profile Photo</Form.Label>
                        <Form.Control name="userImage" type="text" placeholder="https://profilePhoto.com/"
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Control type="hidden" name="userRole" value={user}>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Label>Are you ? </Form.Label>
                    <Form.Control as="select" name="userRole" onChange={this.changeHandler} oninvalid="this.setCustomValidity('Please select a value ')">

                        <option value="">Select Role</option>
                        <option value="ROLE_owner">Pet Owner</option>
                        <option value="ROLE_adopter">Pet Adopter</option>
                   
                    </Form.Control>

                   <br />
                    <Button variant="success" type="submit" block onClick={this.registerHandler}>Register</Button>

               
            </div>
        )
    }
}