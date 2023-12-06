import React from 'react'
import lock from '../assets/lock.svg'
import blogbanner from '../assets/blogbanner.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full py-[7rem] ml-0' style={{backgroundImage: `url(${blogbanner})`}}>
        <div className='flex flex-col justify-start gap-[5px] text-center'>    
          <h1 className='md:leading-[72px] md:text-5xl text-4xl font-semibold text-center text-[#FFB703]'>Welcome to <span className='text-[#FFB703]'>VoxVibe </span></h1>
          <p className='pt-5 pb-4 px-4 md:pb-8 mr-18 text:base font-medium md:text-lg text-white'> Unleash Your Voice, Connect Through Stories – Where Every Word Resonates in a Symphony of Expression.</p>
          <div className='flex justify-center items-center'>
            <button className='flex justify-between items-center bg-transparent font-medium text-white px-6 py-2 gap-2 mr-5 rounded-md border border-[#4346fa]'><img src={lock} /><Link to="/Login">Login</Link></button>
            <button className='px-8 py-3 rounded-md bg-[#4346fa] text-white font-medium text-sm md:text-[14px] font-semibold mr-3'><Link to="/Signup">Sign Up For Free</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Hero
