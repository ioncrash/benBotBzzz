'use strict';

const TwitterPackage = require('twitter');
const secret = require('./secret.js');

var Twitter = new TwitterPackage(secret);

const statusUpdate = function(text) {
  Twitter.post('statuses/update', {status: text}, function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
};
{follow: '24913944'}
Twitter.stream('statuses/filter', {track: '@benBotBzzz'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log("someone tweeted at me!")
    let username = "@" + tweet.user.screen_name;
    // console.log(username + " hello to you!");
    statusUpdate(username + " hello to you!");
    // console.log("and he's feelin' goooooood " + username);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

// statusUpdate('test success!');
