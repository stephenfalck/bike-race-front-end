import React from 'react';
import ReactDOM from 'react-dom';
import Riders from '../riders';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Riders />, div);
    ReactDOM.unmountComponentAtNode(div);
  });