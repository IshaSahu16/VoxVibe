import React from 'react'
import lock from '../assets/lock.svg'
import heroimg_banner from '../assets/heroimg_banner.svg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full py-40 ml-0' style={{backgroundImage: `url(${heroimg_banner})`}}>
        <div className='flex flex-col justify-start gap-[5px] text-center'>    
          <h1 className='md:leading-[72px] md:text-5xl text-4xl font-semibold text-center text-white'>Welcome to the <br /><span className='text-[#FFB703]'>AICTE </span> Portal</h1>
          <p className='pt-5 pb-4 px-4 md:pb-8 mr-18 text:base md:text-lg text-white'>Track your progress, set goals, and achieve your targets with our advanced resources and curriculum.</p>
          <div className='flex justify-center items-center'>
            <button className='flex justify-between items-center bg-transparent text-white px-6 py-2 gap-2 mr-5 rounded-md border border-[#4346fa]'><img src={lock} /><Link to="/Login">Login</Link></button>
            <button className='px-8 py-3 rounded-md bg-[#4346fa] text-white text-sm md:text-[14px] font-semibold mr-3'><Link to="/Signup">Sign Up For Free</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Hero
