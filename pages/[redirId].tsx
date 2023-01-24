import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState, useEffect } from 'react';


    




export default function Post()  {
  const router = useRouter()
  const [url1, setURL1] = useState(null)
 
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
    setTimeout(() => { 
      console.log("!!! url1: ", url1)
      window.location.assign(`https://${url1}`)
    }, 5000); 
  }
 

  useEffect(() => {
    console.log("helllooo")
    console.log("redirect to the url: ", url1)

    fetchLink(redirId)

    console.log("redirect to the url: ", url1)

   // console.log(dogURL)
    let ext = "questions/503093/"
    
    // setTimeout(() => { 
    //   console.log("!!! url1: ", url1)
    //   window.location.href = url1
    // }, 5000);  
      
  }, [url1, redirId])


  return (
    <div>
      <p>shortened link: {redirId}</p>
      <p>original link: {url1} </p>
      {/* <Button variant="text" size='medium'
            onClick={() => {fetchLink(redirId) }}>                      
            <KeyboardDoubleArrowRightIcon />
            fetch original link
        </Button> */}
      <Button variant="text" size='medium'
            onClick={() => { goHome(router) }}>                      
            <KeyboardDoubleArrowRightIcon />
            Go to Homepage
        </Button>
     
    </div>
  
  ) 
}
