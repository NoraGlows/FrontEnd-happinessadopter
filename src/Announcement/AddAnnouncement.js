import React, { Component } from 'react'
import './Form.css'
export default class AddAnnouncement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        newAnnouncement: {}
        }
    }
 
    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedAnnouncement = { ...this.state.newAnnouncement }
        updatedAnnouncement[attributeToChange] = newValue
        console.log(updatedAnnouncement)
        this.setState({
            newAnnouncement: updatedAnnouncement
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.AddAnn(this.state.newAnnouncement);
    }
    render() {
        
                return (
            <div className="container">

            <h3> Have you lost or found a pet add your announcement here</h3>
                <form id="contact" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            name="annouTitle"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Picture</label>
                        <input
                            name="annouPictrue"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Location</label>
                        <input
                            name="annoulocation"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            name="annouDescription"
                            type="text"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>PhoneNumber</label>
                        <input
                            name="phoneNumber"
                            type="tel"
                            onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input id="contact-submit" type="submit" value="Add Announcement"></input>
                    </div>
                </form>
                
            </div>
        )
    }
}