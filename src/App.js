import React, { Component } from 'react';
import LogInForm from '../src/components/logIn';
import NavBar from '../src/components/nav_bar';
class App extends Component {
  // constructor(pros){
  //   super(props)
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Galvanize-Connect 1</h2>
          <div>
            <NavBar />
          <LogInForm />
         </div>
        </div>
      </div>
    );
  }
}

export default App;
