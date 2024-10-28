import React from 'react';
import Moblie from '../img/Mobile app (1).png';
import Apple from '../img/Rectangle 55.png';
import Play from "../img/Rectangle 18.png";
const Playstore = () => {
  return (
    <div className=' justify-center md:ml-24 ml-10 max-w-[900px] md:max-w-[1240px] mt-3 mx-auto md:h-[450px] md:grid grid-cols-2'>
    <div className=''>
      <div className='text-3xl md:text-6xl leading-8 md:leading-[80px] font-bold flex pl-10 pt-16 '>
        <h1> DOWNLOAD APP & GET THE VOUCHER!</h1>
      </div>
      <p className='pl-10 font-mono text-[17px] pt-2'>Get 30% off for first transaction using
      Rondovision mobile app for now</p>

       <div className='flex ml-5 md:ml-10 mt-3'>
        <img src={Apple} className='w-[150px]'  /> 
        <img src={Play} className='w-[150px]'  /> 
       </div>

    </div>
    <div className=''>
      <div className='flex justify-center pt-5'>
        <img src={Moblie} className='w-[250px] '  />
      </div>
    </div>

  </div>
  )
}

export default Playstore