import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format} from 'date-fns'
import './Header.css'

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions]= useState({
        adult:1,
        children:0,
        room:1
      });

      const handleOption = (name, operation)=>{
        setOptions(previous =>{ return{
            ...previous, [name]: operation === "increase" ? options[name] +1 : options[name] -1
        }});
      };

    return (
        <div className='bg-[#003580] relative'>
            <div className={type === "list" ? ' hero pb-4 pt-2 flex justify-start items-center' : 'hero pt-2 pb-20 flex justify-start items-center' }>
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
            { type !== "list" &&
            <>
            <div className='hero'>
            
            <h2 className='text-white text-5xl font-bold pb-2'>Find your next stay</h2>
            <p className='text-2xl text-white pb-20'>Search deals on hotels, homes, and much more...</p>
            </div>

            {/* Header search  */}
            <div className='flex justify-center '>
            <div className='headerSearch  flex justify-around items-center bg-white h-16 ' >
                <div>
                <FontAwesomeIcon className='text-gray-400 pr-2' icon={faBed} />
                <input className='text-black border-none outline-none' type="text" name="" id="" placeholder='Whare are you going?' />
                </div>

                <div>
                <FontAwesomeIcon className='text-gray-400' icon={faCalendarDays} />
                <span onClick={()=> setOpenDate(!openDate)} className='text-gray-500 pl-2'>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
                }</span>
               {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
                </div>

                <div>
                <FontAwesomeIcon className='text-gray-400' icon={faPerson} />
                <span onClick={()=> setOpenOptions(!openOptions)} className='text-gray-500 pl-2' >  {`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {/*---------- Options --------*/}
            {openOptions && <div className='options shadow-lg rounded-sm border-gray-400 px-10 py-5'>
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

                <div>
                    <button className='bg-blue-500 hover:bg-[#003580] text-white text-xl px-6 py-2'>Search</button>
                </div>
            </div> 
            </div> </>}
        </div>
    );
};

export default Header;