import React from 'react';
import company from '../img/Frame 8.png';

const Company = () => {
  return (
    <div className=' w-[400px]  md:w-[100%] bg-[#E6C744] rounded p-3 pl-8 mt-4 '>
        <div className='flex justify-center '>
            <img src={company} className='md:w-[1200px] w-[300px]'/>
        </div>
    </div>
  )
}

export default Company