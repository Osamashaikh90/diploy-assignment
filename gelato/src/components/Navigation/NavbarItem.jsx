import React, { useState } from 'react';
import { CgChevronDown, CgChevronRight } from 'react-icons/cg';

const NavbarItem = ({ label, overlayContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer hover:bg-gray-200 h-full flex items-center justify-center px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="flex items-center cursor-pointer space-x-2" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <span className="text-sm font-medium">{label}</span>
        {overlayContent.length === 0 ? (
          ""
        ) : (
          <span
            className={`transform transition-transform duration-500 ${isHovered ? 'rotate-180' : 'rotate-0'
              }`}
          >
            <CgChevronDown size={18} />
          </span>
        )}
      </div>

      {isHovered && overlayContent.length !== 0 && (
        <>

          <div
            className="fixed top-[154px] rounded-t-lg left-0 w-full h-[calc(100vh-154px)] bg-gray-400 bg-opacity-50 z-10"

          ></div>
          <div className="absolute top-[50px] left-[50%] transform -translate-x-1/2 z-20">
            <div className="w-4 h-4 bg-white border-l border-t rotate-45 border-gray-300"></div>
          </div>
          <div
            className="absolute top-[53px] border-t left-0 bg-white text-black  rounded-t-none rounded-lg w-[216px] shadow-lg p-4 z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {overlayContent.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 text-sm hover:bg-gray-100 cursor-pointer"
              >
                <span>{item}</span>
                {item.hasSubMenu && <CgChevronRight />}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarItem;

