import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import './Hello'
// import Hello from './Hello'
import D3demo from './d3demo'
// class Test extends Component {
//   render() {
//     return <h2>Hello World! and hui</h2>
//   }
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <D3demo></D3demo>
        {/* <Hello></Hello>
        <Test></Test>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
