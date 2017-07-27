import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Genre from '../Genre/Genre';
import './PrimaryLayout.css';
import axios from 'axios';

class PrimaryLayout extends Component {
  constructor() {
      super();
      this.state = { genres: [] };
  }

  componentDidMount() {
    axios('http://localhost:8081/genre/list')
        .then(response =>
            this.setState({ genres: response.data.genres })
        );
  }

  render() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    {this.state.genres.map(genre =>
                        <li key={genre.id}><Link to={"/genre/" + genre.id}>{genre.name}</Link></li>
                    )}
                </ul>

                <hr/>

                <Route path="/genre/:id" component={Genre}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default PrimaryLayout;
