import React from 'react';
import './EmailList.css'

const EmailList = () => {
    return (
        <div className='mailContainer bg-[#00224F] '>
            <h2 className='mailTitle text-2xl text-white pb-1'> Save time, save money!</h2>
            <p className='mailDesc text-gray-300 text-sm mb-4'>Sign up and we'll send the best deals to you</p>

            <div className='inputContainer mb-12 '>
                <input className='w-96 py-3 px-3 rounded-sm outline-none border-none mr-2' type="email" name="email" id="" required placeholder='your email address' />
                <button className='inputBtn bg-[#0071C2] px-8 py-3 rounded-sm  text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default EmailList;