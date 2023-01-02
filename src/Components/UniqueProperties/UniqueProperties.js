import React from 'react';
import './UniqueProperties.css'

const UniqueProperties = () => {
    return (
        <div>
            <h2 className='text-2xl  text-[#262626] font-bold mb-1 mt-8'>Stay at our top unique properties</h2>
            <p className=' text-gray-600 mb-4'>From castles and villas to boats and igloos, we have it all</p>
            <div className='fp'>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=1887d9e0a796fe553436a57823a481ed3584310d6a940e69cc8db875b110ae66&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Agriturismo Cabrele</h2>
                <span className='fpropertyCity text-sm text-gray-600 pt-1'> Italy, Santorso</span>
                <p className='fPropertyP text-sm text-gray-600 '>Starting from<span className='font-bold  fPropertyPrice '> BDT 22,353</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.3</button>
                <p className='text-[#262626]'>Wonderful  <span className='text-gray-600'>· 189 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/332074170.webp?k=9e07443aa7ca1a35645b6572aef736095c3bffbd5e8b00c7633f0578a6c2ec3a&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Au Cœur des Lacs - Chambres d'hôtes & Spa</h2>
                <span className='fpropertyCity text-sm text-gray-600'> France, Gérardmer</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 31,338</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.4</button>
                <p className='text-[#262626]'>Wonderful  <span className='text-gray-600'>· 284 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/236840535.webp?k=ce3c9fd759ec1a8d942b39f8fa1b8f4f388918523b269b9dff75842fec735038&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Lofoten Havfiske & Rorbuopplevelser</h2>
                <span className='fpropertyCity text-sm text-gray-600'> Norway, Leknes</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 50,027</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.5</button>
                <p className='text-[#262626]'>Exceptional  <span className='text-gray-600'> · 103 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/109319008.webp?k=b8fc6fbc8d874cffedf49c0080f14933a20995b040dc02aeaee3afad1e79c670&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>May's Apartments by May's</h2>
                <span className='fpropertyCity text-sm text-gray-600'> Norway, Reine</span>
                <p className='fPropertyP text-sm text-gray-600 '>Starting from<span className='font-bold  fPropertyPrice '> BDT 45,858</span></p>

                <div className='rating flex items-center '>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.4</button>
                <p className='text-[#262626]'>Wonderful  <span className='text-gray-600'> · 806 reviews</span></p>
                </div>
            </div>
            
            
            
            
            </div>
        </div>
    );
};

export default UniqueProperties;