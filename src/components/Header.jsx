import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [toogle, setToogle] = useState(false)
    return (
        <div className='p-4 w-[100%] bg-[#fff] shadow fixed top-0'>
            <nav className='max-w-[1240px] py-4  mx-auto flex justify-between '>
                <div className='text-3xl font-bold flex items-center gap-2'>
                    <img src={logo} className='w-[20px]' />  <span>FASHION</span>
                </div>
                {
                    toogle ?
                        <IoMdClose onClick={() => setToogle(!toogle)} className=' md:hidden block text-3xl text-bold text-black' />
                        :
                        <CiMenuFries onClick={() => setToogle(!toogle)}
                            className=' md:hidden block text-3xl text-bold  text-black' />
                }


                <ul className='hidden md:flex gap-10 font-medium pt-2 '>
                    <li>
                        <Link to="catalogue">CATALOGUE </Link>
                    </li>

                    <li>
                        <Link to="fashion">FASHION </Link>
                    </li>

                    <li>
                        <Link to="favourite">FAVOURITE </Link>
                    </li>

                    <li>
                        <Link to="lifestyle"> LIFESTYLE</Link>
                    </li>

                    <li>
                        <Link to="signup" className='bg-[black] text-white p-3 mb-5 rounded'>SING UP </Link>
                    </li>
                </ul>

                {/* Responsive Menu */}
                <ul className={`md:hidden gap-10 bg-[#ffffff] font-medium w-full h-screen fixed top-[100px]
                    ${toogle ? 'left-[0]' : 'left-[100%]'} `}>
                    <li className='p-6'>
                        <Link to="catalogue">CATALOGUE </Link>
                    </li >

                    <li className='p-6'>
                        <Link to="fashion">FASHION </Link>
                    </li>

                    <li className='p-6'>
                        <Link to="favourite">FAVOURITE </Link>
                    </li>

                    <li className='p-6'>
                        <Link to="lifestyle"> LIFESTYLE</Link>
                    </li>

                    <li className='p-6'>
                        <Link to="signup" className='bg-[black] text-white p-3 mb-5 rounded'>SING UP </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Header