import React, { Component } from 'react';
import axios from 'axios';
import './Movie.css';

class Movie extends Component {
  constructor() {
    super();
    this.state = { details: {} };
  }
  componentDidMount() {
    this.getMovieDetails(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;

    if (id !== prevId) {
      this.getMovieDetails(id);
    }
  }

  render() {
    return (
        <div>Details about {this.state.details.title}</div>
    );
  }

  getMovieDetails(genreId) {
    return axios("http://localhost:8081/movie/" + genreId)
      .then(response =>
          this.setState({ details: response.data })
      );
  }
}

export default Movie;
