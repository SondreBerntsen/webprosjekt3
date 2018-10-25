import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Programme from "./components/programme/Programme";
import About from "./components/about/About";
import News from "./components/news/News";
import Review from "./components/review/review";
import Contact from "./components/contact/Contact";
import Event from "./components/event/Event";
import NewsArticle from "./components/news/NewsArticle";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/om-oss" component={About} />
          <Route path="/nyheter" component={News} />
          <Route path="/tilbakeblikk" component={Review} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/program" component={Programme} />
          <Route path="/arrangement/:eventId" component={Event} />
          <Route path="/artikkel/:newsId" component={NewsArticle} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
