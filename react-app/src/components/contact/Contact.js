import React, { Component } from "react";
import Navbar from "../Navbar";
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
    contactPersons: [
      {
        id: "1",
        name: "Ivar Flaten",
        image:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/07/Ivar.png",
        profession: "Produsent og festival-gründer",
        phoneNumber: "41545849",
        email: "director@drammensacred.no"
      },
      {
        id: "2",
        name: "Reidun Svabø",
        image:
          "http://www.drammensacred.no/wp-content/uploads/2017/06/14797268_1126727614042424_159417209_n-e1497259971949.jpg",
        profession: "Styreleder og festivalkoordinator",
        phoneNumber: "93294512",
        email: "director@drammensacred.no"
      }
    ]
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
                <i className="fa fa-map-marker d-inline-block float-right float-md-none " />
                <p className="text-justify">
                  {contactAdress.name}, {contactAdress.organization},{" "}
                  {contactAdress.adress}, {contactAdress.building},{" "}
                  {contactAdress.postAdress}, {contactAdress.postAdressName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
