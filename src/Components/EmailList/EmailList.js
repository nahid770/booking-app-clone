import React from 'react';
import './EmailList.css'

const EmailList = () => {
    return (
        <div className='w-full'>
            <div className='mailContainer bg-[#00224F] '>
            <h2 className='mailTitle text-2xl text-white pb-1'> Save time, save money!</h2>
            <p className='mailDesc text-gray-300 text-sm mb-4'>Sign up and we'll send the best deals to you</p>

            <div className='inputContainer mb-12 '>
                <input className='w-96 py-3 px-3 rounded-sm outline-none border-none mr-2' type="email" name="email" id="" required placeholder='your email address' />
                <button className='inputBtn bg-[#0071C2] px-8 py-3 rounded-sm  text-white'>Subscribe</button>
            </div>

            <div className='listProperty bg-[#003580] w-full text-center pt-3'>
                <button className='text-sm text-gray-100 border py-1 px-3 rounded-sm hover:bg-[#335D99] bg-transparent mb-3'>List your Property</button>
                
            </div>
            <div className='w-full line bg-white '></div>
            <div className='flex justify-center items-center bg-[#003580] w-full'>
                <button className='underline text-white mr-4 font-bold text-sm my-3'>Mobile version</button>
                <button className='underline text-white mr-4 font-bold text-sm my-3'>Your account</button>
                <button className='underline text-white mr-4 font-bold text-sm my-3'>Make changes online to your booking</button>
                <button className='underline text-white mr-4 font-bold text-sm my-3'>Customer Service Help</button>
                <button className='underline text-white mr-4 font-bold text-sm my-3'>Become an affiliate</button>
                <button className='underline text-white  font-bold text-sm my-3'>Booking.com for Business</button>
            </div>
            </div>
            
           
            
        </div>
    );
};

export default EmailList;