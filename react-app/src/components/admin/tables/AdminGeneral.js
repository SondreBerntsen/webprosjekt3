import React, { Component } from "react";
import AdminContactPerson from "../AdminContactPerson";

class AdminGeneral extends Component {
  state = {
    home: {
      pitch: "Whatever"
    },
    about: {
      visionText: "Vår visjon er såååå kul og flink wow",
      organizationText:
        "Vi er skikkelig flinke til å organisere dritt fordi vi har masse kule folk og bla"
    },
    contact: {
      contactAddress: {
        name: "Drammen Sacred Music Festival",
        organization: "c/o DOTL",
        address: "Solsvingen 90",
        building: "Fjell kirke",
        areaCode: "3034",
        city: "DRAMMEN"
      },
      contactPersons: [
        {
          id: "1",
          name: "Ivar Flaten",
          image:
            "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/07/Ivar.png",
          profession: "Produsent og festival-gründer",
          phone: "41545849",
          email: "director@drammensacred.no"
        },
        {
          id: "2",
          name: "Reidun Svabø",
          image:
            "http://www.drammensacred.no/wp-content/uploads/2017/06/14797268_1126727614042424_159417209_n-e1497259971949.jpg",
          profession: "Styreleder og festivalkoordinator",
          phone: "93294512",
          email: "director@drammensacred.no"
        }
      ]
    }
  };
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <div>
          <div>
            <h2>Static text</h2>
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">HOME: header pitch</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#headerPitchForm"
                  aria-expanded="false"
                  aria-controls="headerPitchForm"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="headerPitchForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Pitch</label>
                    <textarea
                      className="form-control"
                      defaultValue={this.state.home.pitch}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Save
                </button>
              </form>
            </div>

            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">ABOUT: vision text</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#visionTextForm"
                  aria-expanded="false"
                  aria-controls="visionTextForm"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="visionTextForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Vision</label>
                    <textarea
                      className="form-control"
                      defaultValue={this.state.about.visionText}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Save
                </button>
              </form>
            </div>

            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">ABOUT: organization text</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#organizationTextForm"
                  aria-expanded="false"
                  aria-controls="organizationTextForm"
                >
                  Edit
                </button>
              </div>
            </div>
            <div
              className="collapse editScheduleItem"
              id="organizationTextForm"
            >
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Vision</label>
                    <textarea
                      className="form-control"
                      defaultValue={this.state.about.organizationText}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Save
                </button>
              </form>
            </div>

            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">
                  COTNACT: address information
                </span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#addressForm"
                  aria-expanded="false"
                  aria-controls="addressForm"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="addressForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Name</label>
                    <input
                      type="text"
                      defaultValue={this.state.contact.contactAddress.name}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Organization</label>
                    <input
                      type="text"
                      defaultValue={
                        this.state.contact.contactAddress.organization
                      }
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Address</label>
                    <input
                      type="text"
                      defaultValue={this.state.contact.contactAddress.address}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Building</label>
                    <input
                      type="text"
                      defaultValue={this.state.contact.contactAddress.building}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Area code</label>
                    <input
                      type="text"
                      defaultValue={this.state.contact.contactAddress.areaCode}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>City</label>
                    <input
                      type="text"
                      defaultValue={this.state.contact.contactAddress.city}
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-info btn-sm">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div>
            <h2>Contact persons</h2>
            <div>
              {this.state.contact.contactPersons.map(contact => (
                <AdminContactPerson key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminGeneral;
