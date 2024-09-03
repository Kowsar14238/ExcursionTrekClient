import Banner from "../Components/HomeComponents/Banner";
import TouristSpots from "../Components/HomeComponents/TouristSpots";

const Home = () => {
  return (
    <div className="my-2">
      <div className="">
        <Banner />
      </div>
      <div className="my-3 md:my-6 flex flex-col items-center justify-center gap-5">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Tourist Spots Section
        </h3>

        <TouristSpots />
      </div>
    </div>
  );
};

export default Home;
