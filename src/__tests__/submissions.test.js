import React from 'react';
import ReactDOM from 'react-dom';
import Submissions from '../submissions';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Submissions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });