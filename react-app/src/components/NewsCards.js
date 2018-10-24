//Component that lists the newscard with the correct data
import React, { Component } from "react";
import NewsCard from "./NewsCard.js";

class NewsCards extends Component {
    state = {//Fix static enn saa lenge
        news: [
            {
                title: "Sang syng sing",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 1,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            },
            {
                title: "Ding dong",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 2,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            },
            {
                title: "Pling pling",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 3,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            },
            {
                title: "boom bam",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 4,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            },
            {
                title: "Plupp plipp",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 5,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            },
            {
                title: "Bring bring",
                date: "17. Juni 2017",
                img:
                    "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/5b736843352f53e1d56a8215/5b73684840ec9a45a9538c78/1534289997493/_DSC9283.jpg?format=1000w",
                id: 5,
                txt: "Lorem ipsum dolar sit amet, consete advors elit. ut non spaoen axc nucn lackli...",
            }
        ]
    };
    render() {//Loops trough all data, and displays it in newsCard
        return this.state.news.map(newsArticle => (
            <NewsCard key={newsArticle.id} title={newsArticle.title} img={newsArticle.img} date={newsArticle.date} txt={newsArticle.txt} />
        ));
    }
}

export default NewsCards;
