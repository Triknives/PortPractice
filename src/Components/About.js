import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
   
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <h2>About Us</h2>
            <img className="profile-pic"  src={profilepic} alt="Brett Cordell Profile Pic" />
         </div>
         <div className="nine columns main-col">

            <p>{bio}</p>
           
         </div>
      </div>

   </section>
    );
  }
}

export default About;
