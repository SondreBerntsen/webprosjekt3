import React from "react";
import "../../styles/contact.css";

/*  A functional component with contactpersons 
    from props as the parameter */

const ContactList = ({ contactpersons }) => {
  /* The constant contactList iterates through the array contactpersons 
      and outputs the properties we want as a template */
  const contactList = contactpersons.map(contact => {
    return (
      <div className="contactPerson col-4 offset-2" key={contact.id}>
        <div className="card">
          <img
            className="card-img-top"
            src={contact.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p class="card-text">{contact.profession}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Mail: {contact.email}</li>
            <li className="list-group-item">Tlf.: {contact.phoneNumber}</li>
          </ul>
        </div>
      </div>
    );
  });
  // returning the templates sequentially
  return <div className="container">{contactList}</div>;
};

export default ContactList;
