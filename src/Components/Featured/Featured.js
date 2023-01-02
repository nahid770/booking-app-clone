import React from 'react';
import './Featured.css'

const Featured = () => {
    return (
        <div >
            <h2 className='text-2xl text-black font-bold mb-3'>Get inspiration for your next trip</h2>

            <div className='featured flex justify-space-between gap-8'>
            <div className='featured-item '>
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" />
                {/* Featured Title */}
                <div className='featuredTitle'>
                    <h1>Apartments</h1>
                    <h2>926,226 hotels</h2>
                </div>
            </div>
            <div className='featured-item '>
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
                {/* Featured Title */}
                <div className='featuredTitle'>
                    <h1>Resorts</h1>
                    <h2>18,278 resorts</h2>
                </div>
            </div>
            <div className='featured-item '>
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
                {/* Featured Title */}
                <div className='featuredTitle'>
                    <h1>Villas</h1>
                    <h2>478,867 villas</h2>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Featured;