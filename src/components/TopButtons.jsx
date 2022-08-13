import React from 'react'

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
        },
    ]
 
  return (
    <div className='flex justify-around items-center my-6'>
        { city.map((city) => (
            <button key={city.id} className='text-lg text-white font-medium' onClick={()=> setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons