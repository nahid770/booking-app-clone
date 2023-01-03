import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    return (
      <div className='bg-[#003580] '>
        <div className='navber'>
        <div className=' md:flex h-16 md:justify-between items-center '>
            <span className='text-white font-bold text-2xl'>Booking.com</span>
            <div className=''>
                <Link className='text-blue-700 px-2 py-2 pointer bg-white' to='/register'>Register</Link>
                <Link className='text-blue-700 px-2 py-2 ml-4 pointer bg-white' to='/signup'>Sign up</Link>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Navber;