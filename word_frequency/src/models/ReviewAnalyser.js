const ReviewAnalyser = {
  getWordFrequencies: (phrases) => {
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
}

export default ReviewAnalyser;

function sanitiseWord(word) {
  word = word.toLowerCase();

  // remove all punctuation from end
  word = word.replace(/\W*$/, '')

  // remove all numbers from end
  word = word.replace(/\d*$/, '')

  return word;
}
