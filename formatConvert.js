
/* covert to d3-cloud format */

function covert2cloudFormat(data, wordCountThreshold, textSizeFactor) {
  // const wordCountThreshold = 0
  const frequency_list = [];

  for (let key in data) {
    if ( data[key] > wordCountThreshold) {
      let tempObject = {};
      // let textSizeFactor = 10;
      tempObject.text = key;
      tempObject.size = data[key] * textSizeFactor;
      frequency_list.push(tempObject);
    }
  }
  return frequency_list
}

export {
  covert2cloudFormat
}