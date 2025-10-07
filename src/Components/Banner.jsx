import React from 'react';
import hero from '../assets/hero.png';

const Banner = () => {
  return (
    <div className="py-6">
      <div className="text-center space-y-3  ">
        <h1 className="text-4xl font-bold">We Build Productive Apps</h1>
        <p>
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <button className="btn m-3">Google Play</button>
        <button className="btn m-3">App Store</button>
        <img className="mx-auto mt-8" src={hero} alt="" />
      </div>
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-5 text-white text-center w-screen -mx-[calc((100vw-100%)/2)] ">
        <h2 className="text-3xl font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-center py-5 gap-12">
          <div>
            <p>Total Downloads</p>
            <h2 className="text-4xl font-bold">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h2 className="text-4xl font-bold">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h2 className="text-4xl font-bold">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
