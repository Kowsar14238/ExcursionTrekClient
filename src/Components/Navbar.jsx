import { RiMenu2Fill, RiEqualLine } from "react-icons/ri";
import { MdHome, MdAdd } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Fill />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a><MdHome />Home</a>
            </li>
            <li>
              <details>
                <summary><RiEqualLine />All Tourists Spot</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a><MdAdd />Add Tourists Spot</a>
            </li>
            <li>
              <a><FaRegListAlt />My List</a>
            </li>
          </ul>
        </div>
        <a className="text-lg md:text-xl">Excursion<span className="">Trek</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a><MdHome />Home</a>
          </li>
          <li>
            <details>
              <summary><RiEqualLine />All Tourists Spot</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a><MdAdd />Add Tourists Spot</a>
          </li>
          <li>
            <a><FaRegListAlt />My List</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1 ">
        <a className="btn">Register</a>
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
