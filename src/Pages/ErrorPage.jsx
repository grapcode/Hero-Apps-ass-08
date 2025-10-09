import React from 'react';
import errorPage from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img src={errorPage} alt="" />
      </div>
      <div className="text-center space-y-2 my-6 ">
        <h1 className="text-4xl font-semibold">Oops, Page not found!</h1>
        <p>The page you are looking for is not available.</p>

        <Link to="/">
          <button className="btn text-white bg-linear-to-r px-6 from-[#632EE3] to-[#9F62F2]">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
