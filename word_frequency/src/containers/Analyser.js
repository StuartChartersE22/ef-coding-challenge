import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from '../components/NavBar.js';
import FrequencyTable from '../components/FrequencyTable.js';
import FileLoader from '../components/FileLoader.js';
import WordCloud from '../components/WordCloud.js';
import ReviewAnalyser from '../models/ReviewAnalyser.js';

class Analyser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrases: ['No Reviews'],
      wordFrequencies: {
        No: 3,
        Reviews: 3
      }
    };
    this.handleFileLoading = this.handleFileLoading.bind(this);
  }

  handleFileLoading(phrases){
    this.setState({
      phrases: phrases,
      wordFrequencies: ReviewAnalyser.getWordFrequencies(phrases)
    });
  }

  render(){
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Route
            exact path="/"
            render={() => <FileLoader onLoading={this.handleFileLoading}/>}
          />
          <Route
            path="/freq-table"
            render={() => <FrequencyTable words={this.state.wordFrequencies}/>}
          />
          <Route
            path="/word-cloud"
            render={() => <WordCloud words={this.state.wordFrequencies}/>}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default Analyser;
