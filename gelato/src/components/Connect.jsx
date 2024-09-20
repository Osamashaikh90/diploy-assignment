import React from 'react';
import { Mobile } from '../assets/images';

const Connect = () => {
    return (
        <>
            <div className='px-4 sm:px-6 lg:px-36 py-10 min-h-[500px] flex items-end'>
                <div className='flex flex-col md:flex-row items-center gap-5 relative rounded-lg w-full shadow-lg p-10 bg-[#FAF6EF]'>
                    <div className='w-full md:w-[50%] lg:w-[40%] relative flex justify-center'>
                        <img 
                            src={Mobile} 
                            alt="" 
                            className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain' 
                        />
                    </div>
                    <div className='flex flex-col items-start gap-8 text-center md:text-left'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-lg'>For print producers</span>
                            <h2 className='text-[40px] sm:text-[50px] md:text-[45px] lg:text-[60px] font-semibold'>
                                GelatoConnect
                            </h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-lg sm:text-xl font-medium'>
                                Elevate efficiency, cut costs, and seamlessly automate with our all-in-one 
                                software solution for the print industry.
                            </p>
                            <button className='px-4 py-2 rounded-full font-medium text-sm bg-black text-white hover:text-gray-500 w-full lg:w-1/5'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Connect;

