//Component that lists the newscard with the correct data
import React, { Component } from "react";
import NewsCard from "./NewsCard.js";

class NewsCards extends Component {
    state = {
        newsData: [],
    };
    componentDidMount() {
        this.getNewsList();
    }
    getNewsList = () => {
        fetch(`http://localhost:5000/posts`)
            .then(response => response.json())
            .then(response => this.setState({ newsData: response }))
            .catch(err => console.log(err));
    };


    render() {//Loops trough all data, and displays it in newsCard
        return this.state.newsData.map(newsArticle => (
            <NewsCard key={newsArticle.id} title={newsArticle.title} img={newsArticle.img_path} date={newsArticle.date} txt={newsArticle.text} id={newsArticle.id} />
        ));
    }
}

export default NewsCards;
