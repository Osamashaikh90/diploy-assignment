import React from 'react';
import { SolutionsImg } from '../assets/images';

const Solutions = () => {
    return (
        <>
            <div className="bg-[#FAF6EF] pt-8 pb-4 px-4 sm:px-6 lg:px-36">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className='flex flex-col items-start gap-6 md:gap-8 order-2 md:order-1 px-4 md:px-0 py-4 md:py-0'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-lg'>For print on demand sellers</span>
                            <h2 className='text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] md:font-semibold font-medium customFont leading-tight'>
                                Accelerate business growth with innovative design tools and apps
                            </h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-lg sm:text-xl md:text-2xl font-medium'>
                                See how our cutting-edge solutions can help you reach new customers and maximize your profits.
                            </p>
                            <button className='px-6 py-3 rounded-full font-medium text-sm bg-black text-white hover:bg-gray-800 hover:text-white transition-all duration-300 w-auto md:w-2/5 lg:w-1/5'>
                                Get started
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center order-1 md:order-2">
                        <img src={SolutionsImg} alt="Solutions" className="max-w-full h-auto md:h-[400px] lg:h-[500px]" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Solutions;
