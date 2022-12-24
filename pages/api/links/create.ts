
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

    return result;
}

let counter = 0;



export default async function handler(req, res) {                                         // I had to add "async" here so that "await" for db.push works 2 lines below
  const data = req.body;  
  //console.log(data)

  await db.push(`/arraytest/myarray[${counter}]`, data , true);
  
  counter = counter + 1;
    
  var testString = await db.getData("/arraytest/myarray")
  console.log(testString)

  res.status(200).json({result: "response from create api"})
 
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
