import React from "react"
import {FormValidation} from "calidation"
//import {isRequired, isNumber} from "calidators"

const config = {
  // List the requirements for each field.
  // https://github.com/selbekk/calidators for reference
  address: {
    isRequired: "Skriv inn addresse"
  },
  capacity: {
    isRequired: "Skriv inn antall plasser",
    isNumber: "Skriv inn kun tall"
  }
}

const onSubmit = ({fields, errors, isValid}) => {
  if(isValid){
    //submit form I guess
    console.log(fields.address)
    console.log(fields.capacity)
  }else{
    console.log("Not everything is gucc: ", errors)
  }
}

const AdminVenuesItem = props => {

  function checkCapacity() {
    if (props.venue.capacity === null) {
      return <p className="col-lg-4">Unlimited/Public property </p>;
    } else {
      return (
        <p className="col-lg-4">
          <span className="smallHeading">Capacity: </span>
          {props.venue.capacity}
        </p>
      );
    }
  }

  return (
    <React.Fragment>
      <div className="elementCardAdmin row">
        <p className="col-lg-5">
          <span className="smallHeading">Address: </span> {props.venue.address}
        </p>
        {checkCapacity()}
        <div className="col-lg-3">
          <button className="btn btn-sm btn-danger btnInElementAdmin">
            Delete
          </button>
          <button
            className="btn btn-sm btnInElementAdmin btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target={"#venue" + props.venue.id}
            aria-expanded="false"
            aria-controls={"venue" + props.venue.id}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="editScheduleItem collapse" id={"venue" + props.venue.id}>

        <FormValidation 
          className="col-md-6 col-lg-4"
          config={config}
          onSubmit={onSubmit}
        >
          {({errors, submitted}) => (
            <>
              <div className="form-group">
                <label>Address</label>
                <input
                  name="address"
                  className="form-control"
                  defaultValue={props.venue.address}
                />
                {errors && <span>{errors.address}</span>}
              </div>
              <div className="form-group">
                <label>Capacity</label>
                <input
                  name="capacity"
                  className="form-control"
                  defaultValue={props.venue.capacity}
                />
                {submitted && errors && <span>{errors.capacity}</span>}
              </div>
              <button type="submit" className="btn btn-info btn-sm">
                Edit
              </button>
            </>
          )}
        </FormValidation>
      </div>
    </React.Fragment>
  );
};

export default AdminVenuesItem;
