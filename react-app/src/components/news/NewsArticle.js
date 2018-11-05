//news article page
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/news.css";


class NewsArticle extends Component {
    state = {
        id: null,
        article: {
            newsTitle: 'Kitten in trouble',
            newsImg: "https://www.drammensacred.no/wp-content/uploads/2018/09/BJM_6287-1-960x639.jpg",
            newsText: 'Det ble en spektakulær åpning av årets Drammen Sacred Music Festival da gruppa Cloudlight Fire Tribe med dj og 5 flammesjonglører holdt sitt fantastiske show på Strømsø torg lørdag kveld.\n\nFestivalens styreleder Ivar Flaten ønsket velkommen til festivalen, som har program hver dag gjennom hele uka fram til avslutningskonsert med Solveig Sletthjell i Filadelfiakirken søndag 23. september.\n\nStor og små flokket seg rundt på torget mens performance-kunstnerene fra Cloudlight danset og sjonglerte med ulike typer fakler til dj´ens egenproduserte tribal beats.'
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
                <div className="vh-80">
                    <h2 className="newsTitle">{this.state.article.newsTitle}</h2>
                    <hr className="newsHr" />
                    <div className="row newsArticle">
                        <div className="newsImgDiv col-md-6">
                            <img src={this.state.article.newsImg} alt="cat" className="imgNewsArticle" />
                        </div>
                        <div className="newsText col-md-6"> <p>{this.state.article.newsText}</p></div>
                    </div>
                </div>
            </div>
        ) : (
                <div>Error melding her.. video 31</div>
            )
        return (
            <div>
                <Navbar />
                <span> id = {this.state.id}</span>
                {article}
                <Footer />
            </div>
        )
    }
}


export default NewsArticle;