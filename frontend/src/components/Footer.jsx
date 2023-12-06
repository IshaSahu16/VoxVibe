import React from 'react'
import VoxVibe_logo from '../assets/VoxVibe_logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-white py-8 md:pt-12 px-4 md:px-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-4 max-w-[600px] md:px-4 '>

                <div className='col-span-2 py-1'>
                    <img src={VoxVibe_logo} className="h-[45px] mb-3" />
                    <h3 className='text-2xl font-semibold md:mt-6'>Contact Us</h3>
                    <h3 className='py-2 text-[#3f3f3f] '>Call : +123 300 123</h3>
                    <h3 className='md:py-2 text-[#3f3f3f]'>VoxVibe is a vibrant blogging community <br></br> where diverse voices converge, <br></br></h3>
                </div>
                
                <div>
                    <h3 className='text-2xl font-semibold'>Explore</h3>
                    <ul className='md:py-6 text-[#6D737A]'>
                        <li className='py-[7px] md:py-2'><Link to="/">Home</Link></li>
                        {/* <li className='py-[7px] md:py-2'>Food Diary</li>
                        <li className='py-[7px] md:py-2'>Exercises</li> */}
                        <li className='py-[7px] md:py-2'><Link to="/Createblog">Create A Blog</Link></li>
                        <li className='py-[7px] md:py-2'><Link to="/Blog">Blogs</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold'>Category</h3>
                    <ul className='md:py-6 text-[#6D737A]'>
                        <li className='py-[7px] md:py-2'>Post Daily Blogs</li>
                        <li className='py-[7px] md:py-2'>Create Your Account</li>
                    </ul>
                </div>

                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-2xl font-semibold'>Subscribe</h3>
                    <h3 className='md:py-3 text-[#3f3f3f]'>Stay informed with our newsletter.<br></br> Get updates, tips, and exclusive content delivered to your inbox.</h3>
                    <form className='py-4'>
                        <input className='bg-[#f2f2f2] p-3 w-full rounded'placeholder='Email here'/>
                        <button className='max-[780px]:w-full my-4 px-3 py-3 md:px-5 rounded-md bg-[#2929ab] text-white font-medium'>Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className='px-1 text-center text-base md:pt-2'>
                <h3 className='text-base'>&#169; 2023 <span className='text-[#FFB703] font-normal'>Designed & Developed</span> With ❤️ By <span className='text-[#FFB703] font-normal'>Isha Sahu</span></h3>
            </div>
        </div>
    )
}

export default Footer