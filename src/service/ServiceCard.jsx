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
    details,
  } = service;
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 hover:transition-shadow hover:bg-red1 hover:translate-y-3 hover:shadow-2xl">
        <a href="#">
          <img className="rounded-t-lg w-full h-[200px]" src={serviceImage} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>

          {details?.length > 200 ? (
            <p className="">
              {details.slice(0, 200)}

              <Link className="text-blue-600 ml-1">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <div className="items-end justify-end text-end">
          <button className="text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to={`/services/${_id}`}>View details</Link></button>
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
