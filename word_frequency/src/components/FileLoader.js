import React, { Component } from 'react';

class FileLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: React.createRef()
    };
    this.handleFileSelection = this.handleFileSelection.bind(this);
    this.handleFileLoading = this.handleFileLoading.bind(this);
    this.fileInput = React.createRef();
  }

  handleFileSelection(evt){
    const file = this.fileInput.current.files[0];
    this.setState({file: file});
  }

  handleFileLoading(){
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // The json object is just an array of reviews. If json object more complex, add formatting here
      const phrases = JSON.parse(fileReader.result)
      this.props.onLoading(phrases)
    };
    fileReader.readAsText(this.state.file);
  }

  render(){
    return (
      <div>
        <label htmlFor="file-input">Choose reviews: </label>
        <input
          type="file"
          id="file-input"
          accept=".json"
          ref={this.fileInput}
          onChange={this.handleFileSelection}
        />
        <button onClick={this.handleFileLoading}>Submit Reviews</button>
      </div>
    );
  }

}

export default FileLoader;
