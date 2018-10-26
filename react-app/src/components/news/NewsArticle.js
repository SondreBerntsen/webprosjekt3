//news article page
import React, { Component } from "react";
import Navbar from "../Navbar";
import "../../styles/news.css";


class NewsArticle extends Component {
    state = {
        id: null,
        article: {
            newsTitle: 'Kitten in trouble',
            newsImg: "https://content.linkedin.com/content/dam/business/talent-solutions/global/en_us/blog/2018/01/unexpected-interview-question-new.jpg",
            newsText: 'blablalbahoh'
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
                <h2>{this.state.article.newsTitle}</h2>
                <div className="newsImgDiv">
                    <img src={this.state.article.newsImg} alt="cat" className="imgNewsArticle" />
                </div>
                <p>{this.state.article.newsText}</p>
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