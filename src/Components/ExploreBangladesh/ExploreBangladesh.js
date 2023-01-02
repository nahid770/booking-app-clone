import React from 'react';
import flag from '../../Images/flag.png'
import indianFlag from '../../Images/indianFlag.png'
import coxBajar from '../../Images/coxBazar.jpg'
import du from '../../Images/dhakaV.jpeg'
import './ExploreBangladesh.css'

const ExploreBangladesh = () => {
    return (
        <div className='mb-10'>
            <h2 className='ebangladesh font-bold text-[#262626] text-3xl mb-4 mt-10'>Explore Bangladesh</h2>
            
        <div className='md:flex gap-5 justify-center'>
            <div className='relative'>
                <img className='exploreImg  border hover:border-[#FEBB02] ' src={coxBajar} alt="" />
                <div className=' flex justify-start relative'>
                <h2 className='mr-2 text-2xl font-bold drop-shadow-md text-white titleOne'>Cox's Bazar </h2>
                <img className='flag  flagOne' src={flag} alt="" />
                </div>

                <div className='dealsBox bg-[#FF8000] rounded-md '>
                <span className='text-black mb-1 text-xs block text-right pr-1' >Deals start at</span>
                <p className='text text-black text-md text-right '>BDT 1,129.37</p>
                </div>
                
            </div>
            <div className='relative'>
                <img className='exploreImg border hover:border-[#FEBB02] ' src={du} alt="" />
                <div className=' flex justify-start items-center relative'>
                <h2 className='mr-2 text-2xl font-bold drop-shadow-md text-white titleTwo'>Dhaka </h2>
                <img className=' flagTwo ' src={flag} alt="" />
                </div>

                <div className='dealsBox bg-[#FF8000] rounded-md '>
                <span className='text-black mb-1 text-xs block text-right pr-1' >Deals start at</span>
                <p className='text text-black text-md text-right '>BDT 1,117.62</p>
                </div>
                
            </div>
        </div>
            <div className='md:flex exploreImage items-center gap-5 mt-5'>
                <div className='relative'>
                <img className='border hover:border-[#FEBB02] ' src="https://cf.bstatic.com/xdata/images/city/600x600/858544.jpg?k=af54aeeb213e0c97b823854f6779ee99c332b7100660513ca6c0823c525bdea1&o=" alt="" />

                <div className='relative'>
                    <h2 className='mr-2 text-2xl font-bold drop-shadow-md text-white titleThree'>Chittagong</h2>
                    <img className='imgThree' src={flag} alt="" />
                </div>

                <div className='dealsBox3 dealsBox bg-[#FF8000] rounded-md '>
                <span className='text-black mb-1 text-xs block text-right pr-1' >Deals start at</span>
                <p className='text text-black text-md text-right '>BDT 1,098.57</p>
                </div>
                </div>

                <div className='relative'>
                    <img className='border hover:border-[#FEBB02] ' src="https://cf.bstatic.com/xdata/images/city/600x600/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o=" alt="" />
                    <div className='relative'>
                    <h2 className='mr-2 text-2xl font-bold drop-shadow-md text-white titleThree'>Sylhet</h2>
                    <img className='imgfour' src={flag} alt="" />
                </div>

                <div className='dealsBox3 dealsBox bg-[#FF8000] rounded-md '>
                <span className='text-black mb-1 text-xs block text-right pr-1' >Deals start at</span>
                <p className='text text-black text-md text-right '>BDT 1,090.35</p>
                </div>
                </div>
                <div className='relative'>
                    <img className='border  hover:border-[#FEBB02] ' src="https://cf.bstatic.com/xdata/images/city/600x600/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=" alt="" />
                    <div className='relative'>
                    <h2 className='mr-2 text-2xl font-bold drop-shadow-md text-white titleThree'>Kolkata</h2>
                    <img className='imgFive' src={indianFlag} alt="" />
                </div>
                <div className='dealsBox3 dealsBox bg-[#FF8000] rounded-md '>
                <span className='text-black mb-1 text-xs block text-right pr-1' >Deals start at</span>
                <p className='text text-black text-md text-right '>BDT 485.72</p>
                </div>
                </div>
            </div>
          
            
        </div>
    );
};

export default ExploreBangladesh;