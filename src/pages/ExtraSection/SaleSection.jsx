import sale from "../../assets/images/sale.jpg"
const SaleSection = () => {
  return (
    <div>
      <div className="hero h-[600px]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={sale}
            className="w-[500px] h-[400px] rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="py-6 font-bold lg:text-2xl text-lg text-yellow-600">
            Capture the savings! <br />
             our camera section for <br />
             exclusive discounts on photography gear.
            </h1>
            <button className="btn bg-yellow-400">Book Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
