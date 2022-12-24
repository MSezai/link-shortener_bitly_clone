
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));

// random number gen  (copied form internet :D)
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // add a check here to control that the generated number is not the same with the ones before, use maybe the db
    return result;
}

let counter = 0;



export default async function handler(req, res) {                                         // I had to add "async" here so that "await" for db.push works 2 lines below
  const data = req.body;  
  //console.log(data)

  const shortenedURL: ShortenedURL = {
    url: data.redirect,
    metricsId: generateString(5),                                 
    redirectId: generateString(5)
  };

  await db.push(`/arraytest/myarray[${counter}]`, shortenedURL , true);
  counter = counter + 1;
    
  var testString = await db.getData("/arraytest/myarray")
  console.log(testString)

  res.status(200).json(shortenedURL)
 
}





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
