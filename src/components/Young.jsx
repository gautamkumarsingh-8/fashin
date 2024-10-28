import React from 'react';
import Girl1 from '../img/Rectangle 50.png';
import Girl2 from '../img/Rectangle 49.png';

const Young = () => {
    return (
        <div>
            <h1 className='md:text-4xl text-3xl font-bold pl-24 md:pl-36'>Young’s Favourite</h1>
            <div className=' max-w-[1240px]  mx-auto justify-center pt-4 md:grid grid-cols-2'>
                <div className='md:ml-0 ml-10 '>
                    <div>
                        <img src={Girl1} className='w-[500px]' />
                    </div>
                    <div className='pl-3'>
                        <h1 className='text-xl font-bold '>Trending on instagram</h1>
                        <p className='text-red-700 font-serif'>Explore Now!</p>
                    </div>
                </div>
                <div className='md:ml-0 ml-10 md:pt-0 pt-2 '>
                    <div>
                        <img src={Girl2} className='w-[500px]' />
                    </div>
                    <div className='pl-3'>
                        <h1 className='text-xl font-bold '>Trending on instagram</h1>
                        <p className='text-red-700 font-serif'>Explore Now!</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Young