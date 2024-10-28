import React from 'react';
import girl from "../img/girl.png";
import girlh from "../img/girl1..png";

const Banner = () => {
  return (

    <div className='bg-[#f7f6f6fd] md:ml-24 ml-10 rounded-3xl shadow max-w-[900px] md:max-w-[1240px] mt-32 mx-auto md:h-[450px] md:grid grid-cols-2'>
      <div className=''>
        <div className='text-6xl leading-[80px] font-bold flex pl-10 pt-4 '>
          <h1> <span className='bg-[#ede8e8] pr-28' >LET’S</span><br />
            EXPLORE  <br />
            <span className=' bg-[#E6C744]  pr-10 md:pr-28'>  UNIQUE </span> <br />
            CLOTHES.  </h1>
        </div>
        <p className='pl-10 font-mono text-[17px] pt-2'>Live for Influential and Innovative fashion!</p>

        <div className='flex justify-start ml-9 pt-2'>
          <button className='bg-[black] text-white p-4 rounded '> Shop Now</button>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-center pt-5'>
          <img src={girlh} className='w-[417px] '  />
        </div>
      </div>

    </div>
  )
}

export default Banner