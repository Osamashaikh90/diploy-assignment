import React from 'react';
import NavbarItem from './NavbarItem';
import { SubNavData } from '../../utils/constants';

const SubNav = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-5 border-b h-[54px] px-[136px] sticky bg-white top-[60px] z-20 ">
      {SubNavData.map((data, index) => {
        return (
          <NavbarItem
            key={index}
            label={data.label}
            overlayContent={data.overlayContent}
          />
        );
      })}
    </nav>
  );
};

export default SubNav;
