import React from 'react';
import ReactDOM from 'react-dom';
import Genre from './Genre';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Genre />, div);
});
