import React, { Component } from 'react';
import Main from './components/main.component';
import Footer from './components/footer.component';
import './style/App.css';

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
