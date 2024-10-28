import React from 'react';
import girl1 from '../img/Rectangle 20.png';
import girl2 from '../img/Rectangle 21.png';
import girl3 from '../img/Rectangle 22.png';
import { IoIosArrowRoundForward } from "react-icons/io";

const Girlcard = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold md:ml-32 ml-14 pt-6'>NEW ARRIVALS</h1><hr className='w-[270px] ml-32' /><br />
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3'>
                <div className=' md:p-9 p-14'>
                    <div className='md:w-[250px] w-[300px] '>
                        <img src={girl1} />
                    </div>
                    <div className=' pt-2'>
                        <h1 className='text-lg font-bold font-serif'>Hoodies & Sweetshirt</h1>
                        <p className='flex items-start text-red-600 ' >Explore Now! <IoIosArrowRoundForward className=' font-bold text-3xl text-black' /> </p>
                    </div>

                </div>
                <div className='md:p-9 p-14'>
                        <div className='md:w-[250px] w-[300px] '>
                            <img src={girl2} />
                        <div className='pt-2'>
                            <h1 className='text-lg font-bold font-serif'>Hoodies & Sweetshirt</h1>
                            <p className='flex items-start text-red-600 ' >Explore Now! <IoIosArrowRoundForward className='font-bold text-3xl  text-black' /> </p>
                        </div>

                    </div>
                </div>
                <div className='md:p-9 p-14'>
                    <div className='md:w-[250px] w-[300px] '>
                        <img src={girl3} />
                    </div>
                    <div className='pt-2'>
                        <h1 className='text-lg font-bold font-serif'>Hoodies & Sweetshirt</h1>
                        <p className='flex items-start text-red-600 ' >Explore Now! <IoIosArrowRoundForward className='font-bold text-3xl  text-black' /> </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Girlcard