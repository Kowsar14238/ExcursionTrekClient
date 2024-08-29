import { RiMenu2Fill, RiEqualLine } from "react-icons/ri";
import { MdHome, MdAdd } from "react-icons/md";
import { FaRegListAlt, FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start p-0 m-0">
        <div className="dropdown p-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-1"
          >
            <RiMenu2Fill />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">
                <MdHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-tourists-spot">
                <RiEqualLine />
                All Spot
              </Link>
            </li>
            <li>
              <Link to="/add-tourists-spot">
                <MdAdd />
                Add Spot
              </Link>
            </li>
            <li>
              <Link to="/my-list">
                <FaRegListAlt />
                My List
              </Link>
            </li>
            <div className="grid grid-flow-col gap-1 py-2">
              <Link to="register" className="btn btn-sm">
                Register
              </Link>
              <Link to="login" className="btn btn-sm">
                Login
              </Link>
            </div>
          </ul>
        </div>
        <Link to="/" className="text-lg md:text-xl p-0 m-0">
          Excursion<span className="p-0 m-0">Trek</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex p-0 m-0">
        <ul className="menu menu-horizontal px-1 p-0 m-0">
          <li>
            <Link to="/">
              <MdHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-tourists-spot">
              <RiEqualLine />
              All Spot
            </Link>
          </li>
          <li>
            <Link to="/add-tourists-spot">
              <MdAdd />
              Add Spot
            </Link>
          </li>
          <li>
            <Link to="/my-list">
              <FaRegListAlt />
              My List
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3 p-0 m-0">
        <div className="hidden md:grid md:grid-flow-col md:gap-1 p-0 m-0">
          <Link to="register" className="btn">
            Register
          </Link>
          <Link to="login" className="btn">
            Login
          </Link>
        </div>
        <div className="py-0 my-0">
          <label className="swap swap-rotate p-0 m-0 grid justify-center items-center">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <IoIosSunny />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <FaRegMoon />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
