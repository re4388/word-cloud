import posTagger from 'wink-pos-tagger'
import nlp from 'wink-nlp-utils'
// import Canvas  from 'canvas';
import cloud from './node_modules/d3-cloud/build/d3.layout.cloud'



/* Get data */
// TODO: will get data from another place
import {
  data
} from './data';


/* clearing */
let a = nlp.string.retainAlphaNums(data)
let b = nlp.string.removeSplChars(a)
let c = nlp.string.removeElisions(b)
let d = nlp.string.removePunctuations(c)
let afterCleanData = nlp.string.removeExtraSpaces(d)


/* use POS to get more sensible words */
var tagger = posTagger()
const posResult0 = tagger.tagSentence(afterCleanData);
const getNNObj = posResult0.filter((ele) => ele.pos === 'NN')
const NNAry = getNNObj.map((ele) => ele.value)
// console.log(NNAry)
const getVBObj = posResult0.filter((ele) => ele.pos === 'VB')
const VBAry = getVBObj.map((ele) => ele.value)
// console.log(VBAry)
const allWord = [...NNAry, ...VBAry]

/* TODO: just to filter out one word here, `be`, but we can do more or in a more systematic way */
const allWord2 = allWord.filter((ele) => ele !== 'be')


/* get bag of word */
const obj1 = nlp.tokens.bagOfWords(allWord2);


/* create d3-format */
let frequency_list = []
for (let key in obj1) {
  if (obj1[key] > 2) {
    let o = {};
    o.text = key
    o.size = obj1[key] * 4
    frequency_list.push(o)
  }
}

/* use d3 to draw word cloud */
var color = d3.scale.linear()
  .domain([0, 1, 2, 3, 4, 5, 6, 10, 15, 20, 100])
  .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

cloud().size([800, 300])
  .words(frequency_list)
  .rotate(0)
  .fontSize(function (d) {
    return d.size;
  })
  .on("end", draw)
  .start();

function draw(words) {
  d3.select("body").append("svg")
    .attr("width", 850)
    .attr("height", 350)
    .attr("class", "wordcloud")
    .append("g")
    // without the transform, words words would get cutoff to the left and top, they would
    // appear outside of the SVG area
    .attr("transform", "translate(320,200)")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function (d) {
      return d.size + "px";
    })
    .style("fill", function (d, i) {
      return color(i);
    })
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function (d) {
      return d.text;
    });
}