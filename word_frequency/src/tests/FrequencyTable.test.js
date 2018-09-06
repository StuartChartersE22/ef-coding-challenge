import React from 'react';
import ReactDOM from 'react-dom';
import FrequencyTable from '../components/FrequencyTable.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrequencyTable/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
