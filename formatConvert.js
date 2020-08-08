
/* covert to d3-cloud format */

function covert2cloudFormat(data, wordCountThreshold) {
  // const wordCountThreshold = 0
  const frequency_list = [];

  for (let key in data) {
    if ( data[key] > wordCountThreshold) {
      let tempObject = {};
      let textSizeFactor = 4;
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