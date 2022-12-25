
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
import { shouldForwardProp } from '@mui/styled-engine';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));



// random number gen  (copied form internet :D)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let counter = 1;

async function generateString(length: number) {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  // add a check here to control that the generated number is not the same with the ones before, use maybe the db

  await db.push(`/testStringDB[0]`, "fake string", true);                  // to initialize the testStringDB[0]
  var testString = await db.getData("/testStringDB");

  if (!testString.includes(result)) {
    await db.push(`/testStringDB[${counter}]`, result, true);
  } else {
    console.log("this string exists in the array already!")                 // ToDO: add something here like repeat from beginning
  }


  counter = counter + 1;

  var testString = await db.getData("/testStringDB")
  console.log(testString)

  return result;
}



export default async function handler(req, res) {                                         // I had to add "async" here so that "await" for db.push works 2 lines below
  const data = req.body;
  //  console.log(data)

  //await db.delete("/");                                          // for cleaning up


  const string1 = await generateString(5);
  const string2 = await generateString(5);

  const shortenedURL: ShortenedURL = {
    url: data.redirect,
    metricsId: string1,
    redirectId: string2
  }

  await db.push(`/testURLDB/${shortenedURL.redirectId}`, shortenedURL, true);

  // var testString = await db.getData("/")
  // console.log(testString)

  res.status(200).json(shortenedURL)

}



// old random number gen uniqueness check code to archive

/*
async function generateUniqueString(): Promise<string> {
  const newString = generateString(5);
  console.log(newString)

  // check if the newString is in the arraytest/randomStrings array already
  if()


  await db.push(`/arraytest/randomStrings[${counter1}]`, newString, true);
  counter1 = counter1 + 1;

  var testString1 = await db.getData("/arraytest/randomStrings")
  console.log(testString1)



  return newString
}

*/







// old db code to archive:

/*

await db.push(`/test3/${data.redirect}`, data);                   
var result = await db.getData("/test3");

var alldata = await db.getData("/test3/url2");
//var alldata = await db.getData("/test3/url1");
//console.log(alldata)
//await db.delete("/");
console.log(alldata)
// const randomString = generateString(5);
// await db.push(`/test

*/
