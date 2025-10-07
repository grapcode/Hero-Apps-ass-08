import React from 'react';
import { Link } from 'react-router';
import logoimg from '../assets/logo.png';
import { Github } from 'lucide-react';

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li className="m-2">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow lg:px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-8" src={logoimg} alt="" />
        <a className="btn btn-ghost font-bold text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
