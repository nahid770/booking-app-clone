import React from 'react';
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div>
            <h2 className='text-2xl  text-[#262626] font-bold mb-3'>Homes guests love</h2>
            <div className='fp'>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>3 Epoques Apartments by Prague Residences </h2>
                <span className='fpropertyCity text-sm text-gray-600'> Prague 1, Czech Republic, Praha 1</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 24,727</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>8.7</button>
                <p className='text-[#262626]'>Excellent  <span className='text-gray-600'>· 408 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>6 Continents Apartments by Prague Residences</h2>
                <span className='fpropertyCity text-sm text-gray-600'>Prague 1, Czech Republic, Prague</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 20,747</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>8.4</button>
                <p className='text-[#262626]'>Very Good   <span className='text-gray-600'>· 244 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Aparthotel Stare Miasto</h2>
                <span className='fpropertyCity text-sm text-gray-600'> Old Town, Poland, Kraków</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 10,721</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>8.7</button>
                <p className='text-[#262626]'>Excellent  <span className='text-gray-600'>· 2,241 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Cheval Three Quays at The Tower of London</h2>
                <span className='fpropertyCity text-sm text-gray-600'> City of London, United Kingdom, London</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 55,576</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.4</button>
                <p className='text-[#262626]'>Wonderful  <span className='text-gray-600'>· 542 reviews</span></p>
                </div>
            </div>
            <div className='fpropertyItem'>
                <img className='fpropertyImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=ace18ab936560dac1e01f7d0f4b44206d354a8683e124c62f3f10c25cede9bd2&o=&s=1" alt="" />
                <h2 className='fpropertyTitle font-bold text-[#262626]'>Flora Chiado Apartments</h2>
                <span className='fpropertyCity text-sm text-gray-600'> Santa Maria Maior, Portugal, Lisboa</span>
                <p className='fPropertyP text-sm text-gray-600'>Starting from<span className='font-bold  fPropertyPrice '> BDT 43,720</span></p>

                <div className='rating flex items-center'>
                <button className='border bg-[#003580] text-white  rating-btn mr-2'>9.7</button>
                <p className='text-[#262626]'>Exceptional   <span className='text-gray-600'>· 165 reviews</span></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;