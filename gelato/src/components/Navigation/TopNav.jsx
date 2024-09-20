import {IoIosInformationCircleOutline} from "react-icons/io"

const TopNav = () => {
  return (
    <>
    <div className='bg-[#000000] text-white h-10 flex items-center justify-center gap-4 p-8 lg:p-0'>
    <span className="underline font-light hover:text-blue-500 cursor-pointer">FREE SHIPPING for orders over $300. Order today</span> <IoIosInformationCircleOutline size={20} className="hidden md:block"/>
    </div>
    </>
  )
}

export default TopNav