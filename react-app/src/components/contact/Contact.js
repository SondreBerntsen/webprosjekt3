import React, { Component } from "react";
import Navbar from "../Navbar";
import ContactPersons from "./ContactPersons.js";
import "../../styles/contact.css";

class Contact extends Component {
  state = {
    contact: {
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
    console.log(this.state.contactPersons);
    // destructuring
    const { contact } = this.state;

    /*  ContactPersons sends the state as props to our 
        child component "ContactPersons.js. */
    return (
      <div>
        <Navbar />
        <div className="row">
          <ContactPersons contactpersons={this.state.contactPersons} />
        </div>
        <div className="contactInfo row">
          <div className="col-6 offset-3">
            <p>
              {contact.name},{contact.organization},{contact.adress},
              {contact.building},{contact.postAdress},{contact.postAdressName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
