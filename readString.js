'use strict';

const readString = (text) => {
  // let words = text.replace(/[,!?]/g,"");
  let words = text.replace(/[,.!?]/g, '').toUpperCase().split(' ');
  // if (words.includes('Pillyfish'))
  return words;
};

module.exports = readString;
