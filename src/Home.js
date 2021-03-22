import React, { Component } from 'react'
import cat from './Assets/a.jpg'
import Footer from './Footer';
import './App.css';
export default class Home extends Component {
    render() {
        return (
            <div>
              <div className="cat">
        <img src={cat}  height="450" width="750"/>
        </div>  
        <Footer/>
            </div>
        )
    }
}
