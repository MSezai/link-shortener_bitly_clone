export default function handler(req, res) {
    res.status(200).json("try 1")
    console.log(req.body)
    
  }