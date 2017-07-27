import React, { Component } from 'react';
import './Genre.css';

class Genre extends Component {
  render() {
    const params = this.props.match.params;
    return (
        <div>{params.id}</div>
    );
  }
}

export default Genre;
