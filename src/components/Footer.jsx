import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='p-4  md:mt-80'>
            <div className='max-w-[1240px] b mx-auto text-black sm:grid-cols-1  grid  md:grid-cols-2 lg:grid-cols-5 gap-8'>
                <div className='pl-16   h-[300px] md:col-span-2 sm:col-span-1'>
                    <h1 className='text-3xl font-bold py-8'>FASHION.</h1>
                    <p className=' '>
                        Complete your style with awesome <br /> clothes from us.
                    </p><br />
                    <p>Credit by Gautam Singh.</p>
                    <div className='flex justify-start pt-10 gap-4'>
                        <FaFacebookSquare className='text-5xl bg- rounded' />
                        <FaInstagramSquare className='text-5xl rounded' />
                        <FaTwitterSquare className='text-5xl rounded' />
                        <FaLinkedin className='text-5xl  rounded' />
                    </div>

                </div>
                <div className='col-span-1 text-center mt-8'>
                    <h1 className='text-xl font-bold '>Company</h1>
                    <div className=" mt-4 ">
                        <p className='mt-4'>About</p>
                        <p className='mt-4'>Contact us</p>
                        <p className='mt-4'>Support</p>
                        <p className='mt-4'>Careers</p>
                    </div>
                </div>
                <div className=' col-span-1 text-center mt-8'>
                    <h1 className='text-xl font-bold '>Quick Link</h1>
                    <div className="mt-4 ">
                        <p className='mt-4'>Share Location</p>
                        <p className='mt-4'>Orders Tracking</p>
                        <p className='mt-4'>Size Guide</p>
                        <p className='mt-4'>FAQs</p>
                    </div>
                </div>
                <div className='col-span-1 text-center mt-8'>
                    <h1 className='text-xl font-bold '>Legal</h1>
                    <div className=" mt-4 ">
                        <p className='mt-4'>Careers</p>
                        <p className='mt-4'>Privacy Policy</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer