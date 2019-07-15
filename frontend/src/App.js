import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default App;
