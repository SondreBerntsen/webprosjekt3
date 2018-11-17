import React, { Component } from "react";
import AdminPostItem from "../AdminPostItem";
import { Link } from "react-router-dom";

class AdminPosts extends Component {
  state = {
    posts: [{ id: '', title: '', text: '', date: '' }],
    years: []
  };
  componentDidMount() {
    let path = this.props.match.params.year;
    this.getPostList(path);
    this.getYearList();
  }
  componentWillReceiveProps() {
    let path = this.props.match.params.year;
    this.getPostList(path);
  }
  getYearList = _ => {
    fetch(`http://localhost:5000/newsYearList`)
      .then(response => response.json())
      .then(response => this.setState({ years: response }))
      .catch(err => console.log(err));
  };
  getPostList = path => {
    if (isNaN(path)) {
      fetch(`http://localhost:5000/posts`)
        .then(response => response.json())
        .then(response => this.setState({ posts: response }))
        .catch(err => console.log(err));
    } else {
      fetch(`http://localhost:5000/posts?year=` + path)
        .then(response => response.json())
        .then(response => this.setState({ posts: response }))
        .catch(err => console.log(err));
    }

  };

  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button
          className=" createNewBtn btn btn-info btn-sm"
          type="button"
          data-toggle="collapse"
          data-target="#newPostForm"
          aria-expanded="false"
          aria-controls="newPostForm"
        >
          Create new post
        </button>
        {this.state.years.map(function (year) {
          return (
            <Link
              className="btn"
              to={"/admin/posts/" + year.year}
              key={year.year}
            >
              {year.year}
            </Link>
          );
        })}
        <div className="collapseForm col-12 collapse" id="newPostForm">
          <form className="col-md-8 col-lg-6">
            <div className="form-row">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
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
              <label>News text</label>
              <textarea type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Submit
            </button>
          </form>
        </div>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <AdminPostItem post={post} />
          </div>
        ))}
      </div>
    );
  }
}

export default AdminPosts;
