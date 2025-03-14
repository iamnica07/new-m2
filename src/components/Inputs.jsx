import React from 'react'
import { UilSearch,UilLocationPoint } from "@iconscout/react-unicons"
import {useState} from 'react'
import { toast } from 'react-toastify'
const Inputs = ({setQuery, setUnits, units}) => {

  const [city,setCity] = useState('');

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if(city !== '') setQuery({q: city})
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if(city !== '') setQuery({q: city})
    }
  }

  return (
    <div className='flex flex-row justify-center my-6'>

        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            value={city}
            onChange={(e)=>setCity(e.currentTarget.value)}
            type="text"
            placeholder='search for city...' 
            className="text-xl text-black font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
            <UilSearch 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}/>
            <UilLocationPoint 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
            onKeyDown={handleKeyDown}
            />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric" className='text-xl text-white transition ease-out hover:scale-125' onClick={handleUnitsChange}>°C</button>
            <p className='text-xl mx-1 text-white'>|</p>
            <button name="imperial" className='text-xl text-white transition ease-out hover:scale-125' onClick={handleUnitsChange}>°F</button>
        </div>
    </div>
  )
}

export default Inputs