import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PetIndex from "./pet/PetIndex";
import Ann from './Announcement/Ann';
import App from './App';
import "./Header.css"
import logo from './Assets/logo.png'
export default class Header extends Component {
    render() {
        return (

            <div className="size">
<img src={logo} height="200" width="300"/>
            </div>

        )
    }
}