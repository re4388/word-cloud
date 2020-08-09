import {async} from 'regenerator-runtime';
import 'regenerator-runtime/runtime'

import  faunadb  from 'faunadb'

// var createP = client.query(
//   q.Create(q.Collection('tweet'), { data: { testField: 'testValue' } })
// )


const extractedDataFaunaDB = async (collectionName) => {
  let q = faunadb.query
  let client = new faunadb.Client(
    { secret: "fnADyt4HzjACDMyja8lT76ScZokmsCJsYE5Qhul3" })
  // const collectionName = ``;

  const result = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection(collectionName))),
      q.Lambda(x => q.Get(x))
    )
  )
  console.log(result['data'])

  let allText = ''

  result['data'].forEach(item => allText += item.data.textFullText)
  return allText
};


export { extractedDataFaunaDB }

