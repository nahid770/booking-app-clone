import React from 'react';
import './Footer.css'

import img1 from '../../Images/1.png'
import img2 from '../../Images/2.png'
import img3 from '../../Images/3.png'
import img4 from '../../Images/4.png'
import img5 from '../../Images/5.png'
import img6 from '../../Images/6.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='fLists  '>
                <ul className="fList">
                    <li className='fListItem'> Countries</li>
                    <li className='fListItem'> Regions</li>
                    <li className='fListItem'> Cities</li>
                    <li className='fListItem'> Districs</li>
                    <li className='fListItem'> Airports</li>
                    <li className='fListItem'> Hotels</li>
                    <li className='fListItem'> Places of interest</li>
                </ul>
                <ul className="fList">
                    <li className='fListItem'> Homes</li>
                    <li className='fListItem'> Apartments</li>
                    <li className='fListItem'> Resorts</li>
                    <li className='fListItem'> Villas</li>
                    <li className='fListItem'> Hostels</li>
                    <li className='fListItem'> B&Bs</li>
                    <li className='fListItem'> Guest houses</li>
                </ul>
                <ul className="fList">
                    <li className='fListItem'> Unique places to stay</li>
                    <li className='fListItem'> All destinations</li>
                    <li className='fListItem'> Discover</li>
                    <li className='fListItem'> Reviews</li>
                    <li className='fListItem'> Unpacked: Travel articles</li>
                    <li className='fListItem'>Travel communities</li>
                    <li className='fListItem'>Seasonal and holiday deals</li>
                </ul>
                <ul className="fList">
                    <li className='fListItem'> Car rental</li>
                    <li className='fListItem'> Flight finder</li>
                    <li className='fListItem'> Restaurant reservations</li>
                    <li className='fListItem'> Booking.com for Travel Agents</li>
                   
                </ul>
                <ul className="fList">
                    <li className='fListItem'> Coronavirus (COVID-19) FAQs</li>
                    <li className='fListItem'> About Booking.com</li>
                    <li className='fListItem'> Customer Service Help</li>
                    <li className='fListItem'> Careers</li>
                    <li className='fListItem'> Sustainability</li>
                    <li className='fListItem'> Press Center</li>
                    <li className='fListItem'> Investor relations</li>
                    <li className='fListItem'> Terms & Conditions</li>
                    <li className='fListItem'> Partner dispute</li>
                    <li className='fListItem'> How We Work</li>
                    <li className='fListItem'> Privacy & cookie statement</li>
                    <li className='fListItem'> MSA statement</li>
                    <li className='fListItem'> Corporate contact</li>
                </ul>
            </div>
            <p className='text-sm text-center mb-3'>Copyright © 2023 Booking app clone. All rights reserved.</p>
            
            <span className='text-sm text-center block py-4 text-[#6B6B6B]'>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</span>

            <div className='flex justify-center gap-x-10 mb-6'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>

            
        </div>
    );
};

export default Footer;