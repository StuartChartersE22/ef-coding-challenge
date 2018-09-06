import React, { Component } from 'react';

const FrequencyTable = (props) => {

  const words = getWordFrequencies(props.phrases)
  console.log(words);

  return (
    <table id="freq-table">
      <tbody>

      </tbody>
    </table>
  );
};

export default FrequencyTable;

function getWordFrequencies(phrases) {
  return phrases.reduce((words, phrase) => {
    const phraseArray = phrase.split(' ')
    phraseArray.forEach((word) => {
      word = sanitiseWord(word);
      if (words[word]){
        words[word] += 1
      }else{
        words[word] = 1
      }
    });
    return words;
  }, {});
}

function sanitiseWord(word) {
  word = word.toLowerCase();
  word = word.replace(/\W*$/, '')
  word = word.replace(/\d*/, '')
  return word;
}
