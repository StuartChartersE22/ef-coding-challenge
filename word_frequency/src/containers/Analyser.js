import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import FrequencyTable from '../components/FrequencyTable.js';
import FileLoader from '../components/FileLoader.js';
import ReviewAnalyser from '../models/ReviewAnalyser.js';

class Analyser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrases: [],
      WordFrequencies: {}
    };
    this.handleFileLoading = this.handleFileLoading.bind(this);
  }

  handleFileLoading(file){
    console.log(file);
    this.state.WordFrequencies = ReviewAnalyser.getWordFrequencies()
  }

  render(){
    return (
      <div>
        <NavBar/>
        <FileLoader onLoading={this.handleFileLoading}/>
        <FrequencyTable words={this.state.WordFrequencies}/>
      </div>
    );
  }
}

export default Analyser;
