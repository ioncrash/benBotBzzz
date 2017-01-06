'use strict';

const secret = require('./secret.js');
const TwitterPackage = require('twitter');
const Twitter = new TwitterPackage(secret);

let readString = require('./readString.js');

const statusUpdate = (text) => {
  Twitter.post('statuses/update', {status: text}, function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
};

Twitter.stream('statuses/filter', {track: '@benBotBzzz'}, function(stream) {
  stream.on('data', function(tweet) {
    let spiels = readString(tweet.text);
    
    })


    // let username = "@" + tweet.user.screen_name;
    // statusUpdate(username + " hello to you!");
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

// statusUpdate('test success!');
