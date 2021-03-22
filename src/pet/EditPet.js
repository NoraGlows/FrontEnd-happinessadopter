import React, { Component } from 'react'
import './Form.css'

export default class EditPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPet: props.pet,
    };
  }

  changeHandler = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedPet = { ...this.state.newPet };
    updatedPet[attributeToChange] = newValue;
    console.log(updatedPet);
    this.setState({
      newPet: updatedPet,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.state.editPet(this.state.newPet);
  };

  render() {
    return (
      <div className="container">
        
          <form id="contact" onSubmit={this.handleSubmit}>
          <h3>Edit Your Pet</h3>
          <div>
            <label>Enter Your Pet type  </label><input type="text" name="type" onChange={this.changeHandler}>
         
          </input>
          </div>
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="enter your pet name"
              required=""
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              name="gender"
              type="text"
              placeholder="e.g Male"
              required
              onChange={this.changeHandler}
          />
          </div>
          <div>
            <label>Pet's Breed</label>
            <input
              name="family"
              type="text"
              placeholder="e.g Cobby cat "
              onChange={this.changeHandler}
           />
          </div>
          <div>
            <label>Age</label>
            <input
              name="age"
              type="text"
              placeholder="e.g 1 year"
              required
              onChange={this.changeHandler}
            />
           </div>

            <div>
              <label>Pet't Photo</label>
              <input
                name="petImage"
                type="text"
                placeholder="https://profilePhoto.com/"
                onChange={this.changeHandler}
             />
            
            </div>
          
            <div>
            <label>Location</label>
            <input
              name="location"
              type="text"
              placeholder="e.g Jeddah"
              required
              onChange={this.changeHandler}
           />
          </div>

          <div>
            <label>Description </label>
            <input
              name="describtion"
              type="text"
              placeholder=""
              required
              onChange={this.changeHandler}
            />
            </div>
           <div>
                        <input id="contact-submit" type="submit" value="Edit Pet" />
                    </div>
                </form>
        
      </div>
    );
  }
}
