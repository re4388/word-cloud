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

let nlpProcessed = ''
let countThreshold = 0


$('.threshold')
  .change(function () {
    var str = "";
    $("select option:selected").each(function () {
      str += $(this).text() + " ";
    });

    countThreshold = str
    console.log(`new threshold: `, countThreshold);
    $('#d3').empty();

    if (nlpProcessed === '') {
      console.log('no data during first load');
    } else {
      const frequencyList = covert2cloudFormat(nlpProcessed, countThreshold)
      drawCloud(frequencyList)
    }

  }).change();



(async () => {
  try {

    /* grab search term */
    // getSearchTerm()



    /* get data from FaunaDB */
    // let externalData = await extractedDataFaunaDB()
    // console.log(`FanuaDB in app.js: `, externalData.substring(0, 200))

    /* get data from firebase storage*/
    let externalData = await extractedData()
    console.log(externalData.substring(0, 200))

    /* nlp process */
    nlpProcessed = allNlpProcess(externalData)

    /* covert to d3-cloud input format */
    const frequencyList = covert2cloudFormat(nlpProcessed, 0)

    /* use d3 to draw word cloud */
    drawCloud(frequencyList)

  } catch (e) {
    console.log('error', e);
  }
})()