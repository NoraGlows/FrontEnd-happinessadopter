import React, { Component } from 'react'

import twitter from './Assets/twitter.png'
import github from './Assets/github.png'
import "./Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="size">
                <h1> @CODING GHOSTS</h1>
              
              <a href="https://git.generalassemb.ly/xlightx/happinessadopter.git"><img src={github} alt ="Backend Repo" height="30" width="30"/></a>
              <a href="https://git.generalassemb.ly/xlightx/FrontEnd-happinessadopter.git"><img src={twitter} height="30" width="30"/></a>
            </div>
        )
    }
}
