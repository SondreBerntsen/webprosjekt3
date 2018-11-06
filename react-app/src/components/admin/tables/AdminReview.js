import React, { Component } from 'react';


class AdminReview extends Component {
    state = {


    }
    render() {
        return (
            <div className="container tablesAdmin col-md-9 col-lg-10">
                <button className=" createNewBtn btn btn-info btn-sm" type="button" data-toggle="collapse" data-target='#newReviewForm' aria-expanded="false" aria-controls='newReviewForm'>Create new year in review</button>
                <div className="collapseForm col-12 collapse" id="newReviewForm">
                    <form className="col-md-8 col-lg-6">
                        <div class="form-row">
                            <label>Year</label>
                            <input type="number" className="form-control" placeholder="Enter year" />
                        </div>
                        <div class="form-row">
                            <label>Image</label>
                            <input type="file" className="form-control" placeholder="Enter title" />
                        </div>
                        <div className="form-group">
                            <label>Year in review text</label>
                            <textarea type="text" class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-info btn-sm">Submit</button>
                    </form>
                </div>
            </div>


        );
    }
}

export default AdminReview;