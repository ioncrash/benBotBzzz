'use strict';

const spiels = require('./spiels.js');

const readString = (text) => {
  // let words = text.replace(/[,!?]/g,"");
  let words = text.replace(/[,.!?]/g, '').toUpperCase().split(' ');
  let hits = [];
  words.forEach((e) => {
    if (spiels[e]) {
      hits.push(spiels[e])
    }
  })
  if (hits.length === 0) {
    hits.push(spiels['HELLO']);
  }
  return hits;
};

module.exports = readString;
