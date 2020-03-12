const fs = require('fs-extra');
const path = require('path');
const Papa = require('papaparse');

const DATA_INDEX = require('../data/index');
const ASSETS = fs.readdirSync(path.resolve(__dirname, '../archive'));
const PUBLIC_PATH = 'https://raw.githubusercontent.com/WhistleSender/WhistleSender/master/archive/';

async function build() {
  let csv = fs.readFileSync(DATA_INDEX.DATA.path, 'utf8');
  let { data } = Papa.parse(csv, { skipEmptyLines: true, header: true });
  let assetCount = 0;
  for (entry of data) {
    let id = entry['id'];
    // console.log(id);
    if (id !== '') {
      let asset = ASSETS.find((a) => a.split('.')[0] === id);
      if (!asset) {
        // console.log(`Asset Missing: ${id}`);
      } else {
        assetCount++;
      }
      entry['Screenshot / Other Assets'] = `${PUBLIC_PATH}${asset}`;
    }
  }
  csv = Papa.unparse(data);
  fs.writeFileSync(DATA_INDEX.DATA.path, csv);
  console.log(`Build CSV succeed! Assets Found: ${assetCount}/${data.length}.`);
}
build();
