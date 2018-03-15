import React, { Component } from 'react';
import logo from './logo(cooltext2.png';
import './App.css';
import Editor from './Editor'

class App extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log(this, e);
    }
    isAnonymous() {
        return true;
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Editor {...this}/>
      </div>

    );
  }
}

export default App;
