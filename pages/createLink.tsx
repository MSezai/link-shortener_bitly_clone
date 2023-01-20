//import { linksArray } from './api/links/create'
import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useRouter } from 'next/router'




function goHome(router){
  
  router.push('./')  
}




export default function CreateLink() {
    const router = useRouter()  
    const {url, metricsId, redirectId} = router.query
  

    return (     
      <div>
        <div>
          shortened URL: localhost:3000/{redirectId}   <br />
          redirect to:      {url}                <br />
          metricID: {metricsId}
        </div>
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
  