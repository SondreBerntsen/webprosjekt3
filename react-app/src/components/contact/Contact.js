import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactPersons from "./ContactPersons.js";
import ContactForm from "./ContactForm.js";
import "../../styles/contact.css";

class Contact extends Component {
  state = {
    contactAdress: {
      name: "Drammen Sacred Music Festival",
      organization: "c/o DOTL",
      adress: "Solsvingen 90",
      building: "Fjell kirke",
      postAdress: "3034",
      postAdressName: "DRAMMEN"
    },
    contactPersons: []
  };
  componentDidMount() {
    this.getContactPersons();
  }
  getContactPersons = _ => {
    fetch(`http://localhost:5000/contactpersons`)
      .then(response => response.json())
      .then(response => this.setState({ contactPersons: response.data }))
      .catch(err => console.error(err));
  };
  render() {
    // console.log(this.state.contactPersons);
    // destructuring
    const { contactAdress } = this.state;

    /*  ContactPersons sends the state as props to our 
        child component "ContactPersons.js. */
    return (
      <div>
        <Navbar />
        <div className="contact row mx-0">
          <div className="container">
            <div className="contact-title col-sm-12 col-lg-7 d-inline-block">
              <h2>Ta gjerne kontakt med oss om du lurer på noe</h2>
              <hr />
            </div>
            <ContactForm />
            <ContactPersons contactpersons={this.state.contactPersons} />
          </div>
          <div className="col-sm-12 col-lg-12">
            <div className="contact-adress">
              <div className="px-3 text-dark ">
                <i className="fa fa-map-marker d-inline-block float-md-none " />
                <p>
                  {contactAdress.name}, {contactAdress.organization},{" "}
                  {contactAdress.adress}, {contactAdress.building},{" "}
                  {contactAdress.postAdress}, {contactAdress.postAdressName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
