import React, { useState } from "react";
import { footerData } from "../../utils/constants";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    if (openSection === index) {
      setOpenSection(null); // Close if it's already open
    } else {
      setOpenSection(index); // Open the clicked section
    }
  };

  return (
    <footer className="bg-black text-white py-10 h-auto lg:h-[600px] lg:px-32 ">
      <div className="flex items-center justify-between mb-4 px-6 ">
        <img src={footerData.logoSection.title} alt="" className="invert h-8" />
        {/* Footer Links */}
        <ul className="hidden text-sm text-gray-400 space-x-4 lg:flex items-center ">
          {footerData.footerLinks.map((link, index) => {
            return index === 0 ? (
              <li
                key={index}
                className=" cursor-pointer hover:text-white flex items-center gap-2"
              >
                {link}
              </li>
            ) : (
              <li
                key={index}
                className=" cursor-pointer hover:text-white flex items-center gap-2"
              >
                <span> | </span>
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 gap-8 px-6">
        {/* Logo and Intro Section */}
        <div className="flex flex-col text-xs md:text-base items-start gap-5 col-span-2">
          <p className="text-sm ">{footerData.logoSection.description}</p>
          <button className="bg-white text-black py-2 px-4 rounded">
            {footerData.logoSection.buttonText}
          </button>
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 lg:mb-0">
            {footerData.socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Sections with Accordion on Mobile */}
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3
              className="font-semibold mb-5 lg:cursor-auto cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {/* Chevron for Mobile Accordion */}
              <span className="lg:hidden">
                {openSection === index ? "▲" : "▼"}
              </span>
            </h3>
            <ul
              className={`space-y-1 text-sm ${
                openSection === index ? "block" : "hidden"
              } lg:block`}
            >
              {section.items.map((item, idx) => (
                <li className="cursor-pointer hover:text-gray-400" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-10 px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center border-t border-gray-700 pt-2">
          {/* App Links */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            {footerData.appLinks.map((app, index) => {
              const Icon = app.icon;
              return (
                <a
                  key={index}
                  href={app.url}
                  className="flex items-center bg-white text-black py-2 px-3 rounded space-x-2"
                >
                  <Icon size={20} />
                  <span className="text-xs lg:text-base">{app.text}</span>
                </a>
              );
            })}
          </div>
          {/* Language Dropdown */}
          <div className="mb-4 lg:mb-0">
            <label
              htmlFor="language-select"
              className="text-sm text-gray-400 mr-2"
            >
              English (India)
            </label>
            <select
              id="language-select"
              className="bg-black border border-gray-700 text-gray-400 text-sm py-2 px-4 rounded"
            >
              {footerData.languageOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <ul className="text-sm text-gray-400 space-y-4 flex flex-col items-start justify-start lg:hidden">
            {footerData.footerLinks.map((link, index) => {
              return (
                <li key={index} className="cursor-pointer hover:text-white ">
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
