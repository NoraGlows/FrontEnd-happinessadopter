import React, { Component } from 'react'
import axios from 'axios';
import AddAnnouncement from './AddAnnouncement';
import EditAnnouncement from './EditAnnouncement';
import "./Ann.css"
import Footer from '../Footer';
import Header from '../Header';
import AnnIndex from './AnnIndex';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Ann extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
            isEdit: false,
            clickedOwnerId: '',
            viewDetails: false,
            clickedAnn: {},
            addView : false
        }
    }
    componentDidMount() {
        this.loadAnnouncement();
    }

    loadAnnouncement = () => {
        axios.get("/happinessadopter/announcement/index")
            .then(response => {
                console.log(response)
                this.setState({
                    announcements: response.data
                })
            })
            .catch(error => {
                console.log("Error retreiving Announcement !!");
                console.log(error);
            })
    }

    AddAnn = (announcement) => {
        axios.post("/happinessadopter/announcement/add", announcement,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                console.log("Added!!")

                this.loadAnnouncement();
            })
            .catch(error => {
                console.log("Error Adding Announcement");
                console.log(error)
            })
    }
    deleteAnnouncement = (id) => {
        axios.delete(`/happinessadopter/announcement/delete?id=${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Deleted!")
                this.loadAnnouncement();
            })
            .catch(error => {
                console.log("Error Deleting Announcement!")
                console.log(error)
            })
    }
    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedAnnouncementId: id
        })
    }

    editAnnouncement = (announcement) => {
        axios.put("/happinessadopter/announcement/edit", announcement, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Edited!!")
                console.log(response);
                this.loadAnnouncement();
            })
            .catch(error => {
                console.log("Error Editing Announcement");
                console.log(error)
            })
    }
    addView=()=>{
        this.setState({addView: ! this.state.addView})

    }
    render() {
        return (
            <div className="main">
               
                <div>
                    <Router>
                        <nav>
                         <Link onClick={this.addView}


                         to="/announcement/AddAnnouncement">Add Announcement </Link> {'     '}
                        </nav>
                        <Route path="/announcement/AddAnnouncement" component={() => this.state.addView? <AddAnnouncement addAnn = {this.AddAnn}  />:null}></Route>

                    </Router>
                </div>
                {!this.state.addView ?

                <div>
                   
                    <h1>Brows Announcements</h1>
                    
                    {this.state.announcements.map((ann, index) =>
                    <div>
                        <AnnIndex {...ann} key={index} deleteAnn={this.deleteAnnouncement} editView={this.editView} />
                        {(this.state.isEdit && this.state.clickedAnnouncementId === ann.id) ? <EditAnnouncement ann={ann} editAnnouncement={this.editAnnouncement}/> : null}
</div>
                    )}
                    
                </div>:null}
                
                
                <Footer />
            </div >
        )
    }
}