import React, { Component } from "react";

class AdminSettings extends Component {
  state = {
    settings: []
  };

  componentDidMount = () => {
    this.getSettings();
  };

  getSettings = _ => {
    fetch(`http://localhost:5000/settings`)
      .then(response => response.json())
      .then(response => this.setState({ settings: response.data[0] }))
      .catch(err => console.log(err));
  };

  updateAnniversary = e => {
    e.preventDefault();
    let body = {};
    if (e.target.value === "Aktiv") {
      body = { anniversary: "on" };
    } else {
      body = { anniversary: "off" };
    }
    fetch(`http://localhost:5000/settings/updateAnniversary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).catch(err => console.log(err));
  };

  updateStatus = e => {
    e.preventDefault();
    let body = {};
    if (e.target.value === "Aktiv") {
      body = { status: "active" };
    } else {
      body = { status: "inactive" };
    }
    fetch(`http://localhost:5000/settings/updateStatus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <h2 className="settingsHeader">Innstillinger for websiden</h2>
        <div className="col-lg-6 row">
          <div className="col-md-6">
            <span className="settingTxt">Festivalsesong</span>
          </div>
          {/**fix this has to be a form. On of the buttons has to be active.. **/}
          {this.state.settings.status === "active" ? (
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  onClick={this.updateStatus}
                  className="btn btn-primary"
                  name="status"
                  value="Aktiv"
                  type="submit"
                />
                <input
                  onClick={this.updateStatus}
                  className="btn btn-secondary"
                  name="status"
                  value="Inaktiv"
                  type="submit"
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Her skal vi forklare hva knappene gjør
              </small>
            </div>
          ) : (
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  type="submit"
                  name="status"
                  value="Aktiv"
                  onClick={this.updateStatus}
                  className="btn btn-secondary"
                />
                <input
                  type="submit"
                  name="status"
                  value="Inaktiv"
                  onClick={this.updateStatus}
                  className="btn btn-primary"
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Her skal vi forklare hva knappene gjør
              </small>
            </div>
          )}

          <div className="col-md-6">
            <span className="settingTxt">Jubileum</span>
          </div>
          {/**fix this has to be a form. On of the buttons has to be active..  name has to change**/}
          {this.state.settings.anniversary === "on" ? (
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  className="btn btn-primary"
                  type="submit"
                  name="anniversary"
                  value="Aktiv"
                  onClick={this.updateAnniversary}
                />
                <input
                  className="btn btn-secondary"
                  type="submit"
                  name="anniversary"
                  value="Inaktiv"
                  onClick={this.updateAnniversary}
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Her skal vi forklare hva knappene gjør
              </small>
            </div>
          ) : (
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  name="anniversary"
                  value="Aktiv"
                  onClick={this.updateAnniversary}
                />
                <input
                  className="btn btn-primary"
                  type="submit"
                  name="anniversary"
                  value="Inaktiv"
                  onClick={this.updateAnniversary}
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Her skal vi forklare hva knappene gjør
              </small>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AdminSettings;
