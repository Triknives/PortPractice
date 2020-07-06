import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">

               <h1><span>Contact and Inquiries</span></h1>

            </div>

            <div className="nine columns main-col">
                  <p className="lead">{message}</p>
                  <ul>
                     <li>Name</li>
                     <li>Best way to contact you</li>
                     <li>Project details</li>
                  </ul>

                  <h4>Contact Information</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
					   </p>
            </div>
         </div>
         <div>
      </div>
   </section>
    );
  }
}

export default Contact;
