import React, { Component } from 'react'
import axios from 'axios'


export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profileInfo: {}
        }
    }

    componentDidMount() {

        axios
        .get(`/happinessadopter/user/profile?email=${localStorage.getItem("email")
    }`)
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
    }


    render() {
        return (



            <div class="container emp-profile">
                <form method="post">
              
                    <div class="row">
                    
                     
                   
                        
                    </div>
                   
                    <div class="row">
                    <div class="col-lr-4">
                    <div class="profile-img">
                        <img src={this.state.profileInfo.userImage} alt="" />
                      
                    </div>
                </div>

                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p> {this.state.profileInfo.firstName} {this.state.profileInfo.lastName}</p>
                                        </div>
                                    </div>
                                   
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.profileInfo.emailAddress}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.state.profileInfo.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Role:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p> {this.state.profileInfo.userRole == "ROLE_owner"? <p>Owner</p>: <p>Adopter</p>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
