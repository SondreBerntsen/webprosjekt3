import React from "react";

/*  A functional component with contactpersons 
    from props as the parameter */

const ContactList = ({ contactpersons }) => {
  /* The constant contactList iterates through the array contactpersons 
      and outputs the properties we want as a template */
  const contactList = contactpersons.map(contact => {
    return (
      <div className="container" key={contact.id}>
        <div>{contact.name}</div>
        <div>{contact.email}</div>
        <div>{contact.phoneNumber}</div>
        <div>{contact.profession}</div>
        <img src={contact.image} />
      </div>
    );
  });
  // returning the templates sequentially
  return <div className="container">{contactList}</div>;
};

export default ContactList;
