import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    return (
      <div className='bg-[#003580] '>
        <div className='navber '>
        <div className=' md:flex h-16 md:justify-between items-center '>
            <Link to='/' className='text-white font-bold text-2xl'>Booking.com</Link>
            <div className=''>
               
                <Link className='text-white mr-3 hover:bg-[#1F4E8F] px-2 py-2 pointer bg-transparent border' to='/register'>List your Property</Link>
                <Link className='text-blue-700  px-2 py-2 pointer bg-white' to='/register'>Register</Link>
                <Link to='/signin' className='text-blue-700 px-2 py-2 ml-4 pointer bg-white' >Sign in</Link>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Navber;