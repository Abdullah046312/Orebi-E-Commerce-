import React from 'react';
import Container from './Container';
import bannerbtn from '../assets/bannerbutton.png';

const Bannerpart = () => {
  return (
    <section className='bg-bannerpic w-full md:h-[597px] h-[300px] bg-cover bg-no-repeat flex items-center'>
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center w-full">
          {/* Banner Image */}
          <div className="mb-4 md:mb-0">
  <img 
    src={bannerbtn} 
    alt="Banner Button" 
    className="w-full max-w-xs md:max-w-none hidden md:block" 
  />
</div>


          {/* Text Section */}
          <div className="pl-4 md:pl-10">
            <h2 className='text-[32px] md:text-[49px] text-black font-DMs font-bold'>Final Offer</h2>
            <div className="flex py-2 items-center gap-1">
              <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>Up to</h4>
              <h2 className='text-[30px] md:text-[40px] text-[#262626] font-DMs font-bold'>50%</h2>
              <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>sale for all furniture items!</h4>
            </div>
            <div className="mt-3">
              <button className='h-[40px] w-[160px] md:h-[50px] md:w-[185px] bg-[#262626] text-white text-[14px] md:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bannerpart;
