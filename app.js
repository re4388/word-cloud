// https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import 'regenerator-runtime/runtime'
import {
  async
} from 'regenerator-runtime';

import cloud from './node_modules/d3-cloud/build/d3.layout.cloud'
import {
  firestoreLocationPath,
  firestoreFileName
} from './config'
import {
  getSearchTerm
} from './getSearchTerm'
import {
  extractedData
} from './getDataFromFirestorage'
import {
  allNlpProcess
} from './nlpJob'
import {
  covert2cloudFormat
} from './formatConvert'
import {
  drawCloud
} from './drawcloud';

import {
  extractedDataFaunaDB
} from './getDataFaunaDB'
import {
  data
} from 'jquery';

let externalData = ''
let nlpProcessed = ''
let searchTerm = 'covid19'
let countThreshold = 1
let textSizeFactor = 12

/* assemble pipeline */
const main = async (searchTerm, countThreshold, textSizeFactor) => {
  try {
    /* get data from FaunaDB */
    externalData = await extractedDataFaunaDB(searchTerm)
    // console.log(externalData.substring(0, 200))
    nlpProcessed = allNlpProcess(externalData)

    let frequencyList = covert2cloudFormat(
      nlpProcessed, countThreshold, textSizeFactor)

    drawCloud(frequencyList)

  } catch (e) {
    console.log('error', e);
  }
}

/* run the code! */
(async () => {
  await main(searchTerm, countThreshold, textSizeFactor)
})()


$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function () {
  $('form.login').on('submit', async function (e) {
    e.preventDefault();
    var formData = $(this).serializeObject();
    console.log(formData);
    // $('.datahere').html(JSON.stringify(formData));
    textSizeFactor = formData['wordSize']
    searchTerm = formData['searchTerm']
    countThreshold = formData['threshold']
    console.log(textSizeFactor, searchTerm, countThreshold);

    // clear DOM
    $('#d3').empty();

    /* re-draw cloud */
    if (nlpProcessed === '') {
      console.log('no data during first load222');
    } else {
      await main(searchTerm, countThreshold, textSizeFactor)
    }
  });
});