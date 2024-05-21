#!/usr/bin/node
const request = require('request');

const episodeId = process.argv[2];

if (parseInt(episodeId)) {
  const url = 'https://swapi-api.alx-tools.com/api/films/:id' + episodeId;

  request(url, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(JSON.parse(body).title);
  });
}
