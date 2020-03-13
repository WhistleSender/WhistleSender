const fs = require('fs-extra');
const path = require('path');
const nodeFetch = require('node-fetch');
const awaitWriteStream = require('await-stream-ready').write;

const DATA_INDEX = require('../data/index');

async function fetch() {
  let response = await nodeFetch(DATA_INDEX.DATA.fetch_url);
  let file = fs.createWriteStream(DATA_INDEX.DATA.path);
  await awaitWriteStream(response.body.pipe(file));
  console.log(`Fetch succeed!`);
}
fetch();
