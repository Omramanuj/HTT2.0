import React from 'react'
import { useAuth } from '../AdminAuth';


export default function GreetingBox() {
  // const { userDetails } = useAuth();
  return (
    <div className='ml-[4rem]'>
        <div className="name">
            <span className="text-slate-500 font-bold hello">Hello, </span> <b className='text-black font-bold'>{"Saksham Gera"}</b> 👋
        </div>
        <div className="text-slate-400 text-sm greeting">
            fat to slim , eat sleep no exercise
        </div>
    </div>
  )
}
