//news article page
import React, { Component } from "react";
import Navbar from "../Navbar";
import "../../styles/newsArticle.css";


class NewsArticle extends Component {
    state = {
        id: null,
        article: {
            newsTitle: 'something',
            newsImg: 'something',
            newsText: 'blablalba'
        }
    }
    componentDidMount() {
        let id = this.props.match.params.newsId;
        this.setState({
            id: id
        })
    }
    render() {
        const article = this.state.article ? (
            <div className="container">
                <p>news</p>
            </div>
        ) : (
                <div>Error melding her.. video 31</div>
            )
        return (
            <div>
                <Navbar />
                <span> id = {this.state.id}</span>
                {article}
            </div>
        )
    }
}


export default NewsArticle;