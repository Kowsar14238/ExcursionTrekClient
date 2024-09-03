import Banner from "../Components/HomeComponents/Banner";
import Packages from "../Components/HomeComponents/Packages";
import TouristSpots from "../Components/HomeComponents/TouristSpots";
import TripOrganizer from "../Components/HomeComponents/TripOrganizer";

const Home = () => {
  return (
    <div className="my-2">
      <div className="">
        <Banner />
      </div>

      <div className="my-3 md:my-6 flex flex-col items-center justify-center gap-5">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center uppercase">
          Tourist Spots Section
        </h3>
        <TouristSpots />
      </div>

      <div>
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center uppercase">
          Meet Our Trip Organizer
        </h3>
        <TripOrganizer />
      </div>
      
      <div>
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center uppercase">
          Our Packages
        </h3>
        <Packages />
      </div>
      
    </div>
  );
};

export default Home;
