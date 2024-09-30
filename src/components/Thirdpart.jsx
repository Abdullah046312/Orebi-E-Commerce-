import React from 'react';
import Container from './Container';
import { FaHeart } from "react-icons/fa";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { BsFillCartPlusFill } from "react-icons/bs";
import Slider from "react-slick";  // Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import images3 from "../assets/images3.png";
import images4 from "../assets/images4.png";
import images5 from "../assets/images5.png";
import images6 from "../assets/images6.png";
import images7 from "../assets/images7.png";
import images8 from "../assets/images8.png";
import images9 from "../assets/images9.png";
import images10 from "../assets/images10.png";

const products = [
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
];

const Thirdpart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    className: "slider w-full", // Custom class for styling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Container className="w-full overflow-hidden"> {/* Ensure the container is full width */}
        {/* New Arrivals Section */}
        <div className="pb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#262626] font-DMs font-bold">
            New Arrivals
          </h2>
        </div>

        {/* Product Slider */}
        <Slider {...settings}>
          {products.slice(0, 4).map((image, index) => (
            <ProductCard key={index} image={image} />
          ))}
        </Slider>

        {/* Bestsellers Section */}
        <div className="py-10">
          <div className="pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#262626] font-DMs font-bold mt-20">
              Our Bestsellers
            </h2>
          </div>

          {/* Bestsellers Slider */}
          <Slider {...settings}>
            {products.slice(4).map((image, index) => (
              <ProductCard key={index + 4} image={image} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

const ProductCard = ({ image }) => (
  <div 
    className="relative flex justify-center items-end bg-cover bg-no-repeat h-[376px] group m-2"
    style={{ backgroundImage: `url(${image})` }}
  >
    <button className="absolute top-4 left-4 h-9 w-[92px] bg-black text-white text-sm font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out">
      New
    </button>
    <div className="absolute bottom-0 left-0 right-0 bg-[#1A3636] bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-5">
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

export default Thirdpart;
