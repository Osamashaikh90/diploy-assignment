
import React, { useState } from 'react';
import { MdHeadsetMic, MdPerson, MdShoppingCart, PiGlobe, MdChevronRight,IoMdArrowBack } from "../../utils/icons";
import { FiMenu, FiX } from 'react-icons/fi'; 
import { SubNavData } from '../../utils/constants'; 

const MainNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubNavIndex, setActiveSubNavIndex] = useState(null);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const mainNavLists = [
    {
      icon: <MdHeadsetMic size={25} />,
      title: "Contact us",
      hideBelowLg: false, 
    },
    {
      icon: <PiGlobe size={25} />,
      title: "IN/INR"
    },
    {
      icon: <MdShoppingCart size={25} />,
      title: "Cart"
    },
    {
      icon: <MdPerson size={25} />,
      title: "Sign in"
    },
  ];

  const handleSubNavClick = (index) => {
    setActiveSubNavIndex(index);
    setSubMenuOpen(true);
  };

  const handleCloseSubMenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <div className='h-[60px] border-b-2 px-6 lg:px-[136px] bg-white flex items-center justify-between sticky top-0 z-20'>
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        <span><img src="/Logo.svg" className='h-7' /></span>

        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-3 font-medium'>
          {mainNavLists?.map((list, index) => {
           if (list.hideBelowLg && window.innerWidth < 1024) return null;
            return (
              <li key={index} className='hidden md:flex items-center gap-1 text-sm hover:bg-gray-400 px-3 py-1.5 rounded-full cursor-pointer'>
                {list.icon}{list.title}
              </li>
            );
          })}
          <button className='px-4 py-2 rounded-full font-semibold text-sm bg-black text-white hover:text-gray-500'>Sign up for free</button>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-64 bg-white overflow-y-scroll h-full shadow-lg p-4">
          <div className="flex justify-between items-center mb-6">
            <span><img src="/Logo.svg" className='h-7' /></span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <FiX size={25} />
            </button>
          </div>

          {/* Mobile MainNav */}
          <ul className='flex flex-col items-start gap-4 font-medium'>
            {mainNavLists?.map((list, index) => {
              if (list.hideBelowLg) return null; 
              return (
                <li key={index} className='flex items-center gap-2 text-base hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer'>
                  {list.icon}{list.title}
                </li>
              );
            })}
            <button className='mt-6 w-full px-4 py-2 rounded-full font-semibold text-sm bg-black text-white hover:text-gray-500'>Sign up for free</button>
          </ul>

          {/* SubNav for Mobile */}
          <div className="mt-6">
            <ul className='flex flex-col items-start gap-4 font-medium'>
              {SubNavData.map((item, index) => (
                <li 
                  key={index} 
                  className='flex w-full justify-between items-center text-base hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer'
                  onClick={() => handleSubNavClick(index)} 
                >
                  <span>{item.label}</span>
                  <MdChevronRight />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform duration-300 ${isSubMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-64 bg-white overflow-y-scroll h-full shadow-lg p-4 relative">
          <button
            className="absolute top-4 left-4 bg-gray-200 px-2 py-1 flex items-center gap-2 rounded-full text-sm"
            onClick={handleCloseSubMenu}
          >
            <IoMdArrowBack />
            Back
          </button>

          {/* Submenu Content */}
          <div className="mt-12">
            {activeSubNavIndex !== null && (
              <ul className='flex flex-col items-start gap-4 font-medium'>
                {SubNavData[activeSubNavIndex].overlayContent?.map((subItem, subIndex) => (
                  <li key={subIndex} className='flex justify-between items-center text-base hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer'>
                    <span>{subItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;

// chore(src): resposiveness done for mobile tablet and laptops