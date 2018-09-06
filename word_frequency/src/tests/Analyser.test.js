import React from 'react';
import ReactDOM from 'react-dom';
import Analyser from '../containers/Analyser.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Analyser/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
