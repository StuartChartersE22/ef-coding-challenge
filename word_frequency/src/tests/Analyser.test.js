import React from 'react';
import ReactDOM from 'react-dom';
import Analyser from '../containers/Analyser.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Analyser/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a state of phrases', () => {
  const analyser = new Analyser();
  const result = analyser.state.phrases.length
  expect(result).toBe(20)
})
