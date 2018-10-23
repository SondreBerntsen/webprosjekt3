import React, { Component } from "react";
import Navbar from "../Navbar";
import ContactPersons from "./ContactPersons.js";

class Contact extends Component {
  state = {
    contact: {
      name: "Drammen Sacred Music Festival",
      organization: "c/o DOTL",
      adress: "Solsvingen 90",
      building: "Fjell kirke",
      postAdress: "3034",
      PostAdressName: "DRAMMEN"
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
        <h1> KONTAKT</h1>
        <ContactPersons contactpersons={this.state.contactPersons} />
        <p>{contact.name}</p>
        <p>{contact.organization}</p>
        <p>{contact.adress}</p>
        <p>{contact.building}</p>
        <p>{contact.postAdress}</p>
        <p>{contact.postAdressName}</p>
      </div>
    );
  }
}

export default Contact;
