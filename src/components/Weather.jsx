import React, { useEffect, useState } from 'react';
import { FaStreetView } from 'react-icons/fa6';

const Weather = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState('Islamabad');
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35a74f280d47e3d4f467d4e28bab0217`;
      const response = await fetch(url);
      const res_Json = await response.json();
      console.log(res_Json);
      setcity(res_Json.main);
    };
    fetchApi();
  }, [search]);
  return (
    <section className='grid place-items-center min-h-[100vh] font-abc bg-slate-400'>
      <div className='w-72 h-96 bg-blue-300 rounded-lg  sm:w-80 sm:h-112 md:w-80 md:h-128 lg:w-80 lg:h-144 xl:w-80 xl:h-[27rem] shadow-black shadow-lg overflow-hidden relative'>
        <div className='text-center my-4'>
          <input
            className='h-10 px-4 rounded-full'
            type='search'
            value={search}
            placeholder='Please Enter City'
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className='text-center mt-8 text-2xl tracking-widest'>
            No City Found
          </p>
        ) : (
          <div className='grid place-items-center my-20'>
            <h2 className='flex items-center mb-20 text-2xl font-extrabold capitalize tracking-wider'>
              <FaStreetView className=' text-white text-7xl moving-icon' />
              {search}
            </h2>

            <h1 className='text-4xl font-bold -mt-4'>{city.temp}°Cel</h1>
            <h3 className='text-lg tracking-wide mt-6 '>
              Feels Like: {city.feels_like}°Cel
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
