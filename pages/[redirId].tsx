import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState, useEffect } from 'react';
import Dog_pic from './components/Dog_pic'



export default function Post()  {
  const router = useRouter()
  const [url1, setURL1] = useState(null)
  const [counter, setCounter] = useState(5)
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
    //console.log('fetched data is:', data)
    setURL1(data)

  }
 
  useEffect(() => {
        
            setTimeout(() => {           
              setCounter(counter - 1)
                if (counter == 2) {
                  window.location.href = `${url1}`
              }         
            }, 1000); 
           

  }, [counter])


  useEffect(() => {
    console.log("useEffect run")   

    if(redirId != undefined)
      fetchLink(redirId)
         
  }, [redirId])


  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex flex-col align-items-center justify-center gap-5">
        
          <div className="flex justify-center">
          Shortened link: {redirId}
          </div> 
          <div  className="flex justify-center">
          Original link: {url1}
          </div> <br /> <br />
          
          <div className="flex justify-center"> 
          You will be redirected in {counter} seconds... 
          </div> <br />
          <div className="flex justify-center"><Dog_pic/></div>
          
    
          <Button variant="text" size='medium'
                onClick={() => { goHome(router) }}>                      
                <KeyboardDoubleArrowRightIcon />
                Go to Homepage
          </Button>  
      </div>
      
    </main>
  ) 
}
