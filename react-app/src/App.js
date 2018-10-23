import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Programme from "./components/Programme";
import About from "./components/About";
import News from "./components/News";
import Archive from "./components/Archive";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/archive" component={Archive} />
          <Route path="/contact" component={Contact} />
          <Route path="/programme" component={Programme} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
