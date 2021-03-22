import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import './user.css';
export default class Login extends Component {
    state = {}

    loginHandler = () => {
        this.props.login(this.state);
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
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="emailAddress" type="email" placeholder="Johnsmith@example.com" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="******" required
                            onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <Button className="button" onClick={this.loginHandler}>Login</Button>

               
            </div>
        )
    }
}
