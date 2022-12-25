import { linksArray } from './create'


export default function handler(req, res) {
    res.status(200)
   // console.log(linksArray)
   res.status(200).json({message: `${linksArray}`})
}

