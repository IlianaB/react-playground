import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Genre from '../Genre/Genre';
import './PrimaryLayout.css';

class PrimaryLayout extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Genre}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default PrimaryLayout;
