import React, { Component } from 'react';
import Main from './components/Main.component';
import Footer from './components/Footer.component';
import './style/App.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
