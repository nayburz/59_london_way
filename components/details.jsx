const Details = () => {
  return (
    <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
      <p className="text-lg font-bold text-gray-700">
        Price
        <br />
        <span className="text-amber-700">$1,300,000</span>
      </p>
      <p className="text-lg font-bold text-gray-700">
        Bedrooms <br />
        <span className="text-amber-700">2</span>
      </p>
      <p className="text-lg font-bold text-gray-700">
        Bathrooms <br />
        <span className="text-amber-700">2</span>
      </p>
      <p className="text-lg font-bold text-gray-700">
        Interior <br />
        <span className="text-amber-700">1,250 Sq Ft.</span>
      </p>
      <p className="text-lg font-bold text-gray-700">
        Exterior <br />
        <span className="text-amber-700">1.11 Acres</span>
      </p>
    </div>
  );
};

export default Details;
