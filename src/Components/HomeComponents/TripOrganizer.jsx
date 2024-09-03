import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const TripOrganizer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      <div className="card card-side bg-slate-500 hover:bg-stone-600 shadow-xl border-white h-[300px]">
        <figure className="w-full md:w-1/2 ">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725393897/Tour_Agent_ybxclv.jpg"
            alt="Tour_Agent"
          />
        </figure>
        <div className="card-body text-white">
          <div>
            <h2 className="card-title">Arjun Patel</h2>
            <p>Tour Agent</p>
          </div>
          <p className="description">
            Your trusted guide to explore new destinations.
          </p>
          <div className="grid grid-flow-col gap-2">
            <button className="">
              <FaWhatsapp />
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <FaTelegram />
            </button>
            <button>
              <MdEmail />
            </button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-slate-500 hover:bg-stone-600 shadow-xl border-white h-[300px]">
        <figure className="w-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725394198/Trip_Advisor_b9hdr9.jpg"
            alt="Trip_Advisor"
          />
        </figure>
        <div className="card-body text-white">
          <div>
            <h2 className="card-title">Minh Nguyen</h2>
            <p>Trip Advisor</p>
          </div>
          <p className="description">
            Expert advice for planning your perfect trip.
          </p>
          <div className="grid grid-flow-col gap-2">
            <button className="">
              <FaWhatsapp />
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <FaTelegram />
            </button>
            <button>
              <MdEmail />
            </button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-slate-500 hover:bg-stone-600 shadow-xl border-white h-[300px]">
      <figure className="w-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725393898/Tour_Manager_cwuo5g.jpg"
            alt="Tour_Manager"
          />
        </figure>
        <div className="card-body text-white">
          <div>
            <h2 className="card-title">Aiko Tanaka</h2>
            <p>Tour Manager</p>
          </div>
          <p className="description">
            Organizing and managing your tours seamlessly.
          </p>
          <div className="grid grid-flow-col gap-2">
            <button className="">
              <FaWhatsapp />
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <FaTelegram />
            </button>
            <button>
              <MdEmail />
            </button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-slate-500 hover:bg-stone-600 shadow-xl border-white h-[300px]">
        <figure className="w-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725393908/Services_Manager_dsc6bj.jpg"
            alt="Services_Manager"
          />
        </figure>
        <div className="card-body text-white">
          <div>
            <h2 className="card-title">Somchai Chaiyapong</h2>
            <p>Services Manager</p>
          </div>
          <p className="description">
            Ensuring top-notch services for a hassle-free journey.
          </p>
          <div className="grid grid-flow-col gap-2">
            <button className="">
              <FaWhatsapp />
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <FaTelegram />
            </button>
            <button>
              <MdEmail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripOrganizer;
