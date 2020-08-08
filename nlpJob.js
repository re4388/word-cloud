import 'regenerator-runtime/runtime'
import posTagger from 'wink-pos-tagger'
import nlp from 'wink-nlp-utils'
import tokenize from 'wink-nlp-utils/src/string-tokenize'
import {async} from 'regenerator-runtime';



function dataClearning(data) {
  let a = nlp.string.retainAlphaNums(data)
  let b = nlp.string.removeSplChars(a)
  let c = nlp.string.removeElisions(b)
  let d = nlp.string.removePunctuations(c)
  let afterCleanData = nlp.string.removeExtraSpaces(d)
  return afterCleanData
}


function tokenizeData(data) {
  var tagger = posTagger()
  const posResult0 = tagger.tagSentence(data);
  const getNNObj = posResult0.filter((ele) => ele.pos === 'NN')
  const NNAry = getNNObj.map((ele) => ele.value)
  // console.log(NNAry)
  const getVBObj = posResult0.filter((ele) => ele.pos === 'VB')
  const VBAry = getVBObj.map((ele) => ele.value)
  // console.log(VBAry)
  const allWord = [...NNAry, ...VBAry]

  return allWord
}


function cleanTokenize(data) {
  const result = data.filter((ele) => ele !== 'be' && ele !== 're')
  return result
}


function bagOfWord(data) {
  const result = nlp.tokens.bagOfWords(data);
  return result
}


function allNlpProcess(data) {
  const tmp1 = dataClearning(data);
  const tmp2 = tokenizeData(tmp1);
  const tmp3 = cleanTokenize(tmp2)
  const tmp4 = bagOfWord(tmp3)
  console.log(`Before feed in d3-cloud`, tmp4);
  return tmp4
}


export { allNlpProcess }



/* clearning */
// let a = nlp.string.retainAlphaNums(externalData)
// let b = nlp.string.removeSplChars(a)
// let c = nlp.string.removeElisions(b)
// let d = nlp.string.removePunctuations(c)
// let afterCleanData = nlp.string.removeExtraSpaces(d)


/* use POS to get more sensible words */
// var tagger = posTagger()
// const posResult0 = tagger.tagSentence(afterCleanData);
// const getNNObj = posResult0.filter((ele) => ele.pos === 'NN')
// const NNAry = getNNObj.map((ele) => ele.value)
// // console.log(NNAry)
// const getVBObj = posResult0.filter((ele) => ele.pos === 'VB')
// const VBAry = getVBObj.map((ele) => ele.value)
// // console.log(VBAry)
// const allWord = [...NNAry, ...VBAry]

/* TODO: just to filter out one word here, `be`, but we can do more or in a more systematic way */
// const allWord2 = allWord.filter((ele) => ele !== 'be' && ele !== 're')


/* get bag of word */
// const obj1 = nlp.tokens.bagOfWords(allWord2);