import React from 'react'
import { chooseGelatoImg } from '../assets/images';
import { responses } from '../utils/constants';
const ChooseGelato = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative flex justify-center">
          <img
            src={chooseGelatoImg}
            alt="Why Choose Us"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center md:text-left customFont">
            Why Choose Us?
          </h2>
          <ul className="space-y-6 px-3 md:px-0 text-gray-700 text-left">
            {responses.map((response,index) => {
              return (
                <li key={index} className=''>
                  <span className="font-semibold text-lg ">▻ {response.heading}</span><br />
                  {response.description}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseGelato

