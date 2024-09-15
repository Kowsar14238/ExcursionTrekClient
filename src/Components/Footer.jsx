import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/all-tourists-spot">All Spot</Link>
          <Link to="/add-tourists-spot">Add Spot</Link>
          <Link to="/my-list">My List</Link>
        </nav> 
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="text-blue-300">Excursion Trek</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
