import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate()
  return (
    <div className='w-full relative min-h-screen '>
        <div>
            <img className= 'w-screen h-screen' src="/planet.jpg" alt="error" />
        </div>
        <div className='gap-20 flex flex-col justify-center items-center absolute z-10 top-[20%] left-[50%] translate-x-[-50%]'>
            <img className='w-[460px]' src="/logo.png" alt="" />
            <button className='text-white font-bold text-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out px-4 rounded-md' onClick={()=>navigate("/planets")}>
                <p>View Planets</p>
            </button>
        </div>
    </div>
  )
}

export default LandingPage