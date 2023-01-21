//import { linksArray } from './api/links/create'
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useRouter } from 'next/router'
import { useState } from 'react';



function goHome(router){
  
  router.push('./')  
}


export default function CreateLink() {
    const router = useRouter()  
    const {redirectId} = router.query
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
    

    return (     
      <div>
        <div>
          shortened URL: localhost:3000/{redirectId}   <br />
          redirect to:    {url}              <br />
          metricID: XXX
        </div>
        <br />
        <br />       
        <Button variant="text" size='medium'
            onClick={() => { fetchLink(redirectId) }}>                      
            <KeyboardDoubleArrowRightIcon />
            Fetch the link
        </Button>
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
  