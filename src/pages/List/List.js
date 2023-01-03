import { faCalendarDays, faCircleQuestion, faPerson, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Navber from '../../Components/Navber/Navber';
import './List.css'

const List = () => {
    const location = useLocation()
    const [destination, setdestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options);
    const [openOptions, setOpenOptions] = useState(false);

    // handle Options
    const handleOption = (name, operation)=>{
        setOptions(previous =>{ return{
            ...previous, [name]: operation === "increase" ? options[name] +1 : options[name] -1
        }});
      };

    return (
        <div>
            <Navber type="list"></Navber>
            <Header type="list"></Header>

            <div className='listContainer'>
                <div className="listWraper">
                    {/* Search */}
                 <div className="listSearch">
                   <h2 className='text-xl '>Search</h2>
                   
                   <div className="lsItem ">
                    <label htmlFor="place" className='text-sm mt-2'>Destination/property name:</label>
                    <div className='input-icon relative '>
                        <FontAwesomeIcon className=' icon' icon={faSearch} /> 
                        <input  className='py-1 pl-8 outline-none rounded-sm w-full input-field' type="text" name="place" id="place" placeholder={destination} />
                    </div>
                   </div> 
                   <div className="lsItem">
                    <label className='text-sm' htmlFor="place">Check-in/out date</label>
                   
                    {/* Check-In Check-out date */}
                <div className='relative checkDateContainer py-1 bg-white rounded-sm'>
                <FontAwesomeIcon className='text-[#3E3E3E] pl-1 ' icon={faCalendarDays} />
                <span onClick={()=> setOpenDate(!openDate)} className='text-[#3E3E3E] pl-2 '>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
                }</span>
               {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className=' checkDate'
                />}
                </div>
                {/*---------------------- Options --------------------*/}
                <div className="lsItem mt-1 relative">
                  <div className='optionContainer py-1 bg-white rounded-sm'>
                    <FontAwesomeIcon className='pl-1 text-[#3E3E3E]' icon={faPerson} />
                    <span onClick={()=> setOpenOptions(!openOptions)} className='text-[#3E3E3E]  pl-2' >  {`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                  </div>
                {openOptions && <div className='optionsInHotels shadow-lg rounded-sm border-black px-10 py-5'>
                <div className='optionItem '>
                <span className='optionText'>Adult</span>
                <div className="optionCounter">
                <button 
                disabled={options.adult <= 1} 
                className='optionCounterBtn' 
                onClick={()=> handleOption("adult", "decrease")}>-</button>
                <span className='optionCounternumber'>{options.adult}</span>
                <button 
                className='optionCounterBtn' 
                onClick={()=> handleOption("adult", "increase")} >+</button>
                </div>
                        
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className="optionCounter">
                        <button 
                        disabled={options.children <= 0} 
                        className='optionCounterBtn' 
                        onClick={()=> handleOption("children", "decrease")}>-</button>
                        <span className='optionCounternumber'>{options.children}</span>
                        <button 
                        className='optionCounterBtn' 
                        onClick={()=> handleOption("children", "increase")}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Room</span>
                        <div className="optionCounter">
                        <button 
                        disabled={options.room <= 1} 
                        className='optionCounterBtn' 
                        onClick={()=> handleOption("room", "decrease")}>-</button>

                        <span className='optionCounternumber'>{options.room}</span>
                        <button 
                        className='optionCounterBtn' 
                        onClick={()=> handleOption("room", "increase")}>+</button>
                        </div>
                    </div>

            </div>}
                </div>
                    {/* checkBox */}
                    <div className='flex justify-between items-center'>
                       <div>
                       <input className='' type="checkbox" name="" id="" />
                        <span className='ml-1 text-sm'>I'm traveling for work</span>
                       </div>

                       <FontAwesomeIcon title='If you select this option, we will show you popular business travel features like breakfast, WiFi and free parking.' className='pl-1 w-5 text-[#3E3E3E]' icon={faCircleQuestion} />
                    </div>
                   </div>

                   {/* Search Button */}
                   <button className='px-3 py-2 mb-4 w-full rounded-sm text-white text-xl bg-blue-600 hover:bg-[#00487A]'>Search</button>
                 </div>
                 {/* Search result properties */}
                 <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
};

export default List;