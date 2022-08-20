import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom';
const TopButtons = ({setQuery}) => {
    const city = [
        {
            id: 1,
            title: 'Manila'
        },
        {
            id: 2,
            title: 'Cebu'
        },
        {
            id: 3,
            title: 'Bacolod'
        },
        {
            id: 4,
            title: 'Davao'
        },
        {
            id: 5,
            title: 'Taguig'
        }
    ]
 
  return (
    <div className='flex justify-around items-center my-6'>
        <Link to="/"> <button className="text-white"><FaHome/></button> </Link>
        { city.map((city) => (
            <button key={city.id} className='text-lg text-white font-medium' onClick={()=> setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons