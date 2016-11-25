const Promise = require('es6-promise');
const fetch = require('isomorphic-fetch');

export function search(searchTerm) {
  return new Promise(function (resolve, reject) {
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=4`)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from spotify");
            }
            return response.json();
        })
        .then(function(results) {
            resolve(results);
        })
        .catch(function(err){
          reject(err);
        });
  });
}
