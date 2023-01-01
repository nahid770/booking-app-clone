import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-[#003580] '>
            <div className='mx-32  pt-2 pb-20 flex justify-start items-center'>
            <div className="flex gap-8">
            <div className='headerListItem p-3 border rounded-full bg-slate-300 bg-opacity-10'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
            </div>
            </div>
            {/* Header Title */}
            <div className='mx-32'>
            <h2 className='text-white text-5xl font-bold'>Find your next stay</h2>
            <p className='text-2xl text-white pb-12'>Search deals on hotels, homes, and much more...</p>
            </div>
        </div>
    );
};

export default Header;