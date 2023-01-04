import React from 'react';
import './PropertyList.css'
import hotels from '../../Images/hotels.jpeg'
import apartments from '../../Images/apartments.jpeg'
import resorts from '../../Images/resorts.jpeg'
import villias from '../../Images/villias.jpeg'
import cabins from '../../Images/cabins.jpeg'
import cottages from '../../Images/cottages.jpeg'
import {Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";


const PropertyList = () => {
    
    return (
        <div className='relative'>
            <h2 className='text-2xl text-[#262626] font-bold mb-3 mt-3'>Browse by property type</h2>
        <Swiper
         style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-width": "10px",
          }}
        spaceBetween={15}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[ Navigation]}
        className='slide'
        >
        
        <div className='pList flex justify-space-between gap-8'>
            
            <SwiperSlide>
            <div className='pList-item '>
                <img  className='pListImg' src={hotels} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold text-black'>Hotels</h1>
                    <h2 className='text-gray-600 text-sm'>926,226 hotels</h2>
                </div>
            </div>
            </SwiperSlide>
            
            <SwiperSlide>
            <div className='pList-item '>
                <img className='pListImg' src={apartments} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold'>Apartments</h1>
                    <h2 className='text-gray-600 text-sm'>891,486 apartments</h2>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='pList-item '>
                <img className='pListImg' src={resorts} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold'>Resorts</h1>
                    <h2 className='text-gray-600 text-sm'>18,278 resorts</h2>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='pList-item '>
                <img className='pListImg' src={villias} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold'>Villas</h1>
                    <h2 className='text-gray-600 text-sm'>478,867 villas</h2>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='pList-item '>
                <img className='pListImg' src={cabins} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold'>Cabins</h1>
                    <h2 className='text-gray-600 text-sm'>37,172 cabins</h2>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='pList-item '>
                <img className='pListImg' src={cottages} alt="" />
                <div className='pListTitle'>
                    <h1 className='font-bold'>Cottages</h1>
                    <h2 className='text-gray-600 text-sm'>523,772 cottages</h2>
                </div>
            </div>
            </SwiperSlide>

            </div>
            </Swiper>
        </div>
    );
};

export default PropertyList;