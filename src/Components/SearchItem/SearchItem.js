import { faLeaf, faStar, faThumbsUp, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SearchItem.css'

const SearchItem = () => {
    return (
        <div>
            <div className='border p-3 flex justify-between'>
            {/* second column */}
            <div className='flex justify-start items-start gap-x-4'>
            <img className='rounded-sm' src="https://cf.bstatic.com/xdata/images/hotel/square200/267126029.webp?k=4b6eaaaa738819c7cfb9ff86ec598fb2f750e4668c30d53b1828e87ebec7ddcc&o=&s=1" alt="" />
            
            {/* Description */}
            <div className='descriptions w-2/3'>
            <div className="sIDesc ">
              <div className='flex items-center '>
              <h2 className='text-blue-600 text-xl font-bold hover:text-[#262626] mr-1 '>Grace Cox Smart Hote
              </h2>
                <div>
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 mr-1 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className=' w-3 px-1 text-white bg-[#FEBB02]' icon={faThumbsUp} />
                </div>
               
              </div>

                <div className='flex gap-4'>
                <button className='text-blue-600 underline text-xs'>Cox's Bazar</button>
                <button className='text-blue-600 underline text-xs'> Show on map</button>
                <span className='text-xs'>2.3 km from center</span>
                <span className='text-xs'>Beach Nearby</span>
                </div>

                <div className='flex mt-2'>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faUmbrellaBeach} />
                <span className='text-xs '>350 m from beach</span>
                </div>
                
                <div>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faLeaf} />
                <span className='text-xs'>Travel Sustainable property</span>
                </div>
                <span className='text-xs w-1/2'>Grace Cox Smart Hotel is a 4-star property located in Cox's Bazar. This 4-star hotel offers a kids' club, free shuttle service and free WiFi.</span>
                
            </div>
            </div>
            {/* Description end */}
            </div>
            {/* Second column end */}

            {/* 3rd Column start */}
            <div className="sIDetails flex justify-end items-start w-1/4 relative">
            <div className='relative'>
            <p className=' font-bold block mb-0 text-end mr-9'>Excellent</p>
            <p className='text-xs text-end mr-9'>2,347 reviews</p>
            </div>
            <button className='ml-1 absolute  border bg-[#003580] text-white p-1 resultBtn'>8.5</button>
            <button className='ml-1 absolute top-12  px-2 bg-blue-600 hover:bg-[#003580] mt-1 text-white py-2 text-sm font-bold rounded-sm'>Show Prices</button>
            </div>
            {/* 3rd column end */}


           
        </div>
        {/* Results Items */}
            <div className='border p-3 flex justify-between'>
            {/* second column */}
            <div className='flex justify-start items-start gap-x-4'>
            <img className='rounded-sm' src=" https://cf.bstatic.com/xdata/images/hotel/square200/368703637.webp?k=a385edc5cafda8beb7ab64cc78921720e59b41de417ff73efb946d3b918b13b0&o=&s=1" alt="" />
            
            {/* Description */}
            <div className='descriptions w-2/3'>
            <div className="sIDesc ">
              <div className='flex items-center '>
              <h2 className='text-blue-600 text-xl font-bold hover:text-[#262626] mr-1 '>
              The First Collection Business
              </h2>
                <div>
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 mr-1 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className=' w-3 px-1 text-white bg-[#FEBB02]' icon={faThumbsUp} />
                </div>
               
              </div>

                <div className='flex gap-4'>
                <button className='text-blue-600 underline text-xs'>Business Bay,</button>
                <button className='text-blue-600 underline text-xs'> Dubai</button>
                <button className='text-blue-600 underline text-xs'> Show on map</button>
                <span className='text-xs'>2 km from center</span>
               
                </div>

                {/* <div className='flex mt-2'>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faUmbrellaBeach} />
                <span className='text-xs '>350 m from beach</span>
                </div> */}
                
                <div>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faLeaf} />
                <span className='text-xs'>Travel Sustainable property</span>
                </div>
                <span className='text-xs w-1/2'>The First Collection Business Bay is a modern, stylish hotel located in the Business Bay district and is 1 mi away from Dubai Mall and the Burj Khalifa.</span>
                
            </div>
            </div>
            {/* Description end */}
            </div>
            {/* Second column end */}

            {/* 3rd Column start */}
            <div className="sIDetails flex justify-end items-start w-1/4 relative">
            <div className='relative'>
            <p className=' font-bold block mb-0 text-end mr-9'>Good</p>
            <p className='text-xs text-end mr-9'>125 reviews</p>
            </div>
            <button className='ml-1 absolute  border bg-[#003580] text-white p-1 resultBtn'>7.2</button>
            <button className='ml-1 absolute top-12  px-2 bg-blue-600 hover:bg-[#003580] mt-1 text-white py-2 text-sm font-bold rounded-sm'>Show Prices</button>
            </div>
            {/* 3rd column end */}
        </div>
        {/* Result Items */}
            <div className='border p-3 flex justify-between'>
            {/* second column */}
            <div className='flex justify-start items-start gap-x-4'>
            <img className='rounded-sm' src=" https://cf.bstatic.com/xdata/images/hotel/square200/336185132.webp?k=7d0807607a1ae32c7b7f7e55931990fffaaadc1795ffb23bf5835b9cd0be2583&o=&s=1" alt="" />
            
            {/* Description */}
            <div className='descriptions w-2/3'>
            <div className="sIDesc ">
              <div className='flex items-center '>
              <h2 className='text-blue-600 text-xl font-bold hover:text-[#262626] mr-1 '>
              Golden Sands-Dubai Creek
              </h2>
                <div>
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 mr-1 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className=' w-3 px-1 text-white bg-[#FEBB02]' icon={faThumbsUp} />
                </div>
               
              </div>

                <div className='flex gap-4'>
                <button className='text-blue-600 underline text-xs'>Deira,</button>
                <button className='text-blue-600 underline text-xs'> Dubai</button>
                <button className='text-blue-600 underline text-xs'> Show on map</button>
                <span className='text-xs'>8.5 km from center</span>
               
                </div>

                {/* <div className='flex mt-2'>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faUmbrellaBeach} />
                <span className='text-xs '>350 m from beach</span>
                </div> */}
                
                <div>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faLeaf} />
                <span className='text-xs'>Travel Sustainable property</span>
                </div>
                <span className='text-xs w-1/2'>Featuring a rooftop pool and bar with panoramic views of Dubai Creek, city and Arabian Sea, the 5-star Golden Sands-Dubai Creek is located on the busy Dubai Creek.</span>
                
            </div>
            </div>
            {/* Description end */}
            </div>
            {/* Second column end */}

            {/* 3rd Column start */}
            <div className="sIDetails flex justify-end items-start w-1/4 relative">
            <div className='relative'>
            <p className=' font-bold block mb-0 text-end mr-9'>Wonderful</p>
            <p className='text-xs text-end mr-9'>3,363 reviews</p>
            </div>
            <button className='ml-1 absolute  border bg-[#003580] text-white p-1 resultBtn'>9.2</button>
            <button className='ml-1 absolute top-12  px-2 bg-blue-600 hover:bg-[#003580] mt-1 text-white py-2 text-sm font-bold rounded-sm'>Show Prices</button>
            </div>
            {/* 3rd column end */}
        </div>
        {/* Results Items */}
            <div className='border p-3 flex justify-between'>
            {/* second column */}
            <div className='flex justify-start items-start gap-x-4'>
            <img className='rounded-sm' src=" https://cf.bstatic.com/xdata/images/hotel/square200/110317272.webp?k=ceecdc7d5ec682d0d4d6eeea1a6e6e6ce9ece2d583582f6b3c3fca1163ff67e9&o=&s=1" alt="" />
            
            {/* Description */}
            <div className='descriptions w-2/3'>
            <div className="sIDesc ">
              <div className='flex items-center '>
              <h2 className='text-blue-600 text-xl font-bold hover:text-[#262626] mr-1 '>
              Hyatt Grand Central New York
              </h2>
                <div>
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 mr-1 text-[#FEBB02]' icon={faStar} />
                {/* <FontAwesomeIcon className=' w-3 px-1 text-white bg-[#FEBB02]' icon={faThumbsUp} /> */}
                </div>
               
              </div>

                <div className='flex gap-4'>
                <button className='text-blue-600 underline text-xs'>Midtown East,</button>
                <button className='text-blue-600 underline text-xs'>  New York</button>
                <button className='text-blue-600 underline text-xs'> Show on map</button>
                <span className='text-xs'>1.9 km from Subway </span>
               
                </div>

                {/* <div className='flex mt-2'>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faUmbrellaBeach} />
                <span className='text-xs '>350 m from beach</span>
                </div> */}
                
                <div>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faLeaf} />
                <span className='text-xs'>Travel Sustainable property</span>
                </div>
                <span className='text-xs w-1/2'>Located adjacent to Grand Central Terminal, this Manhattan hotel feature onsite dining and the 24/7 StayFit fitness center.</span>
                
            </div>
            </div>
            {/* Description end */}
            </div>
            {/* Second column end */}

            {/* 3rd Column start */}
            <div className="sIDetails flex justify-end items-start w-1/4 relative">
            <div className='relative'>
            <p className=' font-bold block mb-0 text-end mr-9'>Good</p>
            <p className='text-xs text-end mr-9'>1,353 reviews</p>
            </div>
            <button className='ml-1 absolute  border bg-[#003580] text-white p-1 resultBtn'>7.4</button>
            <button className='ml-1 absolute top-12  px-2 bg-blue-600 hover:bg-[#003580] mt-1 text-white py-2 text-sm font-bold rounded-sm'>Show Prices</button>
            </div>
            {/* 3rd column end */}
        </div>
        {/* Results Items */}
            <div className='border p-3 flex justify-between'>
            {/* second column */}
            <div className='flex justify-start items-start gap-x-4'>
            <img className='rounded-sm' src="https://cf.bstatic.com/xdata/images/hotel/square200/112819619.webp?k=32eff97d1c97f28d3a49249245e9d9ec013c01ab84ec8b49f5cc70ef2ac8a64b&o=&s=1" alt="" />
            
            {/* Description */}
            <div className='descriptions w-2/3'>
            <div className="sIDesc ">
              <div className='flex items-center '>
              <h2 className='text-blue-600 text-xl font-bold hover:text-[#262626] mr-1 '>
              Freehand Los Angeles
              </h2>
                <div>
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className='pl-1 w-3 mr-1 text-[#FEBB02]' icon={faStar} />
                <FontAwesomeIcon className=' w-3 px-1 text-white bg-[#FEBB02]' icon={faThumbsUp} />
                </div>
               
              </div>

                <div className='flex gap-4'>
                <button className='text-blue-600 underline text-xs'>Downtown LA,</button>
                <button className='text-blue-600 underline text-xs'>  Los Angeles</button>
                <button className='text-blue-600 underline text-xs'> Show on map</button>
                <span className='text-xs'>1.5 km from center</span>
               
                </div>
                <div>
                <FontAwesomeIcon className=' w-3 px-1 text-[#4E4E4E] ' icon={faLeaf} />
                <span className='text-xs'>Travel Sustainable property</span>
                </div>
                <span className='text-xs w-1/2'>Located 2625 feet from LA Live in Downtown Los Angeles, the Freehand Los Angeles features a rooftop pool & bar with 360-degree views of the city.</span>
                
            </div>
            </div>
            {/* Description end */}
            </div>
            {/* Second column end */}

            {/* 3rd Column start */}
            <div className="sIDetails flex justify-end items-start w-1/4 relative">
            <div className='relative'>
            <p className=' font-bold block mb-0 text-end mr-9'>Good</p>
            <p className='text-xs text-end mr-9'>1,353 reviews</p>
            </div>
            <button className='ml-1 absolute  border bg-[#003580] text-white p-1 resultBtn'>9.5</button>
            <button className='ml-1 absolute top-12  px-2 bg-blue-600 hover:bg-[#003580] mt-1 text-white py-2 text-sm font-bold rounded-sm'>Show Prices</button>
            </div>
            {/* 3rd column end */}
        </div>

        </div>
    );
};

export default SearchItem;