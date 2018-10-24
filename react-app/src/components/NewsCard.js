//Newscard component that displays the data
import React from "react";

const NewsCard = (props) => {

    return (
        <div className="col-md-4 newsDiv">
            <div className="imgNewsDiv">
                <img
                    className="thumbNewsImg"
                    src={props.img}
                    alt="newsimg"
                />
                <p className="dateOnNewsImg">{props.date}</p>
            </div>
            <div className="textNewsDiv">
                <h5>{props.title}</h5>
                <p>{props.txt}</p>
            </div>
        </div>
    );
}


export default NewsCard;
