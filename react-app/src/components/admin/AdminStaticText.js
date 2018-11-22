import React from "react";

const AdminStaticText = props => {
  let {
    about: { pitch, vision_txt, organization_txt, address, dateHeader_txt }
  } = props;

  return (
    <React.Fragment>
      <div className="elementCardAdmin row">
        <p className="col-lg-10">
          <span className="smallHeading">Statisk tekst</span>
        </p>
        <div className="col-lg-2">
          <button
            className="btn  btn-secondary btnInElementAdmin btn-sm"
            type="button"
            data-toggle="collapse"
            data-target="#staticTextForm"
            aria-expanded="false"
            aria-controls="staticTextForm"
          >
            Rediger
          </button>
        </div>
      </div>
      <div className="editScheduleItem collapse" id="staticTextForm">
        <form className="col-md-8 col-lg-6">
          <div className="form-group">
            <label>Dato for festival</label>
            <input
              type="text"
              className="form-control"
              defaultValue={dateHeader_txt}
            />
          </div>
          <div className="form-group">
            <label>Pitch</label>
            <textarea
              type="text"
              className="form-control"
              defaultValue={pitch}
            />
          </div>

          <div className="form-group">
            <label>Visjon</label>
            <textarea className="form-control" defaultValue={vision_txt} />
          </div>
          <div className="form-group">
            <label>Organisasjon</label>
            <textarea
              className="form-control"
              defaultValue={organization_txt}
            />
          </div>
          <div className="form-group">
            <label>Kontakt Adresse</label>
            <input className="form-control" defaultValue={address} />
          </div>
          <button type="submit" className="btn btn-info btn-sm">
            Rediger
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AdminStaticText;
