const Banner = () => {
  return (
    <div>
      <div className="carousel w-full rounded-lg">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725119819/Saint_Martin_Island_BD_jymusc.jpg"
            className="w-full"
            alt="Saint Martin Island"
          />
          <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black p-4 text-white">
            <h2 className="text-lg sm:text-2xl font-bold">Saint Martin Island</h2>
            <p className="text-xs sm:text-base">
              A tranquil coral island in Bangladesh, famous for its
              crystal-clear waters and unspoiled beaches.
            </p>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725119818/Bangkok_tcfvma.jpg"
            className="w-full"
            alt="Bangkok"
          />
          <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black p-4 text-white">
            <h2 className="text-lg sm:text-2xl font-bold">Bangkok</h2>
            <p className="text-xs sm:text-base">
              The vibrant capital of Thailand, known for its ornate temples,
              lively street markets, and bustling nightlife.
            </p>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725119816/Taman_Negara_National_Park_d7yqfq.jpg"
            className="w-full"
            alt="Taman Negara National Park"
          />
          <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black p-4 text-white">
            <h2 className="text-lg sm:text-2xl font-bold">Taman Negara National Park</h2>
            <p className="text-xs sm:text-base">
              A sprawling tropical rainforest in Malaysia, home to diverse
              wildlife and ancient trees.
            </p>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/dek7m00id/image/upload/v1725119816/Yogyakarta_tzddyn.jpg"
            className="w-full"
            alt="Yogyakarta"
          />
          <div className="absolute bottom-0 left-0 bg-opacity-50 bg-black p-4 text-white">
            <h2 className="text-lg sm:text-2xl font-bold">Yogyakarta</h2>
            <p className="text-xs sm:text-base">
              A cultural hub in Indonesia, renowned for its traditional arts, historical landmarks, and vibrant street food scene.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
