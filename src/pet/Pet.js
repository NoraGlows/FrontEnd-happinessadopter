import React, { Component } from 'react'
import Footer from '../Footer';
import '../bodysize.css';
import '../Button.css'
export default class Pet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false,
      user: null,
      message: null,
      successMessage: null,
      profileInfo: props.user,
    };
  }


  adopted = (id) => {
    this.props.deletePet(id);
  }
  render() {
    return (
      <div>

        <div class="container">
          <div class="card">
            <div class="card-header">
              <img src={this.props.petImage} height="300" width="300" /> </div>
            <div class="card-body">
              <span class="tag tag-teal">  <h1>{this.props.name}</h1> </span>
              <p>{this.props.family}</p>
              <p>{this.props.age}</p>
              <p>{this.props.gender}</p>
              <p>{this.props.location}</p>
              <p>{this.props.describtion}</p>
              {this.state.profileInfo.userRole != "ROLE_owner" ?
                <button className="button3" onClick={() => {
                  this.adopted(this.props.id);
                }}> Adopt Me </button> : null}

              {this.state.profileInfo.id == this.props.owner.id ?
                <div>
                  <button className="button3"
                    onClick={() => {
                      this.props.deletePet(this.props.id);
                    }}
                  >
                    Delete
              </button>
                  <button className="button3"
                    onClick={() => {
                      this.props.editView(this.props.id);
                    }}
                  >
                    Edit
              </button>
                </div> : null}
              <hr />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
