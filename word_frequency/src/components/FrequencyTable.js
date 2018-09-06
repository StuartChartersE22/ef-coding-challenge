import React from 'react';

const FrequencyTable = (props) => {

  const words = getWordFrequencies(props.phrases)
  const tableRows = Object.keys(words).map((word, index) => {
    if(!word) return;
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
