function ransomNote(noteStr, articleStr) {
  const noteArr = noteStr.split(' ');
  const articleArr = articleStr.split(' ');
  let articleObj = {};
  let result = true;

  articleArr.forEach(word => {
    if (!articleObj[word]) {
      articleObj[word] = 0;
    }
    articleObj[word]++;
  })
  
  noteArr.forEach(word => {
    if (articleObj[word] > 0) {
      articleObj[word]--;
    } else {
      result = false;
    }
  })
  return result;
}

const str = 'Given an arbitrary ransom note string and another string containing letters from all the magazines';

console.log(ransomNote('ransom note', str));
console.log(ransomNote('ransom note note', str));