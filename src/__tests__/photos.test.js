import React from 'react';
import ReactDOM from 'react-dom';
import Photos from '../photos';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Photos />, div);
    ReactDOM.unmountComponentAtNode(div);
  });