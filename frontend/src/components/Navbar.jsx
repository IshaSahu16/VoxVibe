import React, { useState } from 'react'
import lock from '../assets/lock.svg'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full h-[50px] md:h-[77px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <div><Link to="/">
          <h2 className='text-2xl font-semibold text-[#3c38b4] px-3'>My Home</h2>
          </Link>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center text-lg text-gray-600 font-semibold bg-transparent px-6 gap-2 hover:text-[#4346fa] active:text-[#4346fa]'><Link to="/">Home</Link></button>
          <button className='flex justify-between items-center text-lg text-gray-600 font-semibold bg-transparent px-6 gap-2 hover:text-[#4346fa] active:text-[#4346fa]'>About</button>
          <button className='flex justify-between items-center text-lg text-gray-600 font-semibold bg-transparent px-6 gap-2 hover:text-[#4346fa] active:text-[#4346fa]'><Link to="/Blog">Blogs</Link></button>
          <button className='flex justify-between items-center text-lg text-gray-600 font-semibold bg-transparent px-6 gap-2 hover:text-[#4346fa] active:text-[#4346fa]'>Contact</button>
        </div>

        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'><img src={lock} /><Link to="/Login">Login</Link></button>
          <button className='px-8 py-3 rounded-md bg-[#4346fa] text-white font-semibold mr-3'><Link to="/Signup">Sign Up For Free</Link></button>
          <button className='px-8 py-3 rounded-md bg-[#4346fa] text-white font-semibold mr-3'><Link to="/Createblog">Create a Blog</Link></button>
        </div>

        <div className='md:hidden mx-3' onClick={handleClick}>
          <img src={toggle ? close : hamburger} />
        </div>
      </div>

      <div className={toggle ? 'absolute -10 p-4 bg-white w-full md:hidden' : 'hidden'}>
        <ul>
          <li className='p-4 hover:bg-gray-100 text-sm text-[#3c38b4]'><Link to="/">My Home</Link></li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[#4346fa] flex justify-center items-center bg-transparent px-6 gap-2 text-sm py-2 rounded-md'><img src={lock} /><Link to="/Login">Login</Link></button>
            <button className='px-8 py-3 rounded-md bg-[#4346fa] text-white font-bold text-sm'><Link to="/Login">Sign Up For Free</Link></button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
