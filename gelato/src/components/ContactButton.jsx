import React from 'react'
import { MdHeadsetMic } from "../utils/icons"

const ContactButton = () => {
  return (
    <div className='hidden md:flex items-center gap-2 justify-center w-1/5 lg:w-[8%] text-sm text-white bg-black p-2 rounded-full fixed bottom-4 right-[60px] opacity-85'><MdHeadsetMic size={22} />
      <span className=' hover:text-gray-500 cursor-pointer'>Contact us </span></div>
  )
}

export default ContactButton