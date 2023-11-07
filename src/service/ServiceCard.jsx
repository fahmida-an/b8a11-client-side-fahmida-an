import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const ServiceCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    price,
    providerName,
    providerImage,
    providerLocation,
    details,
  } = service;
  return (
    <>
      <div className="max-w-sm mx-auto bg-red1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 hover:transition-shadow hover:bg-fuscia hover:translate-y-3 hover:shadow-2xl">
        <a href="#">
          <img className="rounded-t-lg w-full h-[200px]" src={serviceImage} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>

          {details?.length > 100 ? (
            <p className="">
              {details.slice(0, 100)}

              <Link className="text-green-500 ml-1">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <p className="font-bold py-1">Price: ${price}</p>

          <div className="flex items-center justify-between py-2">
          <img className="w-14 h-14 rounded-full border-green-500 border-2" src={providerImage} alt="" />
          <div className="flex flex-col text-sm">
          <p>Service Provider</p>
          <p className="text-green-500">{providerName}</p>
          <p className="">Location : {providerLocation}</p>
          </div>
          <div className="mt-8">
          <Link to={`/services/${_id}`}>
          <button className="text-white bg-gradient-to-r  from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View details</button>
          </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}
