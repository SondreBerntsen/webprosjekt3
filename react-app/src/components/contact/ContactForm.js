import React, { Component } from "react";
import "../../styles/contact.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="col-5 contactForm">
        <section className="container">
          <div className="row">
            <div className="col-lg-5 mb-4">
              <div className="card contactFormContainer border-muted rounded-0">
                <div className="card-header p-0">
                  <div className="bg-muted text-dark text-center py-2">
                    <h3>
                      <i className="fa fa-envelope" /> Skriv til oss
                    </h3>
                    <p className="form-descr m-2">
                      Vi svarer på eposter så raskt vi kan, og om du trenger
                      svar på noe med en gang ikke nøl med å ringe oss!
                    </p>
                    <p className="small-text text-muted">
                      Fyll inn formen under for å sende oss en epost.
                    </p>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="form-group">
                    <label>Ditt navn</label>
                    <div className="input-group">
                      <div className="input-group-addon bg-light">
                        <i className="fa fa-user text-dark" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupName"
                        placeholder="Navn"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Din email</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <div className="input-group-addon bg-light">
                        <i className="fa fa-envelope text-dark" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupEmail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Emne</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <div className="input-group-addon bg-light">
                        <i className="fa fa-tag prefix text-dark" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupSubject"
                        placeholder="Emne"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Melding</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <div className="input-group-addon bg-light">
                        <i className="fa fa-pencil text-dark" />
                      </div>
                      <textarea className="form-control" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-grey btn-block text-dark rounded-0 py-2">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactForm;