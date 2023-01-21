
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));


export default async function handler(req, res) {    

    const data = req.body;  
    console.log(data)                                
    
    //await db.push(`/testURLDB/${data.redirect}`, shortenedURL , true);
        
    let res1 = 'fake res'

    var testString = await db.getData("/testURLDB")
    console.log(testString)

    for (const key in testString) {

        console.log(`${key}:`);
        let obj = testString[key]
        console.log(obj.redirectId)
        if (obj.redirectId == data) {
            res1 = obj.url
        }
    }
    
    console.log('fetched url of the redirectID is : ', res1)
    
    res.status(200).json(res1) 
    //console.log(res)
}
