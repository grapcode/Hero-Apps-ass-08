import { Link, NavLink } from 'react-router';
import logoimg from '../assets/logo.png';
import { Github } from 'lucide-react';

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `m-2 font-semibold ${
            isActive
              ? ' border-b border-[#632EE3] w-fit bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'
              : 'text-black'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `m-2 font-semibold ${
            isActive
              ? ' border-b border-[#632EE3] w-fit bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'
              : 'text-black'
          }`
        }
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `m-2 font-semibold ${
            isActive
              ? ' border-b border-[#632EE3] w-fit bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'
              : 'text-black'
          }`
        }
      >
        Installation
      </NavLink>

      {/* <Link to="/installation">
        <li className="m-2 font-semibold ">Installation</li>
      </Link> */}
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
        <Link to="/">
          <div className="flex btn btn-ghost">
            <img className="w-8" src={logoimg} alt="" />
            <p className=" font-bold text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              HERO.IO
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          href="https://github.com/grapcode"
          className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
