import React, { Component } from "react";
import AdminContactPerson from "../AdminContactPerson";
import AdminAbout from "../AdminAbout";

class AdminGeneral extends Component {
  state = {
    about: [],
    contactPersons: [],
    reports: [],
    partners: [],
    livestream: []
  };

  componentDidMount() {
    this.getContactList();
    this.getAboutData();
    this.getReports();
    this.getPartners();
    this.getLivestreamID();
  }

  getLivestreamID = _ => {
    fetch(`http://localhost:5000/livestream`)
      .then(response => response.json())
      .then(response => this.setState({ livestream: response.data }))
      .catch(err => console.log(err));
  };

  getReports = _ => {
    fetch(`http://localhost:5000/festivalreports`)
      .then(response => response.json())
      .then(response => this.setState({ reports: response.data }))
      .catch(err => console.log(err));
  };
  getPartners = _ => {
    fetch(`http://localhost:5000/partners`)
      .then(response => response.json())
      .then(response => this.setState({ partners: response.data }))
      .catch(err => console.log(err));
  };
  getAboutData = _ => {
    fetch(`http://localhost:5000/general`)
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
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <h2>Forside</h2>
        <div>
          <div className="elementCardAdmin row">
            <p className="col-md-10">
              <span className="smallHeading">Forsidetekst og festivaldato</span>
            </p>

            <div className="col-md-2">
              <button
                className="btn btn-secondary btnInElementAdmin btn-sm"
                type="button"
                data-toggle="collapse"
                data-target="#frontPageForm"
                aria-expanded="false"
                aria-controls="frontPageForm"
              >
                Rediger
              </button>
            </div>
          </div>
          <div className="collapse editScheduleItem" id="frontPageForm">
            {this.state.about.map(about => (
              <form
                key={about.id}
                className="col-md-8 col-lg-6"
                onSubmit={this.handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Forsidetekst</label>
                    <textarea
                      className="form-control"
                      defaultValue={about.pitch}
                      onChange={this.handleChange}
                      name="pitch"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Festivaldato</label>
                    <input
                      className="form-control"
                      defaultValue={about.dateHeader_txt}
                      onChange={this.handleChange}
                      name="dateHeader_txt"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </form>
            ))}
          </div>
          <h2>Om oss</h2>
          <div>
            {this.state.about.map(about => (
              <AdminAbout key={about.id} about={about} />
            ))}
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Festivalrapporter</span>
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
            <div className="collapse reportsForm" id="reportsForm">
              <form className="row addReport">
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
                  <div className="col-md-4 float-left">
                    <label>Språk:</label>
                  </div>

                  <div className="col-md-4 d-inline-block">
                    <input type="radio" id="no" name="language" value="no" />
                    <label htmlFor="no">Norsk</label>
                  </div>
                  <div className="col-md-4 float-right">
                    <input type="radio" id="en" name="language" value="en" />
                    <label htmlFor="en">Engelsk</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    type="submit"
                    className="btn btn-info btn-sm float-right"
                  >
                    Legg til ny rapport
                  </button>
                </div>
              </form>
              {this.state.reports.map(report => (
                <div key={report.id} className="listReports">
                  <hr />
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

                  <div
                    className="collapse editReports col-md-8 offset-2"
                    id={"reportForm" + report.id}
                  >
                    <form className="row m-3">
                      <div className="col-md-4">
                        <label>Tittel</label>
                        <input
                          className="form-control"
                          defaultValue={report.title}
                        />
                      </div>
                      <div className="col-md-5">
                        <label>Link</label>
                        <input
                          className="form-control"
                          defaultValue={report.link}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="lanLabel ">Språk</label>
                        <div className="d-inline-block float-left">
                          <input
                            type="radio"
                            id="no"
                            name="language"
                            value="no"
                            defaultChecked
                          />
                          <label className="radiobtnLabel" htmlFor="no">
                            Norsk
                          </label>
                        </div>
                        <div className="d-inline-block float-right">
                          <input
                            type="radio"
                            id="en"
                            name="language"
                            value="en"
                          />
                          <label className="radiobtnLabel" htmlFor="en">
                            Engelsk
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 float-left mt-3">
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
                <span className="smallHeading">Samarbeidspartnere</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#partnersForm"
                  aria-expanded="false"
                  aria-controls="partnersForm"
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse reportsForm" id="partnersForm">
              <form className="row addReport">
                <div className="col-md-4">
                  <input
                    ref="createReportTitle"
                    type="text"
                    className="form-control"
                    placeholder="Navn på samarbeidspartner"
                  />
                </div>

                <div className="col-md-4">
                  <div className="col-md-4 float-left">
                    <label>Type partner:</label>
                  </div>

                  <div className="col-md-4 d-inline-block">
                    <input type="radio" id="no" name="language" value="no" />
                    <label htmlFor="no">Lokal</label>
                  </div>
                  <div className="col-md-4 float-right">
                    <input type="radio" id="en" name="language" value="en" />
                    <label htmlFor="en">Offentlig</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-info btn-sm float-right"
                  >
                    Legg til ny samarbeidspartner
                  </button>
                </div>
              </form>
              <hr />

              <div className="form-group col-md-12">
                <h5 className="d-inline-block">
                  Offentlige samarbeidspartnere
                </h5>
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#officialPartnerForm"
                  aria-expanded="false"
                  aria-controls="officialPartnerForm"
                >
                  Rediger
                </button>
                <div
                  className="collapse officialPartnerForm col-md-10 mb-5"
                  id="officialPartnerForm"
                >
                  {this.state.about.map(about => (
                    <div
                      key={about.id}
                      className="form-group col-md-12 p-0 mb-5"
                    >
                      <label>Om offentlige samarbeidspartnere</label>
                      <textarea
                        className="form-control"
                        defaultValue={about.partner_txt_official}
                      />
                      <button
                        type="submit"
                        className="btn btn-info btn-sm mt-1"
                      >
                        Lagre
                      </button>
                    </div>
                  ))}

                  {this.state.partners.map(partner => (
                    <div key={partner.id}>
                      {partner.type === "official" ? (
                        <div className="m-1">
                          <hr />
                          {partner.partner_name}
                          <button className="btn btn-sm btn-danger btnInElementAdmin">
                            Slett
                          </button>
                          <button
                            className="btn btn-secondary btnInElementAdmin btn-sm"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#officialPartnerForm" + partner.id}
                            aria-expanded="false"
                            aria-controls={"officialPartnerForm" + partner.id}
                          >
                            Rediger
                          </button>
                          <div
                            id={"officialPartnerForm" + partner.id}
                            className={
                              "collapse col-md-10 offset-r-2 officialPartnerForm" +
                              partner.id
                            }
                          >
                            <form className="row m-3">
                              <div className="col-md-5">
                                <label>Navn på samarbeidspartner</label>
                                <input
                                  className="form-control"
                                  defaultValue={partner.partner_name}
                                />
                              </div>
                              <div className="col-md-7">
                                <label className="col-md-7 d-block">
                                  Type partner:
                                </label>

                                <div className="col-md-4 offset-l-2 d-inline-block">
                                  <input
                                    type="radio"
                                    id="no"
                                    name="language"
                                    value="no"
                                  />
                                  <label htmlFor="no">Lokal</label>
                                </div>
                                <div className="col-md-4 offset-r-2 float-right">
                                  <input
                                    type="radio"
                                    id="en"
                                    name="language"
                                    value="en"
                                  />
                                  <label htmlFor="en">Offentlig</label>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-info btn-sm ml-3 m-1"
                              >
                                Lagre
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group col-md-12">
                <h5 className="d-inline-block">Lokale samarbeidspartnere</h5>
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#localPartnerForm"
                  aria-expanded="false"
                  aria-controls="localPartnerForm"
                >
                  Rediger
                </button>
                <div
                  className="collapse localPartnerForm col-md-10"
                  id="localPartnerForm"
                >
                  {this.state.about.map(about => (
                    <div key={about.id} className="form-group col-md-12 p-0">
                      <label>Om lokale samarbeidspartnere</label>
                      <textarea
                        className="form-control"
                        defaultValue={about.partner_txt_private}
                      />
                    </div>
                  ))}

                  <button type="submit" className="btn btn-info btn-sm">
                    Lagre
                  </button>
                  {this.state.partners.map(partner => (
                    <div key={partner.id}>
                      {partner.type === "private" ? (
                        <div className="m-1">
                          <hr />
                          {partner.partner_name}{" "}
                          <button className="btn btn-sm btn-danger btnInElementAdmin">
                            Slett
                          </button>
                          <button
                            className="btn btn-secondary btnInElementAdmin btn-sm"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#localPartnerForm" + partner.id}
                            aria-expanded="false"
                            aria-controls={"localPartnerForm" + partner.id}
                          >
                            Rediger
                          </button>
                          <div
                            id={"localPartnerForm" + partner.id}
                            className={
                              "collapse col-md-10 offset-r-2 localPartnerForm" +
                              partner.id
                            }
                          >
                            <form className="row m-3">
                              <div className="col-md-5">
                                <label>Navn på samarbeidspartner</label>
                                <input
                                  className="form-control"
                                  defaultValue={partner.partner_name}
                                />
                              </div>
                              <div className="col-md-7">
                                <label className="col-md-7 d-block">
                                  Type partner:
                                </label>

                                <div className="col-md-4 offset-l-2 d-inline-block">
                                  <input
                                    type="radio"
                                    id="no"
                                    name="language"
                                    value="no"
                                  />
                                  <label htmlFor="no">Lokal</label>
                                </div>
                                <div className="col-md-4 offset-r-2 float-right">
                                  <input
                                    type="radio"
                                    id="en"
                                    name="language"
                                    value="en"
                                  />
                                  <label htmlFor="en">Offentlig</label>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-info btn-sm ml-3 m-1"
                              >
                                Lagre
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
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
            <div>
              <h2>Diverse</h2>
              <div className="elementCardAdmin row">
                <p className="col-md-10">
                  <span className="smallHeading">YouTube</span>
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
                  {this.state.livestream.map(livestream => (
                    <div key={livestream.id} className="form-row">
                      <div className="form-group col-md-12">
                        <label>Kanal (ID)</label>
                        <input
                          className="form-control"
                          defaultValue={livestream.livestream_id}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>API nøkkel</label>
                        <input
                          className="form-control"
                          defaultValue={livestream.YouTube_API_KEY}
                        />
                      </div>
                    </div>
                  ))}

                  <button type="submit" className="btn btn-info btn-sm">
                    Lagre
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminGeneral;
