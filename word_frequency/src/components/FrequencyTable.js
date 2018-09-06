import '../style/FrequencyTable.css'
import React from 'react';

const FrequencyTable = (props) => {

  const words = getWordFrequencies(props.phrases)
  const sortedWords = sortWords(words)
  const tableRows = sortedWords.map((word, index) => {
    return (
      <tr key={index} className="word-frequency">
        <td className="word">
          {word}
        </td>
        <td className="frequency">
          {words[word]}
        </td>
      </tr>
    );
  })

  return (
    <table id="freq-table">
      <thead>
        <tr>
          <th>Word</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
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
      if(!word) return words;
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

  // remove all punctuation from end
  word = word.replace(/\W*$/, '')

  // remove all numbers from end
  word = word.replace(/\d*$/, '')

  return word;
}

function sortWords(words) {
  return Object.keys(words).sort((word1, word2) => words[word2] - words[word1]);
}
