{/*

    <Route exact path="/pet/PetIndex" component={() => <PetIndex id={this.state.profileInfo} />}></Route>

       <div>
          
  <div>
        {!this.state.isEdit ? (
          <AddPet addPet={this.addPet} user={this.props.profileInfo}/>
        ) : <EditPet editPet={this.editPet} pet={this.state.clickedPet} />} 
        </div>
      
                {this.state.profileInfo.firstName}
                {this.state.profileInfo.lastName}
                {this.state.profileInfo.emailAddress}
               {this.state.profileInfo.phoneNumber}


                {this.state.profileInfo.userRole == "ROLE_owner"? <p>Owner</p>: <p>Adopter</p>}
               


            </div>

            

            {message} {successMessage}
            {isAuth ? (
              <div>
                {this.state.user ? "Hello Sweetie ❤️ " + this.state.user.sub : null} {"  "}
                <Link to="/logout" onClick={this.onLogoutHandler}> Logout</Link>{" "}
              </div>
            ) : (
                <div>
                  <Link to="/register">Register</Link> {"  "}
                  <Link to="/login">Login</Link> {"  "}

                </div>
              )}




               <Link to="/announcement/AddAnnouncement">
                    <Button renderAs="button">
                        <span>Add Announcement</span>
                    </Button>
                </Link>



                AddAnnouncement = (announcement) => {
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
            */}

            

  
   
 