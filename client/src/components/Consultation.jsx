import React from 'react'
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function Consultation() {
  return (
    <div className='btn absolute right-7 consultation flex text-white bg-green-700 w-[14rem] h-[3rem]'>
        <div>
            Request A Free Consultation Now
        </div>
        <CallRoundedIcon />
    </div>
  )
}
