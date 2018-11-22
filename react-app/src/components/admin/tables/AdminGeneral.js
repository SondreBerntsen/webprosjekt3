import React, { Component } from "react";
import AdminContactPerson from "../AdminContactPerson";
import AdminStaticText from "../AdminStaticText";

class AdminGeneral extends Component {
  state = {
    about: [],
    contactPersons: [],
    reports: []
  };

  componentDidMount() {
    this.getContactList();
    this.getGeneralData();
    this.getReports();
  }

  getReports = _ => {
    fetch(`http://localhost:5000/festivalreports`)
      .then(response => response.json())
      .then(response => this.setState({ reports: response.data }))
      .catch(err => console.log(err));
  };
  getGeneralData = _ => {
    fetch(`http://localhost:5000/about`)
      .then(response => response.json())
      .then(response => this.setState({ about: response.data }))
      .catch(err => console.log(err));
  };
  getContactList = _ => {
    fetch(`http://localhost:5000/contactPersons`)
      .then(response => response.json())
      .then(response => this.setState({ contactPersons: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.reports);
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <div>
          <div>
            <h2>Om oss</h2>
            {this.state.about.map(about => (
              <AdminStaticText key={about.id} about={about} />
            ))}
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Rapporter</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#reportsForm"
                  aria-expanded="false"
                  aria-controls="reportsForm"
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="reportsForm">
              <form className="row">
                <div className="col-md-3">
                  <input
                    ref="createReportTitle"
                    type="text"
                    className="form-control"
                    placeholder="Navn på rapport"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    ref="createVenueCapacity"
                    type="text"
                    className="form-control"
                    placeholder="Link til rapport"
                  />
                </div>
                <div className="col-md-3">
                  <input type="checkbox" name="vehicle1" value="Bike" checked />
                  Norsk
                  <input type="checkbox" name="vehicle2" value="Car" />
                  Engelsk
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-info btn-sm">
                    Legg til ny rapport
                  </button>
                </div>
              </form>
              <hr />
              {this.state.reports.map(report => (
                <div key={report.id}>
                  <p className="festivalReportTitle">{report.title}</p>
                  <button className="btn btn-sm btn-danger btnInElementAdmin">
                    Slett
                  </button>
                  <button
                    className="btn btn-secondary btnInElementAdmin btn-sm"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#reportForm" + report.id}
                    aria-expanded="false"
                    aria-controls={"reportForm" + report.id}
                  >
                    Rediger
                  </button>
                  <hr />

                  <div
                    className="collapse editScheduleItem"
                    id={"reportForm" + report.id}
                  >
                    <form className="row">
                      <div className="form-group col-md-12">
                        <label>Tittel</label>
                        <input
                          className="form-control"
                          defaultValue={report.title}
                        />
                        <label>Link</label>
                        <input
                          className="form-control"
                          defaultValue={report.link}
                        />
                        <input
                          type="checkbox"
                          name="vehicle1"
                          value="Bike"
                          checked
                        />
                        Norsk
                        <input type="checkbox" name="vehicle2" value="Car" />
                        Engelsk
                        <button type="submit" className="btn btn-info btn-sm">
                          Lagre
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ))}
            </div>
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">YouTube kanal</span>
              </p>

              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#YTIDForm"
                  aria-expanded="false"
                  aria-controls="YTIDForm"
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="YTIDForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>YouTube kanal (ID)</label>
                    <input
                      className="form-control"
                      defaultValue={this.state.about.channelId}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </form>
            </div>
            <h2>Samarbeidspartnere</h2>
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Lokale</span>
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
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse editScheduleItem" id="visionTextForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Visjon</label>
                    <textarea
                      className="form-control"
                      defaultValue={this.state.about.visionText}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </form>
            </div>

            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Offentlige</span>
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
                  Rediger
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
                    <label>Visjon</label>
                    <textarea
                      className="form-control"
                      defaultValue={this.state.about.organizationText}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </form>
            </div>

            <div className="collapse editScheduleItem" id="addressForm">
              <form className="col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Adresse</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </form>
            </div>
          </div>
          <div>
            <h2>Kontaktpersoner</h2>
            <div>
              {this.state.contactPersons.map(contact => (
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
