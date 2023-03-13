
import { useEffect, useState } from 'react'


export default function Dog_Pic() {
    const [link, setLink] = useState('')
   
    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setLink(data.message))
    }, [])
     
   

  return (
    <div>       
       <img src={link} alt="dogggg" className='h-50 w-72'/>
    </div>
  )

  }
