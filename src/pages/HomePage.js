import React, { Component } from 'react';

import img from '../components/ContactList/image/picnic.jpg';

export class HomePage extends Component {
  state = {
    trends: [],
  };

  render() {
    return (
      <div>
        <h1>Create your personalised Phone Book online.</h1>
        <img src={img} alt="friends" width="640px" />
      </div>
    );
  }
}

export default HomePage;
