import React, { Component } from "react";

class NewsCard extends Component {
    state = {
    };
    render() {
        return (
            <div className="col-md-4 newsDiv">
                <div className="imgNewsDiv">
                    <img
                        className="thumbNewsImg"
                        src={this.props.img}
                        alt="newsimg"
                    />
                    <p className="dateOnNewsImg">{this.props.date}</p>
                </div>
                <div className="textNewsDiv">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.txt}</p>
                </div>
            </div>
        );
    }
}

export default NewsCard;
