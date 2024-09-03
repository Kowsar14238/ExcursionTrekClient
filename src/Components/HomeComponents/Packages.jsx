const Packages = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Adventure Travel Package */}
        <div className="card card-side bg-green-600 hover:bg-green-700 shadow-xl text-white">
          <figure className="w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dek7m00id/image/upload/v1725399808/Adventure_Travel_Package_hzjvbs.jpg"
              alt="Adventure Travel Package"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Adventure Travel Package</h2>
            <p className="description">
              Embark on an exhilarating adventure through rugged terrains and breathtaking landscapes.
            </p>
            <ul className="list-disc pl-5">
              <li>Guided hiking tours</li>
              <li>Camping gear provided</li>
              <li>Safety equipment included</li>
              <li>Meals and refreshments</li>
              <li>Transportation to/from the adventure site</li>
            </ul>
            <p className="mt-3">
              <strong>Cost:</strong> $500 - $1500
            </p>
            <div className="">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        {/* Luxury Travel Package */}
        <div className="card card-side bg-purple-600 hover:bg-purple-700 shadow-xl text-white">
          <figure className="w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dek7m00id/image/upload/v1725399799/Luxury_Travel_Package_azsv85.jpg"
              alt="Luxury Travel Package"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Luxury Travel Package</h2>
            <p className="description">
              Indulge in the finest accommodations and exclusive experiences at top destinations.
            </p>
            <ul className="list-disc pl-5">
              <li>5-star hotel accommodations</li>
              <li>Private guided tours</li>
              <li>Gourmet dining experiences</li>
              <li>Spa and wellness treatments</li>
              <li>Private transportation</li>
            </ul>
            <p className="mt-3">
              <strong>Cost:</strong> $2000 - $5000
            </p>

            <div className="">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        {/* Cultural Tour Package */}
        <div className="card card-side bg-blue-600 hover:bg-blue-700 shadow-xl text-white">
          <figure className="w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dek7m00id/image/upload/v1725399809/Cultural_Tour_Package_hfiapm.jpg"
              alt="Cultural Tour Package"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Cultural Tour Package</h2>
            <p className="description">
              Dive deep into the rich heritage and traditions of your destination with our cultural tours.
            </p>
            <ul className="list-disc pl-5">
              <li>Local cultural experiences</li>
              <li>Guided museum visits</li>
              <li>Traditional meals</li>
              <li>Workshops and demonstrations</li>
              <li>Accommodation in cultural heritage hotels</li>
            </ul>
            <p className="mt-3">
              <strong>Cost:</strong> $800 - $2000
            </p>
            <div className="">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        {/* Family Vacation Package */}
        <div className="card card-side bg-orange-600 hover:bg-orange-700 shadow-xl text-white">
          <figure className="w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dek7m00id/image/upload/v1725399810/Family_Vacation_Package_h7ulza.jpg"
              alt="Family Vacation Package"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Family Vacation Package</h2>
            <p className="description">
              Enjoy a fun-filled family getaway with activities and amenities for all ages.
            </p>
            <ul className="list-disc pl-5">
              <li>Family-friendly accommodations</li>
              <li>Childcare services</li>
              <li>Group activities and excursions</li>
              <li>Kid-friendly meals</li>
              <li>Complimentary passes to attractions</li>
            </ul>
            <p className="mt-3">
              <strong>Cost:</strong> $1000 - $3000
            </p>

            <div className="">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        {/* Honeymoon Package */}
        <div className="card card-side bg-pink-600 hover:bg-pink-700 shadow-xl text-white">
          <figure className="w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dek7m00id/image/upload/v1725399803/Honeymoon_Package_yxe759.jpg"
              alt="Honeymoon Package"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Honeymoon Package</h2>
            <p className="description">
              Celebrate your love with a romantic getaway in the most beautiful destinations.
            </p>
            <ul className="list-disc pl-5">
              <li>Romantic candlelight dinners</li>
              <li>Private couple’s spa sessions</li>
              <li>Luxury suite accommodations</li>
              <li>Personalized romantic tours</li>
              <li>Complimentary honeymoon amenities</li>
            </ul>
            <p className="mt-3">
              <strong>Cost:</strong> $1500 - $4000
            </p>

            <div className="">
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
