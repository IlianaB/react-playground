import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Genre.css';

class Genre extends Component {
  constructor() {
    super();
    this.state = { movies: [] };
  }
  componentDidMount() {
    this.getMovies(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;

    if (id !== prevId) {
      this.getMovies(id);
    }
  }

  render() {
    return (
        <ul>
            {this.state.movies.map(movie =>
              <li key={movie.id}><Link to={"/movie/" + movie.id}>{movie.title}</Link></li>
            )}
        </ul>
    );
  }

  getMovies(genreId) {
    return axios("http://localhost:8081/genre/" + genreId)
      .then(response =>
          this.setState({ movies: response.data.results })
      );
  }
}

export default Genre;
