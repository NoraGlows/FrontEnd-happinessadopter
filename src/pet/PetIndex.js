import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './PetIndex.css';
import AddPet from './AddPet';
import EditPet from './EditPet';
import Pet from './Pet';

import axios from 'axios';

export default class PetIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      isEdit: false,
      clickedPetId: "",
      viewDetails: false,
      clickedPet: {},
      isAdd: false
    };
  }
  componentDidMount() {
    axios
      .get("/happinessadopter/pet/index")
      .then((response) => {
        console.log(response);
        this.setState({ //here we will save the pet date its will be array of object
          pets: response.data,
        });
      })
      .catch((error) => {
        console.log("Error retreiving Pets !!");
        console.log(error);
      });
  }
  addPet = (pet) => {
    axios
      .post("/happinessadopter/pet/add", pet, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }

      })
      .then((response) => {
        console.log("Added!!");
        const updatedPetIndex = [...this.state.pets];
        updatedPetIndex.push(response.data);
        this.setState({
          pets: updatedPetIndex,
        });
      })
      .catch((error) => {
        console.log("Error Adding Pet");
        console.log(error);
      });
  };
  deletePet = (id) => {
    axios
      .delete("/happinessadopter/pet/delete", {
        params: { id: id }, headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log("Deleted!");
        const updatedPetIndex = [...this.state.pets];
        const index = updatedPetIndex.findIndex((x) => x.id === id);

        if (index !== -1) {
          updatedPetIndex.splice(index, 1);

          this.setState({
            pets: updatedPetIndex,
          });
        }
      })
      .catch((error) => {
        console.log("Error Deleting pet!");
        console.log(error);
      });
  };

  editView = (id) => {
    this.setState({
      isEdit: !this.state.isEdit,
      clickedPetId: id,
    });
  };

  editPet = (pet) => {
    axios
      .put("/happinessadopter/pet/edit", pet, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log("Edited!!");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Editing pet");
        console.log(error);
      });
  };

  render() {
    console.log(this.props.profileInfo)
    return (
      <div >
        <nav>
        <Button onClick={() => { this.setState({ isAdd: !this.state.isAdd }) }}
        > Add Pet</Button> </nav>
        <div className="pet-index">
        {this.state.pets.length >= 1 ? (
          <div className="container">

            {!this.state.viewDetails ?

              <div> {this.state.pets.map(pet => <div className="card">
                <div class="card-header">
                  <div> <img src={pet.petImage} alt='' />


                    <div class="card-body">
                      <span class="tag tag-teal"> <p>{pet.type} </p> </span>
                      <h4>{pet.name}</h4>
                      <p> <b>Location:</b> {pet.location} </p>
                      <Button onClick={() => { this.setState({ viewDetails: !this.state.viewDetails, clickedPet: pet }) }} >  Take a Look <span className='emoji_color'>(◕‿◕)♡</span></Button>
                    </div>
                  </div>
                </div>
              </div>
              )} </div>


              : <Pet {...this.state.clickedPet} deletePet={this.deletePet} editView={this.editView} user={this.props.profileInfo} />
            }
          </div>




        ) : null}

        <div>
          {this.state.isAdd ? (
            <AddPet addPet={this.addPet} user={this.props.profileInfo} />
          ) : null}
        </div>

        <div>
          {!this.state.isEdit ? (
            null
          ) : <EditPet editPet={this.editPet} pet={this.state.clickedPet} />}
        </div>




      </div>
</div>


    );

  }
}
