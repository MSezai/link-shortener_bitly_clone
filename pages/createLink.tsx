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
    const [link, setLink] = useState(null);
    

    
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
        fetchLink(redirectId)
      }, [redirectID])
  
  
    return (     
      <div>        
        <div>
          shortened URL:  http://localhost:3000/{redirectId}<br /> <br />
          <Link href={`/${redirectId}`}><em>click to check if it works: http://localhost:3000/{redirectId}</em></Link> <br /><br />
          original url:    {url}              <br />
          metricID: XXX
        </div>
        <br />
        <br />   
{/*               
        <Button variant="text" size='medium'
            onClick={() => {fetchLink(redirectId) }}>                      
            <KeyboardDoubleArrowRightIcon />
            fetch link
        </Button> */}
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
    )
  }
  



  