import {async} from 'regenerator-runtime';
import 'regenerator-runtime/runtime'

import  faunadb  from 'faunadb'

// var createP = client.query(
//   q.Create(q.Collection('tweet'), { data: { testField: 'testValue' } })
// )


const extractedDataFaunaDB = async () => {

//   const query = `
//   query {
//     allTweets {
//       data {
//         textFullText
//       }
//     }
//   }
// `
//   let result = ''

//   apolloFetch(query )
//   .then(res => result = res)
//   .catch( e => console.log(e));

//   console.log(`FanuaDB: `,result.substring(0,200));
  let q = faunadb.query
  let client = new faunadb.Client({ secret: "fnADyt4HzjACDMyja8lT76ScZokmsCJsYE5Qhul3" })
  // const result = await client.query(
  //   q.Paginate(q.Collections())
  // )

  const result = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('tweet'))),
      q.Lambda(x => q.Get(x))
    )
  )
  console.log(result['data'])

  let allText = ''

  result['data'].forEach(item => allText += item.data.textFullText[0])
  return allText
};


export { extractedDataFaunaDB }

