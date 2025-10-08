import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#f5f5f5]">
      <Navbar />
      <div className="flex-1 container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
