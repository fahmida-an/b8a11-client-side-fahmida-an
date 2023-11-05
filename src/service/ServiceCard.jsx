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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
        <a href="#">
          <img className="rounded-t-lg w-full h-[200px]" src={serviceImage} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>

          {details?.length > 200 ? (
            <p>
              {details.slice(0, 200)}

              <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}
