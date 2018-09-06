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
      wordFrequencies: {}
    };
    this.handleFileLoading = this.handleFileLoading.bind(this);
  }

  handleFileLoading(file){
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // The json object is just an array of reviews. If json object more complex, add formatting here
      const phrases = JSON.parse(fileReader.result)
      this.setState({
        phrases: phrases,
        wordFrequencies: ReviewAnalyser.getWordFrequencies(phrases)
      });
    };
    fileReader.readAsText(file);
  }

  render(){
    return (
      <div>
        <NavBar/>
        <FileLoader onLoading={this.handleFileLoading}/>
        <FrequencyTable words={this.state.wordFrequencies}/>
      </div>
    );
  }
}

export default Analyser;
