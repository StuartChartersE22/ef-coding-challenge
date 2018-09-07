import React from 'react';
import '../style/WordCloud.css';
import WordCloud from 'react-d3-cloud';

const WordCloudDisplay = (props) => {

  const words = formatWords(props.words)
  const fontSizeMapper = (word) => {
    return word.value * 20;
  }

  return (
    <WordCloud
    data={words}
    fontSizeMapper={fontSizeMapper}
  />
  );
}

export default WordCloudDisplay;

function formatWords(words) {
  return Object.keys(words).map((word) => {
    return {text: word, value: words[word]};
  });
}
