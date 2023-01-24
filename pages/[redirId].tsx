import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState, useEffect } from 'react';


    




export default function Post()  {
  const router = useRouter()
  const [url1, setURL1] = useState(null)
  const [dogURL, setDogURL] = useState("https://images.dog.ceo/breeds/african/n02116738_6283.jpg")
  const { redirId } = router.query

  console.log("redirId is: ", redirId)

  function goHome(router){
  
    router.push('./')  
  }

  
  async function fetchLink(redirId) {
    const res = await fetch("/api/links/view", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(redirId)
    })
  
    const data = await res.json();
    console.log('fetched data is:', data)
    setURL1(data)
  }
 
  //fetchLink(redirId)

  useEffect((url1) => {
    console.log("helllooo")
    //console.log(url1)
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => setDogURL(json))

   // console.log(dogURL)
    let ext = "questions/503093/"
    
    setTimeout(() => { window.location.replace(`https://stackoverflow.com/${ext}`);}, 5000);  
      
  }, [])

  console.log("dog url = ", dogURL)


  return (
    <div>
      <p>shortened link: {redirId}</p>
      <p>original link: {url1} </p>
      <Button variant="text" size='medium'
            onClick={() => {fetchLink(redirId) }}>                      
            <KeyboardDoubleArrowRightIcon />
            fetch original link
        </Button>
      <Button variant="text" size='medium'
            onClick={() => { goHome(router) }}>                      
            <KeyboardDoubleArrowRightIcon />
            Go to Homepage
        </Button>
      <div>
        <img src={dogURL.message} alt="dog pic" />
      </div>
    </div>
  
  ) 
}
