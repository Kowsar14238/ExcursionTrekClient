const AddTouristsSpot = () => {
  return (
    <div className="min-h-screen my-12 mx-2">
      <form className="max-w-md md:max-w-lg mx-auto p-6 bg-neutral-600 rounded-lg">
        <div className="mb-5">
          <input
            id="user_email"
            type="email"
            placeholder="User Email"
            className="input input-bordered w-full input-info"
          />
        </div>

        <div className="mb-5">
          <input
            id="user_name"
            type="text"
            placeholder="User Name"
            className="input input-bordered w-full input-info "
          />
        </div>

        <div className="md:grid grid-cols-2 gap-5 w-full">
          <div className="mb-5">
            <input
              id="tourists_spot_name"
              type="text"
              placeholder="Tourists Spot Name"
              className="input input-bordered w-full input-info"
            />
          </div>

          <div className="mb-5">
            <select id="country_name" className="select select-info w-full">
              <option disabled selected>
                Select Country
              </option>
              <option>Bangladesh</option>
              <option>Thailand</option>
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Vietnam</option>
              <option>Cambodia</option>
            </select>
          </div>
        </div>

        <div className="md:grid grid-flow-col gap-5 w-full">
          <div className="mb-5">
            <input
              id="seasonality"
              type="text"
              placeholder="Seasonality"
              className="input input-bordered w-full input-info"
            />
          </div>
          
          <div className="mb-5">
            <input
              id="average_cost"
              type="number"
              placeholder="Average Cost"
              className="input input-bordered input-info w-full"
            />
          </div>
        </div>

        <div className="md:grid grid-flow-col gap-5 w-full">
          <div className="mb-5">
            <input
              id="travel_time"
              type="number"
              placeholder="Travel Time (days)"
              className="input input-bordered w-full input-info"
            />
          </div>

          <div className="mb-5">
            <input
              id="total_visitors_per_year"
              type="number"
              placeholder="Total Visitors Per Year"
              className="input input-bordered w-full input-info"
            />
          </div>
        </div>

        <div className="mb-5">
          <input
            id="location"
            type="text"
            placeholder="Location"
            className="input input-bordered w-full input-info"
          />
        </div>

        <div className="mb-5">
          <input
            id="image_url"
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full input-info"
          />
        </div>

        <div className="mb-5">
          <textarea
            id="short_description"
            placeholder="Short Description"
            className="textarea textarea-bordered w-full textarea-info h-40 resize-none"
          ></textarea>
        </div>

        {/* Add Button */}
        <div className="relative z-0 w-full mb-5 group">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
