import { RedirectedLink } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';

let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));



export default async function handler(req, res) {                     // I had to add "async" here so that "await" for db.push works 2 lines below
  const data = req.body;  
  const object = data as RedirectedLink;
  await db.push(`/test3/${data.redirect}`, object);
  var result = await db.getData("/test3");


  var alldata = await db.getData("/test3");
  console.log(alldata)

  res.status(200).json({result: "result"})
 
}


