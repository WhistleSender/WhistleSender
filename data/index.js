var path = require('path');
var fs = require('fs-extra');
require.extensions['.csv'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

let DATA = '';
try {
  DATA = require('./data.csv');
} catch (e) {}

module.exports = {
  DATA: {
    data: DATA,
    path: path.resolve(__dirname, 'data.csv'),
    fetch_url:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQXRU166iJUb3AOU65xRR3P81wTfLSPhxqqB97-3lUDHAN9B3-lx_BPoAe8ZvEptwge00k1xAulm2Ok/pub?gid=0&single=true&output=csv'
  }
};
