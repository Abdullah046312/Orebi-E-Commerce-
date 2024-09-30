import React from 'react';
import Container from './Container';
import { FaHeart } from "react-icons/fa";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { BsFillCartPlusFill } from "react-icons/bs";
import images12 from "../assets/images12.png";
import images13 from "../assets/images13.png";
import images14 from "../assets/images14.png";
import images15 from "../assets/images15.png";
import images7 from "../assets/images7.png";
import images8 from "../assets/images8.png";
import images9 from "../assets/images9.png";
import images10 from "../assets/images10.png";

const products = [
  { src: images12, type: "special" },
  { src: images13, type: "special" },
  { src: images14, type: "special" },
  { src: images15, type: "special" },
  { src: images7, type: "bestseller" },
  { src: images8, type: "bestseller" },
  { src: images9, type: "bestseller" },
  { src: images10, type: "bestseller" },
];

const Fivethpart = () => {
  return (
    <section>
      <Container>
        {/* Special Offers Section */}
        <div className="pb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#262626] font-DMs font-bold">
            Special Offers
          </h2>
        </div>
        
        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={index} image={product.src} />
          ))}
        </div>

        {/* Bestsellers Section */}
        <div className="py-10">
          <div className="pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#262626] font-DMs font-bold mt-20">
              Our Bestsellers
            </h2>
          </div>

          {/* Bestsellers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4).map((product, index) => (
              <ProductCard key={index} image={product.src} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ProductCard = ({ image }) => (
  <div 
    className="relative flex justify-center items-end bg-cover bg-no-repeat h-[376px] group" 
    style={{ backgroundImage: `url(${image})` }}
  >
    <button className="absolute top-4 left-4 h-9 w-[92px] bg-black text-white text-sm font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out">
      New
    </button>
    <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1A3636] bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <h2 className="flex items-center gap-5 text-xl font-DMs font-bold">
        Add to Wish List <FaHeart />
      </h2>
      <h3 className="flex items-center gap-5 text-base font-DMs font-semibold py-2">
        Compare <PiArrowsInCardinalBold />
      </h3>
      <h4 className="flex items-center gap-5 text-[16px] font-DMs font-bold">
        Add to Cart <BsFillCartPlusFill />
      </h4>
    </div>
  </div>
);

export default Fivethpart;
