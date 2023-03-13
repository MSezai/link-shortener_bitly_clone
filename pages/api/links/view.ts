
// types imports
import { RedirectedLink, ShortenedURL } from '../../../types/LinksTypes'

// node-json-db
import { JsonDB, Config } from 'node-json-db';
export let db = new JsonDB(new Config("myLinksDataBase", true, false, '/'));


export default async function handler(req: any, response: any) {

    let data1 = req.body;
    console.log("data received by view API:", data1)


    let res2 = 'fake res'
    await db.reload();

    //    var testString2 = await db.getData("/testURLDB")


    const data = await db.getData(`/testURLDB/${data1}`);
    console.log("res esittir: ", data)
    res2 = data.url
    response.status(200).json(res2)
    console.log('data sent my view API is: ', res2)
    //console.log(testString2)



    //console.log('data sent my view API is: ', res2)

    //  res.status(200).json(res2) 

}
