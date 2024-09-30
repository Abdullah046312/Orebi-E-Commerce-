import React, { useState } from "react";
import Container from "./Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="bg-[#D8D8D8]">
      <Container className="py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          {/* Shop by Category */}
          <div className="flex items-center gap-3 w-full lg:w-1/4 mb-4 lg:mb-0 relative">
            <FaBarsProgress 
              className="cursor-pointer font-dm" 
              onClick={handleCategoryToggle} 
            />
            <p 
              className="cursor-pointer" 
              onClick={handleCategoryToggle}
            >
              Shop By Category
            </p>

            {isCategoryOpen && (
              <ul className="z-10 bg-black text-[15px] font-semibold text-white absolute top-12 left-0 p-4 rounded shadow-lg w-48">
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Accessories</li>
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Furniture</li>
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Electronics</li>
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Clothing</li>
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Bags</li>
                <li className="hover:text-[#FF6500] duration-500 ease-in-out py-1">Home Appliances</li>
              </ul>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative flex justify-end w-full lg:w-2/4 mb-4 lg:mb-0">
            <input
              className="py-2 w-full lg:w-full sm:w-1/4 rounded pl-2 border-none"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-3 right-3 text-[#767676]" />
          </div>

          {/* Account & Cart Icons */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end items-center gap-6">
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <FcBusinessman className="text-[30px]" />
                <IoMdArrowDropdown className="text-[20px]" />
              </div>
              {isOpen && (
                <ul className="absolute z-10 right-0 mt-2 bg-white shadow-lg p-2 rounded">
                  <li className="px-4 hover:text-white hover:bg-black py-2 cursor-pointer">Account</li>
                  <li className="px-4 hover:text-white hover:bg-black py-2 cursor-pointer">Log in</li>
                </ul>
              )}
            </div>
            <FaShoppingCart className="text-[20px] cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
