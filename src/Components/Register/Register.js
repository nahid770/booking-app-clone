import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import './Register.css'


const Register = () => {
    return (
        <div className='  '>
          <div className='bg-[#003B95] '>
          <div className=' nav  flex justify-between items-center '>
          <Link to='/' className='text-white font-bold text-xl'>Booking.com</Link>
                <Link className='text-blue-700 px-2 py-2 ml-4 pointer bg-white' to='/signin'>Sign in</Link>
            </div>
          </div>

          <h2 className='text-2xl text-center mt-5 font-bold mb-8 '>Sign in or create an account</h2>

          
          <div className='w-96 flex flex-col   p-2 mx-auto'>
          <label className=' text-start block' htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" className='outline-none border border-gray-500  w-full py-1 pl-2 rounded-sm ' />
          <button className='text-md font-bold text-white bg-blue-600 rounded-sm w-full mt-4 py-3 hover:bg-[#003B95]'>Continue with email</button>

        <div className='flex justify-center items-center mt-3'>
         <div className='divider bg-gray-300 w-1/4'></div>
          <p className=' text-center text-sm mx-2'>or use one of these options</p>
          <div className='divider bg-gray-300 w-1/4'></div>
        </div>
        {/* social login */}
            <div className='flex justify-center items-center gap-8 my-5'>
                <FcGoogle className='h-16 w-16 p-4 rounded-md  border hover:border-blue-700'></FcGoogle>
                <GrFacebook className='text-blue-700 h-16 w-16 p-4 rounded-md  border hover:border-blue-700'></GrFacebook>
                <FcPhoneAndroid className='h-16 w-16 p-4 rounded-md  border hover:border-blue-700'></FcPhoneAndroid>
            </div>
            <p className='text-blue-600 font-bold text-sm text-center mb-3'>More ways to sign in</p>
            <p className='text-xs text-center my-4'>By signing in or creating an account, you agree with our <span className='text-xs text-blue-700'> Terms & Conditions </span> <span className='text-xs'>and</span> <span className='text-xs text-blue-700'>Privacy Statement</span></p>

            <p className='text-xs text-center'>All rights reserved. Copyright 2023 booking app clone</p>
          </div>
          
        </div>
    );
};

export default Register;