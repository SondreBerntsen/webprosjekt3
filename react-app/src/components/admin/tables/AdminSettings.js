import React, { Component } from 'react';


class AdminSettings extends Component {
    state = {


    }
    render() {
        return (
            <div className="container tablesAdmin col-md-9 col-lg-10">
                <h2 className="settingsHeader">Page settings</h2>
                <div className="col-lg-6 row">
                    <div className="col-md-6">
                        <span className="settingTxt">Festival season</span>
                    </div>
                    {/**fix this has to be a form. On of the buttons has to be active.. **/}
                    <div className="col-lg-6">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option1" autoComplete="off" aria-describedby="helptext" /> Active
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option2" autoComplete="off" /> Inactive
                            </label>
                        </div>
                        <small id="helptext" class="form-text text-muted">This text will explain what the buttons do</small>
                    </div>
                    <div className="col-md-6">
                        <span className="settingTxt">Anniversary</span>
                    </div>
                    {/**fix this has to be a form. On of the buttons has to be active..  name has to change**/}
                    <div className="col-lg-6">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary">
                                <input type="radio" name="options2" id="option1" autoComplete="off" aria-describedby="helptext" /> Active
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options2" id="option2" autoComplete="off" /> Inactive
                            </label>
                        </div>
                        <small id="helptext" class="form-text text-muted">This text will explain what the buttons do</small>
                    </div>

                </div>
            </div>


        );
    }
}

export default AdminSettings;