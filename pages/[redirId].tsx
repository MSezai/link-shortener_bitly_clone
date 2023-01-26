import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState, useEffect } from 'react';


    




export default function Post()  {
  const router = useRouter()
  const [url1, setURL1] = useState(null)
  const [counter, setCounter] = useState(5)
 // const [dog_url, setDogURL] = useState("https://images.dog.ceo/breeds/basenji/n02110806_3006.jpg")
 
  const { redirId } = router.query
  console.log("redirId is: ", redirId)

  function goHome(router){  
    router.push('./')  
  }

  // fetch("https://dog.ceo/api/breeds/image/random")
  // .then(res => res.json())
  // .then(data => setDogURL(data.message))
  
  async function fetchLink(redirId) {
    const res = await fetch("/api/links/view", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(redirId)
    })
  
    const data = await res.json();
    //console.log('fetched data is:', data)
    setURL1(data)

    for(let i = 5; i>0; i--) {
         setTimeout(() => {           
          setCounter(counter - 1)
          if (counter == 2) {
            window.location.assign(`http://${url1}`)  
          }          
        }, 1000); 
    }    
  }
 



  useEffect(() => {
    console.log("useEffect run")   

    fetchLink(redirId)  
         
  }, [url1, redirId, counter])


  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex flex-col align-items-center justify-center gap-5">
        
          <div className="flex justify-center">
          Shortened link: {redirId}
          </div> 
          <div  className="flex justify-center">
          Original link: {url1}
          </div> <br /> <br />
          <div className="flex justify-center"> <img src="https://random.imagecdn.app/v1/image?width=500&height=150" alt="dog picture"  /></div>
         
          <div className="flex justify-center"> 
          You will be redirected in {counter} seconds... 
          </div> <br />
          
    
          <Button variant="text" size='medium'
                onClick={() => { goHome(router) }}>                      
                <KeyboardDoubleArrowRightIcon />
                Go to Homepage
          </Button>  
      </div>
      
    </main>
  ) 
}
