import { Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import { RedirectedLink } from '../types/LinksTypes'
import { useRouter } from 'next/router'


async function submit(input: string,
  metrics: boolean,
  del_: boolean,
  router: any,
  setResponse: (s: any) => void) {
  const payload: RedirectedLink = {
    redirect: input,
    lifetime: del_ ? "once" : "infinite",
    collect: metrics ? ["visitors", "os"] : []
  };
   console.log(payload);
  const res = await fetch("/api/links/create", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })

  const data = await res.json();
  console.log(data)


  
  //router.push('/createLink?id=1')                                           // just changes the view to another /xyz and doesnt ask the server for another route like in express ??
  
}

export default function Home() {                                                                           //  Home() is a function component in React
  const [urlInput, setUrlInput] = useState<string>("");
  const [metricSwitch, setMetricSwitch] = useState<boolean>(false);
  const [deleteSwitch, setDeleteSwitch] = useState<boolean>(false);
  const router = useRouter()                                                                               // useRouter() has to be defined under a function component

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex flex-col align-items-center justify-center gap-5">
        <div className="flex justify-center">
          <Typography variant='h3'
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            Shorten URLs for FREE!
          </Typography>
        </div>
        <div className='flex flex-row justify-center gap-2'>
          <div className="w-96">
            <TextField
              defaultValue={urlInput}
              autoFocus={true}
              placeholder="Input URL"
              onChange={(event) => { setUrlInput(event.target.value) }}
              fullWidth
            />
          </div>
          <Button variant="text" size='medium'
            onClick={() => { submit(urlInput, metricSwitch, deleteSwitch, router, (item) => { console.log("Recv", item) }) }}>                      
            <KeyboardDoubleArrowRightIcon />
            Go
          </Button>
        </div>
        <div className='flex justify-center'>
          <FormGroup sx={{ flexDirection: 'row' }}>
            <FormControlLabel control={
              <Switch checked={metricSwitch}
                onChange={(event) => setMetricSwitch(event.target.checked)} />
            }
              label="Collect Metrics" />
            <FormControlLabel control={
              <Switch checked={deleteSwitch}
                onChange={(event) => setDeleteSwitch(event.target.checked)} />
            }
              label="Delete after open" />
          </FormGroup>      
        </div>
      </div>
    </main>
  )
}
