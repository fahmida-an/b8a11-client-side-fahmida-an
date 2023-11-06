import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import NavBar from "../pages/navbar/NavBar";

const ServiceDetails = () => {
  const services = useServices();
  const [serviceCard, setServiceCard] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const serviceDetail = services.find((service) => service._id === id);

    if (serviceDetail) {
      setServiceCard(serviceDetail);
    } else {
      console.error(`Service with id ${id} not found.`);
    }
  }, [id, services]);

  if (!serviceCard) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  //   const sortedServices = services.sort((a, b) => {
  //     // localeCompare is use for case-insensitive sorting
  //     return b.serviceName.localeCompare(a.serviceName);
  //   });

  return (
    <div>
      <NavBar></NavBar>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="lg:col-span-2">
          <img
            className="max-w-xl mx-auto h-[300] lg:max-w-4xl lg:mx-auto lg:h-[400px] mb-10"
            src={serviceCard.serviceImage}
            alt=""
          />
          <h1 className="text-3xl text-center font-bold mx-auto">
            {serviceCard.serviceName}
          </h1>
          <p className="mt-3 text-xl text-center">{serviceCard.details}</p>

          <button className="btn text-white bg-gradient-to-r from-zinc1 via-zinc2 to-zinc4 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
           <Link to={`/checkOut/${id}`}>CheckOut</Link>
          </button>
        </div>
      </div>

      {/* <div>
        {
        sortedServices.map(service => <ServiceName key={service._id} service={service}></ServiceName>)
        }
      </div> */}
    </div>
  );
};

export default ServiceDetails;
