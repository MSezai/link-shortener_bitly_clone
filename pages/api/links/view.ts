
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));


export default async function handler(req, response) {    

    let data1 = req.body;  
    console.log("data received by view API:", data1)                                
 
     
    let res2 = 'fake res'
    await db.reload();

//    var testString2 = await db.getData("/testURLDB")
    db.getData("/testURLDB")
    .then(res => { 
        console.log("res esittir: ", res)
        for (const key in res) {

            //console.log(`key is: ${key}:`);
            let obj = res[key]
            //console.log(obj.redirectId)
            if (obj.redirectId == data1) {
                res2 = obj.url
            }
        }

        response.status(200).json(res2) 
        console.log('data sent my view API is: ', res2)
    })
    //console.log(testString2)

   
    
   //console.log('data sent my view API is: ', res2)
    
  //  res.status(200).json(res2) 
   
}
