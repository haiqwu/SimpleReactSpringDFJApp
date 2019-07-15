import React from 'react';
import AddPart from './AddPart/AddPart';
import PartsInfo from './PartsInfo/PartsInfo';
import './parts.css';

class Parts extends React.Component {
  render() {
    return (
      <section className="main">
        <AddPart />
        <PartsInfo />
      </section>
    );
  }
}

export default Parts;
