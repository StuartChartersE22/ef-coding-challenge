import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import FrequencyTable from '../components/FrequencyTable.js';

class Analyser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrases: [
        "A great product for daily use,",
        "Great price. Takes about 10 days for delivery",
        "Excellent value - will buy again",
        "Fine, I always use this, was as expected",
        "Good value",
        "excellent product, good value",
        "good",
        "does the job!",
        "Thank you",
        "Great it's that is easy to use",
        "I hated it",
        "arrived on time, excellent product, thank you",
        "quick service great price.",
        "good and refreshing",
        "My daughter is road testing this, but so far it's refreshing",
        "DO NOT BUY THIS PRODUCT",
        "Avoid",
        "Did not notice any difference",
        "Horrible taste",
        "Does its job and shows it works"
      ]
    };
  }

  render(){
    return (
      <div>
        <NavBar/>
        <FrequencyTable phrases={this.state.phrases}/>
      </div>
    );
  }
}

export default Analyser;