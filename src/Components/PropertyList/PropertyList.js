import React from 'react';
import './PropertyList.css'

const PropertyList = () => {
    return (
        <div >
            <h2 className='text-2xl text-[#262626] font-bold mb-3'>Browse by property type</h2>

        <div className='pList flex justify-space-between gap-8'>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Hotels</h1>
                    <h2 className='text-gray-600 text-sm'>926,226 hotels</h2>
                </div>
            </div>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Apartments</h1>
                    <h2 className='text-gray-600 text-sm'>891,486 apartments</h2>
                </div>
            </div>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Resorts</h1>
                    <h2 className='text-gray-600 text-sm'>18,278 resorts</h2>
                </div>
            </div>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Villas</h1>
                    <h2 className='text-gray-600 text-sm'>478,867 villas</h2>
                </div>
            </div>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Cabins</h1>
                    <h2 className='text-gray-600 text-sm'>37,172 cabins</h2>
                </div>
            </div>
            <div className='pList-item '>
                <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" />
                {/* Featured Title */}
                <div className='pListTitle'>
                    <h1 className='font-bold'>Cottages</h1>
                    <h2 className='text-gray-600 text-sm'>523,772 cottages</h2>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default PropertyList;