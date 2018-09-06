import React, { Component } from 'react';

class FileLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: ""
    };
    this.handleFileSelection = this.handleFileSelection.bind(this);
    this.handleFileLoading = this.handleFileLoading.bind(this);
  }

  handleFileSelection(evt){

  }

  handleFileLoading(){
    this.props.onLoading(this.state.file)
  }

  render(){
    return (
      <div>
        <label htmlFor="file-input">Choose reviews: </label>
        <input type="file" id="file-input" accept=".json" onChange={this.handleFileSelection}/>
        <button onClick={this.handleFileLoading}>Submit Reviews</button>
      </div>
    );
  }

}

export default FileLoader;
