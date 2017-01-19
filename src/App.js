import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        };
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleAboutClick = this.handleAboutClick.bind(this);
    }

    handleHomeClick(){
        this.setState({
            page: 'home'
        })
    }
    handleAboutClick(){
        this.setState({
            page: 'about'
        })
    }
  render() {
        if(this.state.page === 'home'){
            var jumbotron = <Jumbotron />;
            var home = <Home />;
        }else if (this.state.page === 'about'){
            var about = <About />
        }
    return (
      <div>
          <Navbar
              color="dark"
              page={this.state.page}
              homeClick={this.handleHomeClick}
              aboutClick={this.handleAboutClick} />
          {jumbotron}
          {home}
          {about}
          <Footer />
      </div>
    );
  }
}

export default App;
