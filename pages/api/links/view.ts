
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));



export default async function handler(req, res) {    

    let data1 = req.body;  
    console.log(data1)                                
 
    //await db.push(`/testURLDB/${data.redirect}`, shortenedURL , true);
        
    let res2 = 'fake res'

    var testString = await db.getData("/testURLDB")
    console.log(testString)

    for (const key in testString) {

        //console.log(`key is: ${key}:`);
        let obj = testString[key]
        //console.log(obj.redirectId)
        if (obj.redirectId == data1) {
            res2 = obj.url
        }
    }
    
   console.log('fetched url of the redirectID is : ', res2)
    
    res.status(200).json(res2) 
   
}
