import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import NavBar from "../pages/navbar/NavBar";
import ServiceName from "./ServiceName";
import { AuthContext } from "../provider/AuthProvider";

const ServiceDetails = () => {
  const services = useServices();
  const {user} = useContext(AuthContext)
  const [serviceCard, setServiceCard] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const serviceDetail = services.find((service) => service._id === id);

    if (serviceDetail) {
      setServiceCard(serviceDetail);
    } else {
      console.log(console.error);
    }
  }, [id, services]);

  if (!serviceCard) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const sortedServices = services.sort((a, b) => {
    // localeCompare is use for case-insensitive sorting
    return b.serviceName.localeCompare(a.serviceName);
  });

  return (
    <div>
      <NavBar></NavBar>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div className="lg:col-span-2 border-r-2">
          <img
            className="h-[300px] lg:w-[900px] lg:px-16 lg:h-[400px] mb-10"
            src={serviceCard.serviceImage}
            alt=""
          />
         
         <div className="flex justify-between">
         <h1 className="text-2xl font-bold px-16">
            {serviceCard.serviceName} <span className="text-yellow-400">(price: ${serviceCard.price})</span>
          </h1>

          <div className="px-16">
            <button className="btn text-white bg-gradient-to-r from-green1 via-green-500 to-teal-800 hover:bg-gradient-to-br outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to={`/checkOut/${id}`}>CheckOut</Link>

            </button>

          </div>
          
         </div>
          <p className="mt-4 text-md px-16">{serviceCard.details}</p>


          <div className="flex items-center justify-center mt-8">
            <img className="w-40 h-40" src={serviceCard.providerImage} alt="" />
          </div>
          <div className="px-16 mt-8 font-bold">
            <p>Provider Location: <span>{serviceCard.providerLocation}</span></p>
            <p>About Provider: <span className="font-normal">{serviceCard.providerDescription}</span></p>
          </div>

         

          <div className=" grid grid-cols-2 max-w-2xl mx-auto py-10">
        <div className="block w-72 p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4">
            Instant Services
          </h5>
          <p className=" text-gray-700 text-sm">
            Your convenience is our priority - we&apos;re ready to serve you as
            soon as you book!
          </p>
        </div>

        <div className="block w-72 p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4 ">
            24/7 Quality Service
          </h5>
          <p className=" text-gray-700 text-sm ">
          Unmatched Quality, Day and Night: 24/7 Service at Your Service.
          </p>
        </div>

        <div className="block w-72 p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4">
            Easy Customer Services
          </h5>
          <p className=" text-gray-700 text-sm ">
          Simplify Your Experience with Our Easy Customer Services.
          </p>
        </div>
        <div className="block w-72 p-6 mt-4 bg-red1 border border-t-green1 border-gray-200 rounded-lg shadow hover:bg-white ">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-zinc4 ">
            Quality Cost Services
          </h5>
          <p className=" text-gray-700 text-sm">
          Quality Services, Affordable Prices: Excellence Need Not Be Expensive. Experience Superior Value with Us Today.
          </p>
        </div>
      </div>
        </div>

        <div className="px-8">
          {sortedServices.slice(1,5).map((service) => (
            <ServiceName key={service._id} service={service}></ServiceName>
          ))}
        </div>

        
      </div>

  
    </div>
  );
};

export default ServiceDetails;
