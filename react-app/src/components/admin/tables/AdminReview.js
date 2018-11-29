import React, { Component } from "react"
import AdminReviewItem from '../AdminReviewItem'

class AdminReview extends Component {
  state = {years: []};

  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('http://localhost:5000/review?year=all')
      .then(response => response.json())
      .then(response => this.structureData(response.data))
      .catch(err => console.log(err))
      console.log(this.state)
  }

  structureData = (data) => {
    let years = []
    for(let i = 0; i < data.reviewData.length; i++){
      let year = data.reviewData[i]
      year.slides = []
      year.recordings = []
      for(let j = 0; j < data.slides.length; j++){
        if(data.slides[j].r_id === year.id) year.slides.push(data.slides[j])
      }
      for(let j = 0; j < data.recordings.length; j++){
        if(data.recordings[j].r_id === year.id) year.recordings.push(data.recordings[j])
      }

      years.push(year)
    }
    this.setState({years: years})
  }
  render() {
    return (
      <>
        <div className="container tablesAdmin col-md-9 col-lg-10">
          <button
            className=" createNewBtn btn btn-info btn-sm"
            type="button"
            data-toggle="collapse"
            data-target="#newReviewForm"
            aria-expanded="false"
            aria-controls="newReviewForm"
          >
            Create new year in review
          </button>
          <div className="collapseForm col-12 collapse" id="newReviewForm">
            <form className="col-md-8 col-lg-6">
              <div className="form-row">
                <label>Year</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter year"
                />
              </div>
              <div className="form-row">
                <label>Image</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label>Year in review text</label>
                <textarea type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-info btn-sm">
                Submit
              </button>
            </form>
          </div>
          { this.state.years.map((year, index) => (
            <AdminReviewItem key={index} year={year} />
          ))}
        </div>
      </>
    );
  }
}

export default AdminReview;
