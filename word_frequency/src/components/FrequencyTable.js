import '../style/FrequencyTable.css'
import React from 'react';

const FrequencyTable = (props) => {

  const sortedWords = sortWords(props.words)
  const tableRows = sortedWords.map((word, index) => {
    return (
      <tr key={index} className="word-frequency">
        <td className="word">
          {word}
        </td>
        <td className="frequency">
          {props.words[word]}
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

function sortWords(words) {
  return Object.keys(words).sort((word1, word2) => words[word2] - words[word1]);
}
