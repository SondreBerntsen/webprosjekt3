//news article page
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/news.css";


class NewsArticle extends Component {
    state = {
        newsData: [{ id: '', title: '', text: '', date: '', img_path: '' }],
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
        this.getReviewData(id);
    }
    getReviewData = (id) => {
        fetch(`http://localhost:5000/newsArticle?id=` + id)
            .then(response => response.json())
            .then(response => this.setState({ newsData: response }))
            .catch(err => console.log(err));
    };
    render() {
        const article = this.state.newsData[0] ? (
            <div className="container">
                <div className="vh-80">
                    <h2 className="pageTitle">{this.state.newsData[0].title}</h2>
                    <hr className="hrHeight" />
                    <div className="row newsArticle">
                        <div className="col-md-6">
                            {/*If img_path does not exist don't load image*/}
                            {this.state.newsData[0].img_path != '' ? <img src={require('../../uploadedImg/' + this.state.newsData[0].img_path + '/' + this.state.newsData[0].id)} alt="img" className="imgNewsArticle" /> : null}
                        </div>
                        <div className="newsText col-md-6"> <p>{this.state.newsData[0].text}</p></div>
                    </div>
                </div>
            </div>
        ) : (
                < div class="errorDiv container" >
                    <h1 class="sadSmilyError">&#x2639;</h1>
                    <h1 class="txt404">404</h1>
                    <h3>Page not found</h3>
                    <p>The page you are looking for doesn't exist or an other error occured.</p>
                </div >
            )
        return (
            <div>
                <Navbar />
                {article}
                <Footer />
            </div>
        )
    }
}


export default NewsArticle;