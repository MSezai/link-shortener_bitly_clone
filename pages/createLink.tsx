//import { linksArray } from './api/links/create'
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link'


function goHome(router){
  
  router.push('./')  
}


export default function CreateLink() {
    const router = useRouter()  
    const {redirectId} = router.query
    const [redirectID, setRedirectID] = useState(redirectId) 
    const [url, setURL] = useState(null);
   
    

    
    async function fetchLink(redirectId) {
      const res = await fetch("/api/links/view", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(redirectId)
      })
  
      const data = await res.json();
      console.log('fetched data is:', data)
      setURL(data)
    }

      useEffect(() =>{
        fetchLink(redirectID)
      }, [redirectID])
  
  
    return (  
      <main className="w-screen h-screen">
        <div className="w-full h-full flex flex-col align-items-center justify-center gap-5">  
            <div>
              <div className="flex justify-center">
                Here is your shortened URL:  http://localhost:3002/{redirectId}
              </div>
              <br />
              <br />
              <div className="flex justify-center">
                <Link href={`/${redirectId}`}>Click to check if it works: <em> http://localhost:3002/{redirectId}</em></Link>
              </div> 
              <br />
              <br />
              <div className="flex justify-center">
                Original URL:    {url}              <br />
                MetricID: XXX
                </div>
            </div>
            <br />
            <br />   

            <br />
            <br />
            <Button variant="text" size='medium'
                onClick={() => { goHome(router) }}>                      
                <KeyboardDoubleArrowRightIcon />
                Go to Homepage
            </Button>
            <br />
            <br />    
              
        </div>    
      </main>   
      
    )
  }
  



  