import React from 'react';


const AdminPostItem = (props) => {

    return (
        <React.Fragment>
            <div className="elementCardAdmin row">
                <p className="col-lg-5"><span className="smallHeading">Title: </span> {props.post.title}</p>
                <p className="col-lg-4"><span className="smallHeading">Date: </span> {props.post.date}</p>
                <div className="col-lg-3">
                    <button className="btn btn-sm btn-danger btnInElementAdmin">Delete</button>
                    <button className="btn  btn-secondary btnInElementAdmin btn-sm" type="button" data-toggle="collapse" data-target={'#post' + props.post.id} aria-expanded="false" aria-controls={'post' + props.post.id}>Edit</button>
                </div>
            </div>
            <div className="editScheduleItem collapse" id={'post' + props.post.id}>
                <form className="col-md-8 col-lg-6">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" defaultValue={props.post.title} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control" />
                    </div>
                    <img
                        className="newsImgEdit "
                        src={props.post.img}
                        alt="newsImg"
                    />
                    <div className="form-group">
                        <label>News Text</label>
                        <textarea id="textareaNews" class="form-control">{props.post.newsText}</textarea>
                    </div>
                    <button type="submit" class="btn btn-info btn-sm">Edit</button>
                </form>
            </div>
        </React.Fragment>
    )

}

export default AdminPostItem;